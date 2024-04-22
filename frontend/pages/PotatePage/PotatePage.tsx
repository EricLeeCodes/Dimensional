import { useRef, useEffect } from "react";
import { ShopContext } from "../../src/context/shop-context.tsx";
import {
  ViewerApp,
  addBasePlugins,
  AssetManagerPlugin,
  ScrollableCameraViewPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useContext } from "react";
import "./potatepage.css";
import plate from "/potatopagepics/plate.png";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

function PotatePage() {
  const canvasRef = useRef(null);
  const objectRef = useRef(null);
  const contextValue = useContext(ShopContext);
  useGSAP(() => {
    const tl = gsap.timeline();
    

    //title animation
    tl.to(".potatosubtitle", {
      duration: 2,
      text: "Seductive Secrets of the Potatoes Await",
      ease: "none",
      delay: 2
    })
    //section two stuff

    tl.fromTo(
      ".section-two-container",
      {xPercent: "0",
        opacity: 0
      }, {
        xPercent: "40",
        opacity: 1,
        scrollTrigger: {
              trigger: ".secondpotato",
              start: "top center",
              end: "50%% center",
              // markers: true,
              scrub: 1,
            }
      }),

      tl.fromTo(
        ".section-two-container",
        {xPercent: "40",
          opacity: 1
        }, {
          xPercent: "0",
          opacity: 0,
          scrollTrigger: {
                trigger: ".secondpotato",
                start: "80% center",
                end: "bottom center",
                // markers: true,
                scrub: 1,
              }
        }),
  
   
    // section three stuff
    // tl.to(".section-three-container", {
    //   xPercent: "-110",
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: ".third",
    //     start: "top center",
    //     end: "bottom 99%",

    //     scrub: true,
    //   },
    // });
    //section four stuff
    tl.to(".section-four-container", {
      xPercent: "-10",
      opacity: 1,
      scrollTrigger: {
        trigger: ".fourth",
        start: "top center",
        end: "bottom 99%",

        scrub: true,
      },
    });

    tl.to(".plate", {
      xPercent: "-100",
      opacity: 0,
      scrollTrigger: {
        trigger: ".section",
        start: "10% top",
        end: "center ",
        // markers: true,
        scrub: 2,
      },
    });

   
  });

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
        <section className="section first">
          <div className="section-one-container">
            <h1 className="potatotitle">Unlock Your Destiny:</h1>
            <h2 className="potatosubtitle"></h2>
            <img src={plate} alt="Plate" className="plate" />
           
          </div>
        </section>
        
        <section className="section secondpotato">
          <div className="section-two-container">
            <h2 className="sectiontwotitle">The Epicurean's Choice</h2>
            <p className="sectiontwocontent">
              Indulge in the culinary splendor of the humble yet majestic
              potato, an epitome of gastronomic delight. Crafted by nature's
              finest hands and nurtured in fertile soils, each potato embodies a
              symphony of flavors waiting to be discovered. Whether roasted to
              golden perfection, mashed into creamy decadence, or crisped into
              delightful chips, the versatility of this earthly gem knows no
              bounds. Elevate your culinary repertoire and enchant your taste
              buds with the unparalleled charm of the potato.
            </p>
          </div>
        </section>

        <section className="section third">
          <div className="section-three-container">
            <p className="sectionthreetitle">The Epicurean's Choice</p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </section>

        <div>
          <div className="section-four-container">
            <span>You hungry?</span>
            <div className="buttons">
              <button
          
          onClick={() => contextValue && contextValue!.addToCart(3)}
        >
          Add To Cart
        </button></div>
            
          </div>
        </div>
          
          
       
        <button className="back">Back to top</button>
      
        <div id="webgi-canvas-container">
          <canvas id="webgi-canvas" ref={canvasRef}></canvas>
        </div>
        {/* <script src="/home/labber/lighthouse/Dimensional/frontend/pages/PotatePage/potate.ts" type="module"></script> */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </div>
    </>
  );
}

export default PotatePage;
