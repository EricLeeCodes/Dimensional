import { useRef, useEffect, useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../src/context/shop-context.tsx";
import {
  ViewerApp,
  addBasePlugins,
  AssetManagerPlugin,
  ScrollableCameraViewPlugin,
} from "webgi";

import processor from "./images/processor.png";
import battery from "./images/xm3battery.jpg";
import multiDev from "./images/xm3multidevice.jpg";
import Ldac from "./images/LDAC.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import "./headphonespage.css";

function HeadphonesPage() {
  const canvasRef = useRef(null);
  const objectRef = useRef(null);

  const addSuccess = () =>
    toast.success("Successfully added to cart!", {
      position: "top-right",
      theme: "dark",
    });

  //GSAP Animation transitions
  useGSAP(() => {
    const tl = gsap.timeline();

    //second section
    tl.fromTo(
      ".section-two-right",
      {
        xPercent: "100",
        opacity: 0,
      },
      {
        xPercent: "10",
        opacity: 1,
        scrollTrigger: {
          trigger: ".second",
          start: "top center",
          end: "bottom 100%",
          scrub: true,
          snap: 1,
        },
      }
    )
      .fromTo(
        ".section-two-right",
        {
          xPercent: "10",
          opacity: 1,
        },
        {
          xPercent: "10",
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".second",
            start: "center center",
            end: "bottom center",
            scrub: true,
          },
        }
      )
      .fromTo(
        ".section-two-left",
        {
          xPercent: "-100",
          opacity: 0,
        },
        {
          xPercent: "-280",
          opacity: 1,
          scrollTrigger: {
            trigger: ".second",
            start: "top center",
            end: "bottom 100%",
            scrub: true,
            snap: 1,
          },
        }
      )
      .fromTo(
        ".section-two-left",
        {
          xPercent: "-280",
          opacity: 1,
        },
        {
          xPercent: "-280",
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".second",
            start: "center center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

    //section-two LEFT

    // third section
    tl.fromTo(
      ".section-three-top",
      {
        xPercent: "0",
        opacity: 0,
      },
      {
        yPercent: "-150",
        xPercent: "-200",
        opacity: 1,
        scrollTrigger: {
          trigger: ".third",
          start: "top center",
          end: "bottom 100%",
          scrub: true,
          snap: 1,
        },
      }
    );
    tl.fromTo(
      ".section-three-top",
      {
        yPercent: "-150",
        xPercent: "-200",
        opacity: 1,
      },
      {
        yPercent: "-150",
        xPercent: "-200",
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".third",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    tl.fromTo(
      ".section-three-bottom",
      {
        xPercent: "0",
        opacity: 0,
      },
      {
        xPercent: "-150",
        yPercent: "150",
        opacity: 1,
        scrollTrigger: {
          trigger: ".third",
          start: "top center",
          end: "bottom 100%",
          scrub: true,
          snap: 1,
        },
      }
    );
    tl.fromTo(
      ".section-three-bottom",
      {
        xPercent: "-150",
        yPercent: "150",
        opacity: 1,
      },
      {
        xPercent: "-150",
        yPercent: "150",
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".third",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    //fourth section
    tl.fromTo(
      ".section-four-right",
      {
        xPercent: "0",
        opacity: 0,
      },
      {
        xPercent: "-20",
        yPercent: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: ".fourth",
          start: "top center",
          end: "bottom 100%",
          scrub: true,
          snap: 1,
        },
      }
    );
    tl.fromTo(
      ".section-four-right",
      {
        xPercent: "-20",
        yPercent: "0",
        opacity: 1,
      },
      {
        xPercent: "-20",
        yPercent: "0",
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".fourth",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
    tl.fromTo(
      ".section-four-left",
      {
        xPercent: "0",
        opacity: 0,
      },
      {
        xPercent: "-440",
        yPercent: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: ".fourth",
          start: "top center",
          end: "bottom 100%",
          scrub: true,
          snap: 1,
        },
      }
    );
    tl.fromTo(
      ".section-four-left",
      {
        xPercent: "-440",
        yPercent: "0",
        opacity: 1,
      },
      {
        xPercent: "-440",
        yPercent: "0",
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".fourth",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    //Fifth Section
    tl.fromTo(
      ".section-five-left",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".fifth",
          start: "top center",
          end: "bottom 100%",
          scrub: true,
          snap: 1,
        },
      }
    );
    tl.fromTo(
      ".section-five-right",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".fifth",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      }
    )
      .fromTo(
        ".section-five-right",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".fifth",
            start: "top center",
            end: "bottom 100%",
            scrub: true,
            snap: 1,
          },
        }
      )
      .fromTo(
        ".section-five-right",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".fifth",
            start: "center center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

    tl.fromTo(
      ".section-six",
      {
        xPercent: "-100",
        opacity: 0,
      },
      {
        xPercent: "270",
        yPercent: "-15",
        opacity: 1,
        scrollTrigger: {
          trigger: ".sixth",
          start: "top center",
          end: "bottom 100%",
          scrub: true,
          snap: 1,
        },
      }
    );
    return () => {
      tl.revert();
    };
  });

  //Context
  const contextValue = useContext(ShopContext);

  useEffect(() => {
    let viewer;
    const setupViewer = async () => {
      viewer = new ViewerApp({
        canvas: canvasRef.current,
      });

      gsap.registerPlugin(ScrollTrigger);

      try {
        // Add plugins
        const manager = await viewer.addPlugin(AssetManagerPlugin);
        await viewer.addPlugin(ScrollableCameraViewPlugin);

        // Add all the plugins at once
        await addBasePlugins(viewer, { interactionPrompt: false });

        // This must be called after adding any plugin that changes the render pipeline.
        viewer.renderer.refreshPipeline();

        // Load a 3D model
        const object = await manager.addFromPath("/headphones.glb");

        // Set the reference to the 3D object
        objectRef.current = object;

        // Start animations
      } catch (error) {
        console.error("Error setting up viewer:", error);
        // Handle error (e.g., show error message to user)
      }
    };

    setupViewer();
    return () => {
      // Dispose of the viewer
      if (viewer) {
        viewer.dispose();
      }
    };
  }, []);

  return (
    <>
      <div id="content">
        <section className="section grey">
          <div className="section-one">
            <h1 className="text-border">Sony WH-1000XM3</h1>
          </div>
        </section>

        <section className="section second">
          <div className="section-two-left">
            <img src={processor} alt="processor" />
            <h4>Noise Cancelling Processor</h4>
            <div>
              Captures ambient noise and passes the data to the HD Noise
              Cancelling Processor QN1
            </div>
          </div>
          <div className="section-two-right">
            <h2>Active Noise Cancelling</h2>
            <p>
              Boast powerful active noise cancellation technology, effectively
              blocking out unwanted background noise for an immersive listening
              experience.
            </p>
          </div>

          <div></div>
        </section>

        <section className="section third grey">
          <div className="section-three-top">
            <h2 className="text-border">Luxuriously Soft Padding</h2>
          </div>
          <div className="section-three-bottom">
            <h2 className="text-border">Comfort From Heaven</h2>
          </div>
          <div></div>
        </section>

        <section className="section fourth">
          <div className="section-four-right">
            <h2>Lasting Battery</h2>
            <p>
              Versatile, lightning-fast, universally compatible, revolutionizing
              connectivity across devices, embracing the future of technology.
            </p>
            <img
              src={battery}
              alt="Long lasting battery explanation"
              className="battery-img"
            />
          </div>
          <div className="section-four-left">
            <img src={Ldac} alt="LDAC and Hi-Res audio" className="ldac-img" />
            <h2>Hi-Fi LDAC Codec</h2>
            <p>
              LDAC delivers high-res audio wirelessly with unparalleled fidelity
              and clarity.
            </p>
          </div>
          <div></div>
        </section>

        <section className="section fifth grey">
          <div className="section-five-left">
            <h2 className="title-color-black">Multi-device Pairing</h2>
            <p className="black-text">
              ony's WH-1000XM3 headphones provide convenient multi-device
              pairing, enabling seamless switching between devices for
              uninterrupted listening. With advanced Bluetooth technology, users
              can enjoy hassle-free audio streaming across various devices.
            </p>
            <img
              src={multiDev}
              alt="Compatibility with multiple devices"
              className="multi-dev-img"
            />
          </div>
          <div className="section-five-right">
            <h2 className="title-color-black">Versatile Touch Features</h2>
            <p className="black-text">
              The touch feature on the Sony WH-1000XM3 headphones offers
              intuitive control at your fingertips, allowing you to effortlessly
              manage your music playback, adjust volume, answer calls, and
              activate your voice assistant—all with simple touch gestures.
              Whether you're pausing your playlist with a tap, skipping tracks
              with a swipe, or adjusting the volume with a slide, the
              touch-sensitive controls provide a seamless and responsive
              experience, putting you in complete command of your audio
              environment without having to reach for your device.
            </p>
          </div>
          <div></div>
        </section>

        <section className="section sixth">
          <div className="section-six">
            <h1>Come Join Us</h1>
            <h2>Close The World Around You</h2>

            <div className="buttons">
              <button
                onClick={() => {
                  if (contextValue) {
                    contextValue.addToCart(1); // Add to cart
                    addSuccess();
                  }
                }}
              >
                Add To Cart
              </button>

              <Link to="/">
                <button>Back to Home</button>
              </Link>
            </div>
          </div>
          <div></div>
        </section>
      </div>
      <ToastContainer />
      <div id="webgi-canvas-container">
        <canvas id="webgi-canvas" ref={canvasRef}></canvas>
      </div>
    </>
  );
}

export default HeadphonesPage;
