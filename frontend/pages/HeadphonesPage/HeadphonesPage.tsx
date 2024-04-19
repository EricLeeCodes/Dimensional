import { useRef, useEffect, useContext } from "react";
import Navbar from "../../src/components/navbar";
import { ShopContext } from "../../src/context/shop-context.tsx";
import {
  ViewerApp,
  addBasePlugins,
  AssetManagerPlugin,
  ScrollableCameraViewPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import "./headphonespage.css";

function HeadphonesPage() {
  const canvasRef = useRef(null);
  const objectRef = useRef(null);

  //Context
  const contextValue = useContext(ShopContext);
  // const id = props.data;
  // const id = contextValue?.cartItems[0];

  // console.log(contextValue?.cartItems);
  console.log("CONTEXT VALUE!!!!!!", contextValue);

  useEffect(() => {
    const setupViewer = async () => {
      const viewer = new ViewerApp({
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
  }, []);

  return (
    <>
      <Navbar />
      <div id="content">
        <section className="section">
          <h1>Sony WH-1000XM3</h1>
        </section>
        <section className="section second">
          <div className="section-two">
            <h2>Noise Cancelling</h2>
            <p>LALALALALALALAL</p>
          </div>
          <div></div>
        </section>

        <section className="section third">
          <div className="section-two">
            <h2>Soft Padding</h2>
            <p>LALALALALALALAL</p>
          </div>
          <div></div>
        </section>

        <section className="section fourth">
          <div className="section-two">
            <h2>Versatile Padding</h2>
            <p>LALALALALALALAL</p>
          </div>
          <div></div>
        </section>

        <section className="section fifth">
          <div className="section-two">
            <h2>Assistance On Demand</h2>
            <p>LALALALALALALAL</p>
          </div>
          <div></div>
        </section>

        <section className="section sixth">
          <div className="section-two">
            <h2>Close The World Around You</h2>
            <button
              className="addToCartButton"
              onClick={() => contextValue && contextValue!.addToCart(1)}
            >
              Add To Cart
            </button>
          </div>
          <div></div>
        </section>
      </div>

      <div id="webgi-canvas-container">
        <canvas id="webgi-canvas" ref={canvasRef}></canvas>
      </div>
    </>
  );
}

export default HeadphonesPage;
