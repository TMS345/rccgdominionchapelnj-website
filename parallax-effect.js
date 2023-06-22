document.addEventListener('DOMContentLoaded', function() {
    var parallaxContainer = document.querySelector('.parallax-container');

    function parallaxScroll(event) {
      var scrollPosition = parallaxContainer.scrollTop;
      var parallaxSections = document.querySelectorAll('.parallax-section');

      for (var i = 0; i < parallaxSections.length; i++) {
        var speed = parallaxSections[i].getAttribute('data-speed');
        parallaxSections[i].style.transform = 'translateY(' + scrollPosition * speed + 'px)';
      }
    }

    parallaxContainer.addEventListener('scroll', parallaxScroll);
});