'use client'
import { useEffect, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";

export default function Particle() {

  const [init, setInit] = useState(false);

  useEffect(() => {

    console.log("init");

    initParticlesEngine(async (engine) => {

      await loadFull(engine);

    }).then(() => {

      setInit(true);

    });

  }, []);



  const particlesLoaded = (container) => {

  };



  return (

    <>

      {init && (

        <Particles

          id="tsparticles"

          particlesLoaded={particlesLoaded}

          style={{

            zIndex: 1,

          }}

          options={{
            "autoPlay": true,
            "background": {
              "color": {
                "value": "#000000"
              },
              "image": "",
              "position": "",
              "repeat": "",
              "size": "",
              "opacity": 1
            },
            "backgroundMask": {
              "composite": "destination-out",
              "cover": {
                "color": {
                  "value": "#fff"
                },
                "opacity": 1
              },
              "enable": false
            },
            "clear": true,
            "defaultThemes": {},
            "delay": 0,
            "fullScreen": {
              "enable": true,
              "zIndex": -1
            },
            "detectRetina": true,
            "duration": 0,
            "fpsLimit": 120,
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": false,
                  "mode": []
                },
                "onDiv": {
                  "selectors": [],
                  "enable": false,
                  "mode": [],
                  "type": "circle"
                },
                "onHover": {
                  "enable": false,
                  "mode": [],
                  "parallax": {
                    "enable": false,
                    "force": 2,
                    "smooth": 10
                  }
                },
                "resize": {
                  "delay": 0.5,
                  "enable": true
                }
              },
              "modes": {
                "trail": {
                  "delay": 1,
                  "pauseOnStop": false,
                  "quantity": 1
                },
                "attract": {
                  "distance": 200,
                  "duration": 0.4,
                  "easing": "ease-out-quad",
                  "factor": 1,
                  "maxSpeed": 50,
                  "speed": 1
                },
                "bounce": {
                  "distance": 200
                },
                "bubble": {
                  "distance": 200,
                  "duration": 0.4,
                  "mix": false,
                  "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "selectors": []
                  }
                },
                "connect": {
                  "distance": 80,
                  "links": {
                    "opacity": 0.5
                  },
                  "radius": 60
                },
                "grab": {
                  "distance": 100,
                  "links": {
                    "blink": false,
                    "consent": false,
                    "opacity": 1
                  }
                },
                "push": {
                  "default": true,
                  "groups": [],
                  "quantity": 4
                },
                "remove": {
                  "quantity": 2
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4,
                  "factor": 100,
                  "speed": 1,
                  "maxSpeed": 50,
                  "easing": "ease-out-quad",
                  "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "selectors": []
                  }
                },
                "slow": {
                  "factor": 3,
                  "radius": 200
                },
                "light": {
                  "area": {
                    "gradient": {
                      "start": {
                        "value": "#ffffff"
                      },
                      "stop": {
                        "value": "#000000"
                      }
                    },
                    "radius": 1000
                  },
                  "shadow": {
                    "color": {
                      "value": "#000000"
                    },
                    "length": 2000
                  }
                }
              }
            },
            "manualParticles": [],
            "particles": {
              "bounce": {
                "horizontal": {
                  "value": 1
                },
                "vertical": {
                  "value": 1
                }
              },
              "collisions": {
                "absorb": {
                  "speed": 2
                },
                "bounce": {
                  "horizontal": {
                    "value": 1
                  },
                  "vertical": {
                    "value": 1
                  }
                },
                "enable": false,
                "maxSpeed": 50,
                "mode": "bounce",
                "overlap": {
                  "enable": true,
                  "retries": 0
                }
              },
              "color": {
                "value": "#33f73d",
                "animation": {
                  "h": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": true,
                    "offset": 0
                  },
                  "s": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": true,
                    "offset": 0
                  },
                  "l": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": true,
                    "offset": 0
                  }
                }
              },
              "effect": {
                "close": true,
                "fill": true,
                "options": {},
                "type": []
              },
              "groups": {
                "z5000": {
                  "number": {
                    "value": 70
                  },
                  "zIndex": {
                    "value": 50
                  }
                },
                "z7500": {
                  "number": {
                    "value": 30
                  },
                  "zIndex": {
                    "value": 75
                  }
                },
                "z2500": {
                  "number": {
                    "value": 50
                  },
                  "zIndex": {
                    "value": 25
                  }
                },
                "z1000": {
                  "number": {
                    "value": 40
                  },
                  "zIndex": {
                    "value": 10
                  }
                }
              },
              "move": {
                "angle": {
                  "offset": 0,
                  "value": 10
                },
                "attract": {
                  "distance": 200,
                  "enable": false,
                  "rotate": {
                    "x": 3000,
                    "y": 3000
                  }
                },
                "center": {
                  "x": 50,
                  "y": 50,
                  "mode": "percent",
                  "radius": 0
                },
                "decay": 0,
                "distance": {},
                "direction": "right",
                "drift": 0,
                "enable": true,
                "gravity": {
                  "acceleration": 9.81,
                  "enable": false,
                  "inverse": false,
                  "maxSpeed": 50
                },
                "path": {
                  "clamp": true,
                  "delay": {
                    "value": 0
                  },
                  "enable": false,
                  "options": {}
                },
                "outModes": {
                  "default": "out",
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                },
                "random": false,
                "size": false,
                "speed": 5,
                "spin": {
                  "acceleration": 0,
                  "enable": false
                },
                "straight": false,
                "trail": {
                  "enable": false,
                  "length": 10,
                  "fill": {}
                },
                "vibrate": false,
                "warp": false
              },
              "number": {
                "density": {
                  "enable": false,
                  "width": 1920,
                  "height": 1080
                },
                "limit": {
                  "mode": "delete",
                  "value": 0
                },
                "value": 200
              },
              "opacity": {
                "value": 1,
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 2,
                  "decay": 0,
                  "delay": 0,
                  "sync": false,
                  "mode": "auto",
                  "startValue": "random",
                  "destroy": "none"
                }
              },
              "reduceDuplicates": false,
              "shadow": {
                "blur": 0,
                "color": {
                  "value": "#000"
                },
                "enable": false,
                "offset": {
                  "x": 0,
                  "y": 0
                }
              },
              "shape": {
                "close": true,
                "fill": true,
                "options": {},
                "type": "circle"
              },
              "size": {
                "value": 3,
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 5,
                  "decay": 0,
                  "delay": 0,
                  "sync": false,
                  "mode": "auto",
                  "startValue": "random",
                  "destroy": "none"
                }
              },
              "stroke": {
                "width": 0
              },
              "zIndex": {
                "value": 5,
                "opacityRate": 0.5,
                "sizeRate": 1,
                "velocityRate": 1
              },
              "destroy": {
                "bounds": {},
                "mode": "none",
                "split": {
                  "count": 1,
                  "factor": {
                    "value": 3
                  },
                  "rate": {
                    "value": {
                      "min": 4,
                      "max": 9
                    }
                  },
                  "sizeOffset": true,
                  "particles": {}
                }
              },
              "roll": {
                "darken": {
                  "enable": false,
                  "value": 0
                },
                "enable": false,
                "enlighten": {
                  "enable": false,
                  "value": 0
                },
                "mode": "vertical",
                "speed": 25
              },
              "tilt": {
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "decay": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "enable": false
              },
              "twinkle": {
                "lines": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                },
                "particles": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                }
              },
              "wobble": {
                "distance": 5,
                "enable": false,
                "speed": {
                  "angle": 50,
                  "move": 10
                }
              },
              "life": {
                "count": 0,
                "delay": {
                  "value": 0,
                  "sync": false
                },
                "duration": {
                  "value": 0,
                  "sync": false
                }
              },
              "rotate": {
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "decay": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "path": false
              },
              "orbit": {
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                  "value": 45
                },
                "width": 1
              },
              "links": {
                "blink": false,
                "color": {
                  "value": "#fff"
                },
                "consent": false,
                "distance": 100,
                "enable": false,
                "frequency": 1,
                "opacity": 1,
                "shadow": {
                  "blur": 5,
                  "color": {
                    "value": "#000"
                  },
                  "enable": false
                },
                "triangles": {
                  "enable": false,
                  "frequency": 1
                },
                "width": 1,
                "warp": false
              },
              "repulse": {
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
              }
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "responsive": [],
            "smooth": false,
            "style": {},
            "themes": [],
            "zLayers": 100,
            "emitters": {
              "autoPlay": true,
              "fill": true,
              "life": {
                "wait": false
              },
              "rate": {
                "quantity": 1,
                "delay": 7
              },
              "shape": {
                "options": {},
                "replace": {
                  "color": false,
                  "opacity": false
                },
                "type": "square"
              },
              "startCount": 0,
              "size": {
                "mode": "percent",
                "height": 0,
                "width": 0
              },
              "particles": {
                "shape": {
                  "type": "images",
                  "options": {
                    "images": {
                      "src": "data:image/jpeg;base64,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",
                      "width": 500,
                      "height": 634
                    }
                  }
                },
                "size": {
                  "value": 40
                },
                "move": {
                  "speed": 10,
                  "outModes": {
                    "default": "none",
                    "right": "destroy"
                  },
                  "straight": true
                },
                "zIndex": {
                  "value": 0
                },
                "rotate": {
                  "value": {
                    "min": 0,
                    "max": 360
                  },
                  "animation": {
                    "enable": true,
                    "speed": 10,
                    "sync": true
                  }
                }
              },
              "position": {
                "x": -5,
                "y": 55
              }
            },
            "motion": {
              "disable": false,
              "reduce": {
                "factor": 4,
                "value": true
              }
            }
          }}

        />

      )}

    </>

  );

}