particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": ["#38bdf8", "#818cf8", "#a78bfa", "#7dd3fc"]
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.8,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 130,
      "color": "#38bdf8",
      "opacity": 0.25,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.8
        }
      },
      "push": {
        "particles_nb": 3
      }
    }
  },
  "retina_detect": true
});
