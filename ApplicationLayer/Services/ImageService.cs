using ApplicationLayer.IRepository.Images;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Services
{
    public class ImageService : IImageService
    {
        private IHostingEnvironment _hostingEnvironment;
        public ImageService(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public async Task<string> SaveImage(string dir, string base64ImageString)
        {

            try
            {
                var uniquefilenamecover = Guid.NewGuid(); ;

                String[] strings = base64ImageString.Split(",");
                String extension;
                switch (strings[0])
                {//check image's extension
                    case "data:image/jpeg;base64":
                        extension = ".jpeg";
                        break;
                    case "data:image/png;base64":
                        extension = ".png";
                        break;
                    case "data:video/quicktime;base64":
                        extension = ".mp4";
                        break;
                    case "data:application/pdf;base64":
                        extension = ".pdf";
                        break;
                    default://should write cases for more images types
                        extension = ".jpg";
                        break;
                }

                string converted = base64ImageString.Substring(base64ImageString.IndexOf(",") + 1);
                var bytes = Convert.FromBase64String(converted);
                string filePath = Path.Combine(_hostingEnvironment.ContentRootPath + "\\wwwroot\\" + dir, uniquefilenamecover + extension);

                using (var imageFile = new FileStream(filePath, FileMode.Create))
                {
                    imageFile.Write(bytes, 0, bytes.Length);
                    imageFile.Flush();
                }

                return (uniquefilenamecover + extension);

            }
            catch (Exception ex)
            {

                return null;
            }


        }

        public async Task<bool> DeleteFile(string dir, string fileName)
        {
            try
            {
                string filePath = Path.Combine(_hostingEnvironment.ContentRootPath + "\\wwwroot\\" + dir, fileName);
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public async Task<string> DownloadRemoteImageFile(string directoryPath, Uri uri)
        {

            var uniquefilenamecover = Guid.NewGuid().ToString() + ".jpg";
            try
            {
                using var httpClient = new HttpClient();

                // Get the file extension
                var uriWithoutQuery = uri.GetLeftPart(UriPartial.Path);
                var fileExtension = Path.GetExtension(uriWithoutQuery);
                var pathOfSystem = _hostingEnvironment.ContentRootPath + "\\wwwroot\\" + directoryPath;
                // Create file path and ensure directory exists
                var path = Path.Combine(pathOfSystem, $"{uniquefilenamecover}{fileExtension}");
                Directory.CreateDirectory(pathOfSystem);

                // Download the image and write to the file
                var imageBytes = await httpClient.GetByteArrayAsync(uri);
                await File.WriteAllBytesAsync(path, imageBytes);
                return uniquefilenamecover;
            }
            catch (Exception ex)
            {

                throw;
            }

        }

        public async Task<string> GetThumbnail(string video, string thumbnail)
        {
            string videoPath = Path.Combine(_hostingEnvironment.ContentRootPath + "\\wwwroot\\", video);
            string thumbnailPath = Path.Combine(_hostingEnvironment.ContentRootPath + "\\wwwroot\\", thumbnail);
            string output = Path.Combine(_hostingEnvironment.ContentRootPath +
                "\\wwwroot\\", "Videos\\Guidances\\GuidanceCreated.mp4");

            Process ffmpeg = new Process();

            ffmpeg.StartInfo.UseShellExecute = false;
            ffmpeg.StartInfo.RedirectStandardOutput = true;

            ffmpeg.StartInfo.FileName = Path.Combine(_hostingEnvironment.ContentRootPath + "\\wwwroot\\", "Video-Clips\\ffmpeg.exe");
            ffmpeg.StartInfo.Arguments = String.Format(@"ffmpeg -i ""concat: ""{0}"" | ""{1}"""" -c copy ""{2}""",
                thumbnailPath, videoPath, output);

            //ffmpeg.StartInfo.Arguments = String.Format(@"ffmpeg -i ""{0}"" -i IMAGE -map 0 -map 1 -c copy -c:v:1 png -disposition:v:1 ""{1}"" ""{2}""",
            //    videoPath, thumbnailPath, videoPath);

            ffmpeg.Start();

            ffmpeg.WaitForExit();

            return videoPath;
        }
        public async Task<string> UploadFiles(HttpRequest Request, string pathImage,string id)
        {
           
            //init
            long uploaded_size = 0;
            string path = _hostingEnvironment.WebRootPath + pathImage;
            //get form files
            var uploadedFiles = Request.Form.Files;
            int iCounter = 0;
            string sFiles_Uploaded = "";
            foreach (var item in uploadedFiles)
            {
                iCounter++;
                uploaded_size += item.Length;
                sFiles_Uploaded += "\n" + item.FileName;
                //FileName
                string uploadeFileName = item.FileName;
                var fileType = item.Name.Split('.');
                string newFileNameOnServer =  path + "\\" + id+"."+ fileType[1];
                //copy File To Target
                using (FileStream stream = new FileStream(newFileNameOnServer, FileMode.Create))
                {
                    await item.CopyToAsync(stream);
                };
            }
            string message = "upload Success \n file uploaded : " + iCounter + "\n Size : " + uploaded_size + "\n" + sFiles_Uploaded;

            return message;
        }

    }
}
