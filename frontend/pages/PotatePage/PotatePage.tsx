import { useRef, useEffect } from "react";
import { ShopContext } from "../../src/context/shop-context.tsx";
import {
  ViewerApp,
  addBasePlugins,
  AssetManagerPlugin,
  ScrollableCameraViewPlugin,
} from "webgi";
import gsap from "gsap";
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useContext } from "react";
import "./potatepage.css";
import plate from "/potatopagepics/plate.png";
import potato1 from "/potatopagepics/potato1.png";
import potato2 from "/potatopagepics/potato2.png";
import potato3 from "/potatopagepics/potato3.png";
import potato4 from "/potatopagepics/potato4.png";
import potato5 from "/potatopagepics/potato5.png";
import potato6 from "/potatopagepics/potato6.png";
import potato7 from "/potatopagepics/potato7.png"




gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

function PotatePage() {
  const canvasRef = useRef(null);
  const objectRef = useRef(null);
  const contextValue = useContext(ShopContext);

  const addSuccess = () => {
    toast.success("Successfully added to cart!",{
       position: "top-right",
    theme: "dark", 
    })
  }
  useGSAP(() => {
    const tl = gsap.timeline();

    //title animation
    tl.to(".potatosubtitle", {
      duration: 2.5,
      text: "Seductive Secrets of the Potato Await",
      ease: "steps(33)",
      delay: 1,
    });
    //section two stuff

    tl.fromTo(
      ".section-two-container-potato",
      { xPercent: "-20", opacity: 0 },
      {
        xPercent: "2",
        opacity: 1,
        scrollTrigger: {
          trigger: ".secondpotato",
          start: "top bottom",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
          snap: 1,
        },
      }
    ),
      tl.fromTo(
        ".section-two-container-potato",
        { xPercent: "2", opacity: 1 },
        {
          xPercent: "0",
          opacity: 0,
          scrollTrigger: {
            trigger: ".secondpotato",
            start: "70% center",
            end: "bottom center",
            // markers: true,
            scrub: 1,
          },
        }
      ),
      // section three stuff
      // tl.to(".section-three-container-potato", {
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
     

    tl.to(".plate", {
      xPercent: "-100",
      opacity: 0,
      scrollTrigger: {
        trigger: ".section-one-container-potato",
        start: "-60% top",
        end: "-30% ",
        // markers: true,
        scrub: 1,
      },
    });

    tl.to(".potatopics", {
      duration:1,
      opacity: 1,
      
      delay:0.2,
      stagger:  {
        from: "random",
        each: 0.2
      },
      ease: "power2",
      scrollTrigger: {
        trigger: ".thirdpotato",
        start: "20% center",
        end: "70% 70%",
        // markers: true,
        scrub: 1,
        snap: 1,
      }
    })

    tl.fromTo(".endingtitle", {
      opacity:0,
      y: 100,
    },{ 
      y: 0,
      opacity:1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".fourthpotato",
        start: "top center",
        end: "center center",
        scrub: 1,
        snap: 1,
        // markers: true
      }
    })

    tl.fromTo(".endingsubtitle", {
      opacity:0,
      y: 100,
    },{ 
      y: 0,
      opacity:1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".fourthpotato",
        start: "40% center",
        end: "center center",
        scrub: 1,
        // markers: true
      }
    })
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
        <section className="section-potato first">
          <div className="section-one-container-potato">
            <h1 className="potatotitle">Unlock Your Destiny:</h1>
            <h2 className="potatosubtitle"></h2>
            <img src={plate} alt="Plate" className="plate" />
          </div>
        </section>

        <section className="section-potato secondpotato">
          <div className="section-two-container-potato">
            <h3 className="potatotextone title2">Nutritional Powerhouse</h3>
            <p className="potatotextone">
               Potatoes are a versatile and nutritious
              choice, packed with essential vitamins, minerals, and fiber like
              vitamin C, potassium, and fiber, promoting heart health and aiding
              digestion. Their varied preparation methods, from mashed to
              roasted, offer delicious ways to incorporate vital nutrients into
              your diet.
            </p>
            <h3 className="potatotexttwo title2">Sustainable Staple</h3>
            <p className="potatotexttwo">
               Potatoes are a sustainable crop with a
              relatively low environmental impact, requiring less water and land
              compared to other staples. Supporting potato cultivation can
              contribute to eco-friendly farming practices and sustainable food
              systems, benefiting both the environment and communities.
            </p>
            <h3 className="potatotextthree title2">Budget-Friendly Option</h3>
            <p className="potatotextthree">
               Potatoes are a remarkably affordable
              choice for consumers, with widespread availability and a low cost
              per pound. Their versatility allows for countless affordable meal
              options, making them a cornerstone of nutritious eating for people
              of all income levels.
            </p>
          </div>
        
        </section>

        <section className="section-potato thirdpotato">
          <div className="section-three-container">
            <p className="sectionthreetitle">Versatility.</p>
            <img src={potato1} alt="potato1" className="potato1 potatopics" />
            <img src={potato2} alt="potato2" className="potato2 potatopics" />
            <img src={potato3} alt="potato3" className="potato3 potatopics" />
            <img src={potato4} alt="potato4" className="potato4 potatopics" />
            <img src={potato5} alt="potato5" className="potato5 potatopics" />
            <img src={potato6} alt="potato6" className="potato6 potatopics" />
            <img src={potato7} alt="potato7" className="potato7 potatopics" />
          </div>
        </section>

        <section className="section-potato fourthpotato">
          <div className="section-four-container-potato">
            <div className="endingtitle">Taste the Magic, </div>
            <div className="endingsubtitle">Join Us</div>
          </div><div className="button-potato-page">
              <button className="potatobutton"
                onClick={() => { contextValue && contextValue!.addToCart(3);
                  addSuccess();
                }
                }
              >
                Add To Cart
              </button>
              <Link to="/"><button className="potatobutton">Back to Home</button> </Link>
              
            </div>
            <div className="toastcontainer-potato"><ToastContainer /></div>
        </section>

        
          
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
