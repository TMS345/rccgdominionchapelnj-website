    document.addEventListener('scroll', function() {
      var parallaxSections = document.querySelectorAll('.parallax-section');

      for (var i = 0; i < parallaxSections.length; i++) {
        var rect = parallaxSections[i].getBoundingClientRect();
        var translateY = Math.max(rect.top * -0.4, -100);
        parallaxSections[i].style.transform = 'translateY(' + translateY + 'px)';
      }
    });