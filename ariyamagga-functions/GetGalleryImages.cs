using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

namespace Ariyamagga.GetGalleryImages
{
    public static class GetGalleryImages
    {
        [FunctionName("GetGalleryImages")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string name = req.Query["name"];

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            name = name ?? data?.name;

            string responseMessage = string.IsNullOrEmpty(name)
                ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
                : $"Hello, {name}. This HTTP triggered function executed successfully.";


            //follow best practices when getting connection strings
            var connectionString = "";
            CloudStorageAccount backupStorageAccount = CloudStorageAccount.Parse(connectionString);

            var backupBlobClient = backupStorageAccount.CreateCloudBlobClient();
            var backupContainer = backupBlobClient.GetContainerReference("CONTAINER");

            BlobContinuationToken blobContinuationToken = null;
            var blobSegment = await backupContainer.ListBlobsSegmentedAsync( 
                prefix: null,
                useFlatBlobListing: true, 
                blobListingDetails: BlobListingDetails.None,
                maxResults: null,
                currentToken: blobContinuationToken,
                options: null,
                operationContext: null);

            foreach (var blob in blobSegment.Results)
            {
                //get the url of each blob here

            }

            return new OkObjectResult(responseMessage);
        }
    }
}
