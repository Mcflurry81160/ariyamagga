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

            log.LogInformation ("Triggerd Azure function to send email");
            string requestBody = await new StreamReader (req.Body).ReadToEndAsync ();
            var emailData = JsonConvert.DeserializeObject<Email> (requestBody);

            string sendEmailResult;

            try {
                log.LogInformation ($"Sending email data. Email data:\r\n{requestBody}");
                var sendEmailResponse = await SendEmailAndHandleResults (emailData);

                // log.LogInformation($"Email send response: {JsonConvert.SerializeObject(sendEmailResponse)}");

                if (SuccessStatusCodes.Any (x => sendEmailResponse.StatusCode == x))
                    sendEmailResult = "Email was successfully sent";
                else{
                    sendEmailResult = $"There was an error sending the email";
                }
                    

            } catch (Exception ex) {

                sendEmailResult = $"There was an error sending the email: {ex.Message}";
            }

            log.LogInformation ($"Result: {sendEmailResult}");
            return new OkObjectResult (sendEmailResult);
        }

        private HttpStatusCode[] SuccessStatusCodes => new HttpStatusCode[] { HttpStatusCode.OK, HttpStatusCode.Accepted };

        public async Task<Response> SendEmailAndHandleResults (Email emailData) {
            var apiKey = Environment.GetEnvironmentVariable ("SendGridEmailApiKey");
            var client = new SendGridClient (apiKey);
            var from = new EmailAddress (emailData.FromAddress, $"{emailData.FromFirstName} {emailData.FromLastName}");
            var subject = emailData.Subject;
            var to = new EmailAddress ("ariyamagga@gmail.com", "Ariyamagga");
            var plainTextContent = emailData.Message;
            var htmlContent = $"<strong>{emailData.Message}</strong>";
            var msg = MailHelper.CreateSingleEmail (from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync (msg);

            return response;
        }
    }

    public class Email {
        public string Subject { get; set; }
        public string Message { get; set; }
        public string FromAddress { get; set; }
        public string FromFirstName { get; set; }
        public string FromLastName { get; set; }
    }
}