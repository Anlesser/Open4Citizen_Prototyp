using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace OpenForCitizen.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Menu(string language)
        {
            System.Diagnostics.Debug.Write("\n\n Language: " + language);
            ViewBag.Message = "Menu";
            return View();
        }
        public ActionResult Sick()
        {
            ViewBag.Message = "Where does it hurt?";
            return View();
        }
        public ActionResult LevelOfPain() {
            ViewBag.Message = "How painfull is it ?";
            return View();
        }

        public ActionResult illnessInfo(string illness)
        {
            System.Diagnostics.Debug.Write("\n\n Illness: " + illness);
            return View();
        }
    }
}