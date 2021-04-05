using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Ariyamagga.AriyamaggaFunctions.Classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Newtonsoft.Json;

namespace Ariyamagga.GetGalleryImages {
    public static class GetGalleryImages {
        [FunctionName ("GetGalleryImages")]
        public static async Task<IActionResult> Run (
            [HttpTrigger (AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log) {
            log.LogInformation ("Starting getting images...");
            //follow best practices when getting connection strings
            if (req.Body == null) {
                log.LogError ("Did not have a valid container name...");
                return new BadRequestResult ();
            }

            StreamReader reader = new StreamReader (req.Body);
            string containerName = reader.ReadToEnd ();
            try {
                var connectionString = Environment.GetEnvironmentVariable ("AriyamaggaStorageConnectionString");
                if (connectionString == null) {
                    log.LogInformation ("There was an error getting environment variables");
                    return new BadRequestResult ();
                }

                CloudStorageAccount storageAccount = CloudStorageAccount.Parse (connectionString);

                var blobClient = storageAccount.CreateCloudBlobClient ();
                var storageContainer = blobClient.GetContainerReference (containerName);

                BlobContinuationToken blobContinuationToken = null;
                var blobSegment = await storageContainer.ListBlobsSegmentedAsync (
                    prefix: null,
                    useFlatBlobListing: true,
                    blobListingDetails: BlobListingDetails.None,
                    maxResults: null,
                    currentToken: blobContinuationToken,
                    options: null,
                    operationContext: null);

                var imageList = new List<Image> ();
                foreach (var blob in blobSegment.Results) {
                    //get the url of each blob here
                    imageList.Add (new Image {
                        Url = blob.Uri.AbsoluteUri
                    });
                }
                return new OkObjectResult (imageList);

            } catch (Exception ex) {
                log.LogError ($"Error occurred trying to get the images from the container {containerName}.\r\nException:{ex}");
                return new BadRequestResult ();
            }
        }
    }
}