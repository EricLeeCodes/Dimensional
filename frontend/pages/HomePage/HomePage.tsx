
import "./homepage.css";
import Navbar from "../Navbar/Navbar"
import gsap from "gsap";
import { useEffect } from "react";




 function HomePage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/TextPlugin.min.js';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // When the script is loaded, initialize GSAP and use TextPlugin
    script.onload = () => {
      // Initialize GSAP with plugins
      gsap.registerPlugin(window.TextPlugin); // Ensure that 'window.TextPlugin' is available after the script is loaded

      // Now you can use TextPlugin for text animations
      gsap.to(".title", {
        duration: 1,
        text:{
          value: "Dimensional",
        },
        delay: 3
      });

      gsap.to(".smalltitle", {
        duration: 0.5,
        yPercent: '-200',
        opacity: 0,
        ease: "power1.in",
        delay: 3
      })
    };

    // Cleanup: Remove the script from the document body when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div>
      <Navbar />
      <h2 className="smalltitle">Welcome to</h2>
      <h1 className="title">Our Website</h1> 
  </div>
      
  );
}

export default HomePage;