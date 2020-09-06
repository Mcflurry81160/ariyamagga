using System;
using System.IO;
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
            var data = JsonConvert.DeserializeObject<Email> (requestBody);

            string sendEmailResult;

            try {
                var sendEmailResponse = await SendEmailAndHandleResults ();

                if (sendEmailResponse.StatusCode == System.Net.HttpStatusCode.OK)
                    sendEmailResult = "Email was successfully sent";
                else
                    sendEmailResult = "There was an error sending the email";

            } catch (Exception) {

                sendEmailResult = "There was an error sending the email";
            }

            return new OkObjectResult (sendEmailResult);
        }

        public async Task<Response> SendEmailAndHandleResults () {
            var apiKey = Environment.GetEnvironmentVariable ("SendGridEmailApiKey");
            var client = new SendGridClient (apiKey);
            var from = new EmailAddress ("kforkavan@live.com", "User A");
            var subject = "Sending with SendGrid is Fun Test";
            var to = new EmailAddress ("k4kavan@gmail.com", "User B");
            var plainTextContent = "and easy to do anywhere, even with C#";
            var htmlContent = "<strong>and easy to do anywhere, even with C#</strong>";
            var msg = MailHelper.CreateSingleEmail (from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync (msg);

            return response;
        }
    }

    public class Email {
        public string Subject { get; set; }
        public string Body { get; set; }
    }
}