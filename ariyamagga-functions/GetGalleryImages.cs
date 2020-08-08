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
            var containerName = "imagegallery";
            try {

                var connectionString = "DefaultEndpointsProtocol=https;AccountName=ariyamaggasenasuna;AccountKey=sahLxcqBUbxARK6kyNKsLDubiVSepbvLXR47X9UKe5QpIiBtvr/2N6IbMGmbVfUOZyaz4lzKvfchp97QvuCCJg==;EndpointSuffix=core.windows.net";
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);

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
                log.LogInformation ($"Error occured trying to get the images from the container {containerName}.\r\nException:{ex}");
                return new BadRequestResult ();
            }
        }
    }
}