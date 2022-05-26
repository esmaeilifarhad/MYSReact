using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.IRepository.Images
{
    public interface IImageService
    {
        Task<string> SaveImage(string Dir, string Base64ImageString);
        Task<bool> DeleteFile(string dir, string fileName);
        Task<string> DownloadRemoteImageFile(string directoryPath, Uri uri);
        Task<string> GetThumbnail(string video, string thumbnail);
        Task<string> UploadFiles(HttpRequest request, string pathImage,string id);
    }
    public static class PathImage {
        public static string Bicycle{ get {
                return "\\Images\\Bicycle\\";
            } }
    } 
}
