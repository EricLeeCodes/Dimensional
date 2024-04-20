
import "./homepage.css";
import Navbar from "../Navbar/Navbar"
import gsap from "gsap";
import { useEffect } from "react";
import BIRDS from 'vanta/src/vanta.birds'

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
          newClass: "newtitle"
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
    
    BIRDS({
      el: '#vanta',
      backgroundColor: "#e6f4f1",
      color1: "#FFEC00",
      color2: "#F9F9F9",
      colorMode: "lerpGradient",
    })
    // Cleanup: Remove the script from the document body when the component unmounts
    return () => {
      document.body.removeChild(script);
      
    };
  }, []);
 
  return (
    <div>
      <Navbar />
      <div className="bg" id="vanta"></div>
      <h2 className="smalltitle">Where the horizon</h2>
      <h1 className="title">is just the beginning</h1> 
      
  </div>
      
  );
}

export default HomePage;