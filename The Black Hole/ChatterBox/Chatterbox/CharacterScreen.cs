using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatterBox
{
    public class CharacterScreen : Controller
    {
        // GET: CharacterScreen
        public ActionResult Index()
        {
            return View();
        }

        // GET: CharacterScreen/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: CharacterScreen/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: CharacterScreen/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: CharacterScreen/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: CharacterScreen/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: CharacterScreen/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: CharacterScreen/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
