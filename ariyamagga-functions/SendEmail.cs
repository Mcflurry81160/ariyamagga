using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace Ariyamagga.Contact {
    public class SendEmail {
        [FunctionName ("SendEmail")]
        public async Task<IActionResult> Run (
            [HttpTrigger (AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req,
            ILogger log) {

            string requestBody = await new StreamReader (req.Body).ReadToEndAsync ();
            var emailData = JsonConvert.DeserializeObject<Email> (requestBody);

            string sendEmailResult;

            try {
                var sendEmailResponse = await SendEmailAndHandleResults (emailData);

                if (SuccessStatusCodes.Any(x => sendEmailResponse.StatusCode == x))
                    sendEmailResult = "Email was successfully sent";
                else
                    sendEmailResult = "There was an error sending the email";

            } catch (Exception ex) {

                sendEmailResult = $"There was an error sending the email: {ex.Message}";
            }

            return new OkObjectResult (sendEmailResult);
        }

        private HttpStatusCode[] SuccessStatusCodes => new HttpStatusCode[] { HttpStatusCode.OK, HttpStatusCode.Accepted };

        public async Task<Response> SendEmailAndHandleResults (Email emailData) {
            var apiKey = Environment.GetEnvironmentVariable ("SendGridEmailApiKey");
            var client = new SendGridClient (apiKey);
            var from = new EmailAddress (emailData.FromAddress, "User A");
            var subject = emailData.Subject;
            var to = new EmailAddress ("k4kavan@gmail.com", "User B");
            var plainTextContent = emailData.Body;
            var htmlContent = $"<strong>{emailData.Body}</strong>";
            var msg = MailHelper.CreateSingleEmail (from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync (msg);

            return response;
        }
    }

    public class Email {
        public string Subject { get; set; }
        public string Body { get; set; }
        public string FromAddress { get; set; }
    }
}