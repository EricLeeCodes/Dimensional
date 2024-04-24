import { useRef, useEffect, useContext } from "react";
import {
  ViewerApp,
  addBasePlugins,
  AssetManagerPlugin,
  ScrollableCameraViewPlugin,
} from "webgi";

import cameleon from "./images/cameleon.jpg";
import battery from "./images/charge.png";
import graphiccard from "./images/graphiccard.png";
import landscape from "./images/landscape.png";
import selfie from "./images/selfie.jpeg";
import iphone from "./images/iphone.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import { ShopContext } from "../../src/context/shop-context.tsx";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import "./phonepage.css";

gsap.registerPlugin(ScrollTrigger);

function Phonepage() {
  const canvasRef = useRef(null);
  const objectRef = useRef(null);

  const addSuccess = () =>
    toast.success("Successfully added to cart!", {
      position: "top-right",
      theme: "dark",
    });

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".section-two-container", {
      opacity: 0,
      xPercent: "-30"
    }, {
      opacity:1,
      xPercent: "0",
      scrollTrigger: {
        trigger: ".second-phone",
        start: "50% bottom",
        end: "80% bottom",
        snap: 1,
        scrub: 1
      }
    } );

    tl.fromTo(".elevate-photography", 
    {
      xPercent: "30",
      opacity: 0,
    }
    , {
      opacity: 1,
      xPercent: "0",
      scrollTrigger: {
        trigger: ".third-phone",
        start: "top center",
        end: "bottom 99%",
        snap: 1,
        scrub: true,
      },
    });

    tl.fromTo(".craftsmanship-section", 
    { xPercent: "30",
    opacity: 0,
    }, {
      opacity: 1,
      xPercent: "0",
      scrollTrigger: {
        trigger: ".fourth-phone",
        start: "top center",
        end: "bottom 99%",
        snap: 1,
        scrub: true,
      },
    });

    tl.fromTo(".selfie-section", {
      xPercent: "-10",
      opacity: 0}, {
        opacity: 1,
        xPercent: "0",
      scrollTrigger: {
        trigger: ".fifth-phone",
        start: "top center",
        end: "bottom 99%",
        snap: 1,
        scrub: true,
      },
    });

    tl.fromTo(".Brilliance", 
    { xPercent: "30",
    opacity: 0,
    }, {
      opacity: 1,
      xPercent: "0",
      scrollTrigger: {
        trigger: ".sixth-phone",
        start: "top center",
        end: "bottom 99%",
        snap: 1,
        scrub: true,
      },
    });

    tl.fromTo(".phone-buttons", {
      opacity: 0,
    },{
      opacity:1,
      scrollTrigger: {
        trigger: ".sixth-phone",
        start: "40% center",
        end: "bottom 99%",
        scrub: 1,
        // markers: true
      }
    })
  });
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
        const object = await manager.addFromPath("/phone.glb");

        // Set the reference to the 3D object
        objectRef.current = object;

        // Start animations
        //  viewer.dispose()
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
        <div>
      <section className="section-phone">
        <h1 className="h1-phone" id="iphone-heading">iPhone 15 Pro Max</h1>
      </section>

      <section className="section-phone second-phone">
        <div className="section-two-container">
          <h2 >Power Up Faster Than Ever</h2>
          <p >
            Experience lightning-fast charging with the iPhone 15 Pro Max. With
            its advanced technology, enjoy up to 50% charge in just 30 minutes,
            ensuring you stay powered up for whatever your day brings.
          </p>
          <img
              src={battery}
              alt="fast charging description"
              className="battery-img"
            />
        </div>
      </section>

      <section className="section-phone third-phone">
        <div className="elevate-photography">
          <h2 >Elevate Your Photography</h2>
          <p >
            Capture life's moments in stunning detail with the iPhone 15 Pro Max
            camera. From breathtaking landscapes to close-up portraits, its
            advanced triple-camera system delivers professional-quality photos
            and videos, even in low light. With features like ProRAW and
            Cinematic Mode, unleash your creativity like never before.
          </p>
          <img
              src={cameleon}
              alt="Lovely cameleon picture"
              className="cameleon-img"
            />
              <img
              src={landscape}
              alt="amazing landscape"
              className="landscape-img"
            />
        </div>
      </section>

      <section className="section-phone fourth-phone">
        <div className="craftsmanship-section">
          <h2 >Exquisite Craftsmanship</h2>
          <p >
            Crafted with aerospace-grade titanium and precision-milled matte
            glass, the iPhone 15 Pro Max boasts durability and elegance.
            Featuring a Ceramic Shield front cover for enhanced protection, it's
            a masterpiece of premium materials and craftsmanship.
          </p>
        </div>
          <img
              src={iphone}
              alt="side view of iphone 15 pro max"
              className="iphone-img"
            />
      </section>

      <section className="section-phone fifth-phone">
        <div className="selfie-section">
          <h2 >Selfie Perfection</h2>
          <p >
            Unlock the potential of your selfies with the iPhone 15 Pro Max
            front camera. Featuring TrueDepth technology, it captures stunning
            portraits with remarkable detail and depth. With Night mode and
            Smart HDR 4, every selfie shines, day or night, ensuring you always
            look your best
          </p>
          <img
              src={selfie}
              alt="Gorgeous group of people"
              className="selfie-img"
            />
        </div>
      </section>

      <section className="section-phone sixth-phone">
        <div className="Brilliance">
          <h2 >Brilliance in Every Pixel</h2>
          <p >
            Experience brilliance with the iPhone 15 Pro Max display. Its Super
            Retina XDR OLED screen offers vivid colors and deep blacks, while
            ProMotion technology ensures smooth, responsive interactions at up
            to 120Hz.
          </p>
          <img
              src={graphiccard}
              alt="iphone processing chip"
              className="graphiccard-img"
            />
        </div>
      
  <div className="additional-title">
    <h2>iPhone 15 Pro Max</h2>
    <p>Where Brilliance Meets Boundlessness!</p>
  </div>

        </section>
<div className="phone-buttons">
              <button
                onClick={() => {
                  if (contextValue) {
                    contextValue.addToCart(2); // Add to cart
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
      <ToastContainer />
      <div id="webgi-canvas-container">
        <canvas id="webgi-canvas" ref={canvasRef}></canvas>
      </div>

      </>
  );
}
export default Phonepage;
