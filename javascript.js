document.addEventListener("DOMContentLoaded", function() {
  const bioSection = document.querySelector(".bio");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.bio-pic').classList.add('animate');
        entry.target.querySelector('.bio-text').classList.add('animate');
        observer.unobserve(entry.target); // Stop observing after animation is triggered
      }
    });
  });

  observer.observe(bioSection); // Start observing the bio section
});
document.addEventListener("DOMContentLoaded", function() {
  const bioSection = document.querySelector(".lessons");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.lessons-text').classList.add('animate');
        entry.target.querySelector('.lessons-pic').classList.add('animate');
        observer.unobserve(entry.target); // Stop observing after animation is triggered
      }
    });
  });

  observer.observe(bioSection); // Start observing the bio section
});
