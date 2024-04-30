document.addEventListener('DOMContentLoaded', function() {

  // SCROLL TRIGGER ANIMATION
  // CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
  const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("data-sectionstate", "active");
      } else {
        entry.target.setAttribute("data-sectionstate", "inactive");
      }
    });
  });
  
  
  document.querySelectorAll(".scroll-parent").forEach((el) => {
    myobserver.observe(el);
  });

});