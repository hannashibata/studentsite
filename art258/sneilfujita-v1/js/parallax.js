// PARALLAX JS from David Efhan
function parallax({ el, ease = "linear" }) {
  
  let scrolling = false;

  function runParallax() {
    const pageTop = window.pageYOffset;
    const pageMid = pageTop + window.innerHeight / 2;
    const topSection = el.offsetTop;
    const midSection = topSection + el.offsetHeight / 2;
    const viewDistanceLeft = pageMid - midSection;
    const parallaxSpeed = parseFloat(el.getAttribute("data-parallax-speed"));

    // Set the parallax movement
    el.style.transform = `translate3d(0, ${ (viewDistanceLeft * parallaxSpeed) / 3 }px, 0)`;
    el.style.transition = `transform ${ease}`;
  }

  window.addEventListener("scroll", () => {
    if (!scrolling) {
      window.requestAnimationFrame(() => {
        runParallax();
        scrolling = false;
      });
    }
    scrolling = true;
  });
  
  runParallax();
  
}

// Parallax
const parallaxElements = document.querySelectorAll(".parallax-onscroll");
parallaxElements.forEach((el) => parallax({ el }));

