using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvaDlsApp_Angular.Controllers
{
    public class SelectProductController : Controller
    {
        // GET: CommercialTab
        public ActionResult Index()
        {
            return View();
        }
        #region GetCountry
        public JsonResult GetCountry()                    //(GetCountry)      
        {
            List<string> countries = new List<string>();
            countries.Add("Select");
            countries.Add("India");
            countries.Add("Srilanka");
            countries.Add("China");
            countries.Add("Australia");
            countries.Add("USA");
            countries.Add("UK");
            return Json(countries, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region GetStates
        [HttpPost]
        public JsonResult GetStates(string selectedCountry)                  //GetStates
        {
            selectedCountry = "USA";
            List<string> states = new List<string>();
            switch (selectedCountry)
            {
                case "USA":
                    states.Add("Select");
                    states.Add("Alabama");
                    states.Add("Alaska");
                    states.Add("Arizona");
                    states.Add("Arkansas");
                    states.Add("California");
                    states.Add("Colorado");
                    states.Add("Connecticut");
                    states.Add("Delaware");
                    states.Add("Florida");
                    states.Add("Georgia");
                    states.Add("Hawaii");
                    states.Add("Idaho");
                    states.Add("Illinois");
                    states.Add("Indiana");
                    states.Add("Iowa");
                    states.Add("Kansas");
                    states.Add("Kentucky");
                    states.Add("Louisiana");
                    states.Add("Maine");
                    states.Add("Maryland");
                    states.Add("Massachusetts");
                    states.Add("Michigan");
                    states.Add("Minnesota");
                    states.Add("Mississippi");
                    states.Add("Missouri");
                    states.Add("Montana");
                    states.Add("Nebraska");
                    states.Add("Nevada");
                    states.Add("New Hampshire");
                    states.Add("New Jersey");
                    states.Add("New Mexico");
                    states.Add("New York");
                    states.Add("North Carolina");
                    states.Add("North Dakota");
                    states.Add("Ohio");
                    states.Add("Oklahoma");
                    states.Add("Oregon");
                    states.Add("Pennsylvania");
                    states.Add("Rhode Island");
                    states.Add("South Carolina");
                    states.Add("South Dakota");
                    states.Add("Tennessee");
                    states.Add("Texas");
                    states.Add("Utah");
                    states.Add("Vermont");
                    states.Add("Virginia");
                    states.Add("Washington");
                    states.Add("West Virginia");
                    states.Add("Wisconsin");
                    states.Add("Wyoming");
                    break;
                case "UK":
                    break;
                case "India":
                    break;

            }

            return Json(states, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region GetCity
        [HttpPost]
        public JsonResult GetCity(string selectedState)       //GetCity
        {
            List<string> Citys = new List<string>();
            switch (selectedState)
            {
                case "Maryland":
                    Citys.Add("Select");
                    Citys.Add("Annapolis");
                    Citys.Add("Baltimore");
                    Citys.Add("Glen burnie");
                    Citys.Add("Linthicum");
                    Citys.Add("Rockville");
                    Citys.Add("Silver spring");
                    break;
            }
            return Json(Citys, JsonRequestBehavior.AllowGet);
        }
        #endregion
    }
}