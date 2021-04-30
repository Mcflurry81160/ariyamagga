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

namespace Ariyamagga.GetBlobInfo {
    public static class GetBlobInfo {
        [FunctionName ("GetBlobInfo")]
        public static async Task<IActionResult> Run (
            [HttpTrigger (AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log) {
            log.LogInformation ("Starting getting images...");
            if (req.Body == null) {
                log.LogError ("Did not have a valid container name...");
                return new BadRequestResult ();
            }

            StreamReader reader = new StreamReader (req.Body);
            string blobInfoString = reader.ReadToEnd ();
            BlobInfo blobInfo = JsonConvert.DeserializeObject<BlobInfo>(blobInfoString);
            try {
                var connectionString = Environment.GetEnvironmentVariable ("AriyamaggaStorageConnectionString");
                if (connectionString == null) {
                    log.LogInformation ("There was an error getting environment variables");
                    return new BadRequestResult ();
                }

                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                CloudBlobContainer storageContainer = blobClient.GetContainerReference(blobInfo.ContainerName);
                CloudBlockBlob cloudBlockBlob = storageContainer.GetBlockBlobReference(blobInfo.ImageName);

                var absoluteUrl = cloudBlockBlob.Uri.AbsoluteUri;
                return new OkObjectResult (absoluteUrl);

            } catch (Exception ex) {
                log.LogError ($"Error occurred trying to get the images from the container {blobInfo.ContainerName}.\r\nException:{ex}");
                return new BadRequestResult ();
            }
        }
    }

    public class BlobInfo {
        public string ContainerName { get; set; }
        public string ImageName { get; set; }
    }
}