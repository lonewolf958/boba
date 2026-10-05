/* ==========================================================================
   BOBA BAY — SCRIPT

   Handles:
   - Copyright year
   - Gentle scroll-reveal animation
   - Image fallback handling
   - Reduced-motion accessibility

   No frameworks.
   No server code.
   Safe for static hosting such as GitHub Pages or Netlify.
   ========================================================================== */


document.addEventListener("DOMContentLoaded", function () {


  /* =========================================================================
     1. CURRENT COPYRIGHT YEAR
     ========================================================================= */

  var yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  /* =========================================================================
     2. SCROLL-REVEAL ANIMATION
     ========================================================================= */

  var revealTargets = document.querySelectorAll(
    ".choose, .featured, .about, .site-footer"
  );

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /*
   * Add the initial reveal class.
   * The CSS controls the actual animation.
   */

  revealTargets.forEach(function (element) {
    element.classList.add("reveal");
  });


  /*
   * If the user prefers reduced motion,
   * show everything immediately.
   */

  if (prefersReducedMotion) {

    revealTargets.forEach(function (element) {
      element.classList.add("is-visible");
    });

  }


  /*
   * Use IntersectionObserver when available.
   */

  else if ("IntersectionObserver" in window) {

    var observer = new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );


    revealTargets.forEach(function (element) {
      observer.observe(element);
    });

  }


  /*
   * Fallback for older browsers.
   */

  else {

    revealTargets.forEach(function (element) {
      element.classList.add("is-visible");
    });

  }


  /* =========================================================================
     3. IMAGE ERROR HANDLING
     ========================================================================= */

  var images = document.querySelectorAll("img");

  images.forEach(function (image) {

    image.addEventListener("error", function () {

      var frame = image.closest(
        ".hero-image-frame, .food-image-frame, .about-image-frame"
      );

      if (frame) {
        frame.classList.add("image-fallback");
      }

    });

  });


});
