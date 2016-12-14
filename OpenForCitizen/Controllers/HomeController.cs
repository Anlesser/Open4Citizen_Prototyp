using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using System.Xml;
using System.Diagnostics;
using System.Net;

namespace OpenForCitizen.Controllers
{
    public class HomeController : Controller
    {
       public string illness_search;
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Menu(string language)
        {
            Debug.Write("\n\n Language: " + language);
            ViewBag.Message = "Menu";
            return View();
        }
        public ActionResult Sick()
        {
            ViewBag.Message = "Where does it hurt?";
            return View();
        }
        public ActionResult LevelOfPain()
        {
            ViewBag.Message = "How painfull is it ?";
            return View();
        }
        public ActionResult Questions()
        {
            ViewBag.Message = "Questions ?";
            return View();
        }
     

        public ActionResult InformationOmVarden()
        {
            return View();
        }

        public ActionResult illnessInfo(string illness)
        {
           // illness_search = illness;
            Session["illness"] = illness;
            Debug.Write("\n\n Illness: " + illness);
            return View();
        }
        [HttpPost]
        public string searchIllness(string illness)
        {
            
            // Create a request for the URL. 
            WebRequest request = WebRequest.Create("http://www.1177.se/api/v2/artiklar/?antal=4&key=cc7f8361f7eb4e51b46c95d376c7010a");
            // If required by the server, set the credentials.
            request.Credentials = CredentialCache.DefaultCredentials;
            // Get the response.
            WebResponse response = request.GetResponse();
            // Get the stream containing content returned by the server.
            Stream dataStream = response.GetResponseStream();
            // Open the stream using a StreamReader for easy access.
            StreamReader reader = new StreamReader(dataStream);
            // Read the content.
            string responseFromServer = reader.ReadToEnd();
            // Clean up the streams and the response.
            reader.Close();
            response.Close();
            return responseFromServer;
        }

    }
}