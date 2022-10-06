import { ISourceOptions } from 'tsparticles-engine'

const particlesOptions: ISourceOptions = {
  fullScreen: {
    enable: true
  },
  fpsLimit: 40,
  particles: {
    groups: {
      z5000: {
        number: {
          value: 70
        },
        zIndex: {
          value: 50
        }
      },
      z7500: {
        number: {
          value: 30
        },
        zIndex: {
          value: 75
        }
      },
      z2500: {
        number: {
          value: 50
        },
        zIndex: {
          value: 25
        }
      },
      z1000: {
        number: {
          value: 40
        },
        zIndex: {
          value: 10
        }
      }
    },
    number: {
      value: 200,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: '#fff',
      animation: {
        enable: false,
        speed: 20,
        sync: true
      }
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: false,
        speed: 3,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 3
    },
    links: {
      enable: false,
      distance: 100,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      angle: {
        value: 10,
        offset: 0
      },
      enable: true,
      speed: 5,
      direction: 'right',
      random: false,
      straight: false,
      outModes: {
        default: 'out'
      },
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    },
    zIndex: {
      value: 5,
      opacityRate: 0.5
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: -1,
        duration: 2,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  background: {
    color: '#000000',
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover'
  }
}

export default particlesOptions
