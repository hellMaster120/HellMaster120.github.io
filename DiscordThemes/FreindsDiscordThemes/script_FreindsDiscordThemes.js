// ParticlesJS Config.
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 700 } },


    "color": {
      "value": "#003cff" },

    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#ff0022" },

      "polygon": {
        "nb_sides": 100 } },


    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 5,
        "opacity_min": 0.1,
        "sync": false } },


    "size": {
      "value": 7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 90,
        "size_min": 0.1,
        "sync": false } },


    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#085e61",
      "opacity": 0.4,
      "width": 2 },

    "move": {
      "enable": true,
      "speed": 40,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 100,
        "rotateY": 10 } } },



  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" },

      "onclick": {
        "enable": true,
        "mode": "push" },

      "resize": true },

    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1 } },


      "bubble": {
        "distance": 400,
        "size": 100,
        "duration": 2,
        "opacity": 8,
        "speed": 3 },

      "repulse": {
        "distance": 200,
        "duration": 0.4 },

      "push": {
        "particles_nb": 4 },

      "remove": {
        "particles_nb": 2 } } },



  "retina_detect": true });