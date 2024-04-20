import { useRef, useEffect } from "react";
import { ShopContext } from "../../src/context/shop-context.tsx";
import {
  ViewerApp,
  addBasePlugins,
  AssetManagerPlugin,
  ScrollableCameraViewPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useContext } from "react";
import "./potatepage.css";



gsap.registerPlugin(ScrollTrigger)



function PotatePage() {
  const canvasRef = useRef(null);
  const objectRef = useRef(null);
const contextValue = useContext(ShopContext);
  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to(".section-two-container", {xPercent: '10', opacity: 1,
      scrollTrigger: {
        trigger: ".second",
        start: "top center",
        end: "bottom 99%",
        
        scrub: true,
      }})
     // second section
      tl.to(".section-three-container", {xPercent: '-110', opacity: 1,
      scrollTrigger: {
        trigger: ".third",
        start: "top center",
        end: "bottom 99%",
       
        scrub: true,
      }})
      //third section 
      tl.to(".section-four-container", {xPercent: '-10', opacity: 1,
      scrollTrigger: {
        trigger: ".fourth",
        start: "top center",
        end: "bottom 99%",
       
        scrub: true,
      }})
  })
 
  
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
        const object = await manager.addFromPath("/potato.glb");

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
      <section className="section">
    <div className="section-one-container">
      <h1>The Epicurean's Choice</h1>

    </div>
  </section>

  <section className="section second">
    <div className="section-two-container">
      <h2 className="title">The Epicurean's Choice</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."</p>
    </div>
  </section>

  <section className="section third">
    <div className="section-three-container">
      <h2 className="title">The Epicurean's Choice</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."</p>
    </div>
  </section>

  <section className="section fourth">
    <div className="section-four-container">
      <h2>The Epicurean's Choice</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."</p>
        </div>
        <button className="addToCartButton" onClick={() => contextValue && contextValue!.addToCart(3)}>
        Add To Cart
        </button>
  </section>
  <button className="back">Back to top</button>
  <div id="webgi-canvas-container">
    <canvas id="webgi-canvas" ref={canvasRef}></canvas>
  </div>
  {/* <script src="/home/labber/lighthouse/Dimensional/frontend/pages/PotatePage/potate.ts" type="module"></script> */}
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </div></>
  );
}

export default PotatePage;
