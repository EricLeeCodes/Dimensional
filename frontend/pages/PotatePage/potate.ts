// import {
//   ViewerApp,
//   AssetManagerPlugin,
//   ScrollableCameraViewPlugin,
//   addBasePlugins,
//   AssetManagerBasicPopupPlugin, CanvasSnipperPlugin, FileTransferPlugin,

//   // Color, // Import THREE.js internals
//   // Texture, // Import THREE.js internals
// } from "webgi";
// import "./styles.css";

// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger)

// async function setupViewer(){

//   // Initialize the viewer
//   const viewer = new ViewerApp({
//       canvas: document.getElementById('webgi-canvas') as HTMLCanvasElement,
//       useRgbm: false,
//   })
//   const scroller = await viewer.addPlugin(ScrollableCameraViewPlugin);
//   // Add plugins individually.
//   const manager = await viewer.addPlugin(AssetManagerPlugin)
//   const camera = viewer.scene.activeCamera
//   const position = camera.position
//   const target = camera.target


//   // or use this to add all main ones at once.
//   await addBasePlugins(viewer) // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

//   // Add a popup(in HTML) with download progress when any asset is downloading.
//   await viewer.addPlugin(AssetManagerBasicPopupPlugin)

//   // Required for downloading files from the UI
//   await viewer.addPlugin(FileTransferPlugin)

//   // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
//   await viewer.addPlugin(CanvasSnipperPlugin)

//   // Import and add a GLB file.
//   await viewer.load("/potato.glb")

//   // Load an environment map if not set in the glb file
//   // await viewer.setEnvironmentMap("./assets/environment.hdr");

//   // Add some UI for tweak and testing.
//   // const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin)
//   // Add plugins to the UI to see their settings.
//   // uiPlugin.setupPlugins<IViewerPlugin>(TonemapPlugin, CanvasSnipperPlugin)

// function setupScrollanimation() {

// const tl = gsap.timeline()

// //first section

// tl.to(".section-two-container", {xPercent: '10', opacity: 1,
//   scrollTrigger: {
//     trigger: ".second",
//     start: "top center",
//     end: "bottom 99%",
    
//     scrub: true,
//   }})

//   //second section
//   tl.to(".section-three-container", {xPercent: '-110', opacity: 1,
//   scrollTrigger: {
//     trigger: ".third",
//     start: "top center",
//     end: "bottom 99%",
   
//     scrub: true,
//   }})
//   //third section 
//   tl.to(".section-four-container", {xPercent: '-10', opacity: 1,
//   scrollTrigger: {
//     trigger: ".fourth",
//     start: "top center",
//     end: "bottom 99%",
   
//     scrub: true,
//   }})
// }

// setupScrollanimation()

// //webgi update
// let needsUpdate = true;

// function onUpdate() {
// needsUpdate = true
// viewer.renderer.resetShadows();

// }

// viewer.addEventListener('preFrame', () => {
// if(needsUpdate) {
//   camera.positionUpdated(false)
//   camera.targetUpdated(true)
//   needsUpdate = false
// }
// })

// }



// setupViewer()
