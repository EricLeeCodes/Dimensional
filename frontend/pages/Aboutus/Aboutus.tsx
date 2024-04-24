import "./aboutus.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import github from "./pics/github-logo.svg";
import eric from "./pics/Eric-profile.jpg";
import daniel from "./pics/danielsquare.jpg";
import jake from "./pics/jakesquare.jpg";
import { EnvelopeSimple, GithubLogo } from "phosphor-react";
import CountDown from "../../src/components/Count Down/CountDown";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

function Aboutus() {
  useGSAP(() => {
    const jake = gsap.timeline();
    const tl = gsap.timeline();

    tl.to(".aboutusintro", {
      delay: 10,
      opacity: 0,
      xPercent: "10",
      yPercent: "-20",
    });
    gsap.fromTo(
      ".aboutustitle",
      {
        xPercent: "-10",
        opacity: 0,
      },
      {
        duration: 2.6,
        xPercent: "0",
        opacity: 1,
        delay: 10,
      }
    );

    gsap.to(".section-jake-content", {
      duration: 2,
      // ease: "power4.in",
      delay: 10,
      text: {
        value:
          "As the visionary behind Dimensional, Jake brings boundless creativity and an unwavering commitment to innovation. With a keen eye for detail and a passion for pushing boundaries, Jake leads our team in crafting unique and impactful experiences for our users.",
        speed: 47,
      },
    });

    gsap.to(".section-daniel-content", {
      duration: 2,
      delay: 10,
      text: {
        value:
          "At the heart of our design process is Daniel, the creative force driving our visual identity. With a flair for design and a deep understanding of user experience, Daniel brings concepts to life with style and sophistication. Their passion for aesthetics and storytelling shines through in every aspect of our website.",
        speed: 7,
      },
    });

    gsap.to(".section-eric-content", {
      duration: 2,
      delay: 10,
      text: {
        value:
          "Meet Eric, the mastermind behind the architecture and functionality of our platform. With a knack for turning ideas into reality, Eric ensures that every feature is not only aesthetically pleasing but also seamlessly functional. Their dedication to perfection and precision is the cornerstone of our success.",
        speed: 6,
      },
    });

    gsap.fromTo(
      ".socials",
      {
        opacity: 0,
      },
      {
        duration: 3,
        opacity: 1,
        delay: 11,
      }
    );

    gsap.fromTo(
      ".picstagger",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 10,
        duration: 1,
        stagger: {
          each: 0.5,
          from: "random",
        },
      }
    );
  });

  return (
    <div className="aboutus">
      <div className="aboutuspics">
        <img className="jakepic picstagger" src={jake} alt="jake" />
        <img className="danielpic picstagger" src={daniel} alt="daniel" />
        <img className="ericpic picstagger" src={eric} alt="eric" />
      </div>

      <div className="aboutusintro">
        <p>
          At Dimensional, we believe in the power of collaboration, creativity,
          and dedication. Behind every pixel, every line of code, and every idea
          brought to life on this platform, there's a team of passionate
          individuals striving to make a difference. Allow us to introduce
          ourselves!
        </p>
        <CountDown />
      </div>
      <section className="section-jake">
        <p className="aboutustitle">Jake - The Visionary</p>
        <p className="section-jake-content"></p>
        <p className="socials">
          <p className="socialsalign">
            <img src={github} />
            :<a className="githublinks" href="https://github.com/Jaketattersall">Jaketattersall</a>
          </p>
          <p className="socialsalign">
            <EnvelopeSimple size={32} />
            :Jaketattersall90@gmail.com
          </p>
        </p>
      </section>

      <section className="section-daniel">
        <p className="aboutustitle">Daniel - The Creative Force</p>
        <p className="section-daniel-content"></p>
        <p className="socials">
          <p className="socialsalign">
            <img src={github} />
            :<a className="githublinks" href="https://github.com/Daniel-pho">Daniel-pho</a>
          </p>
          <p className="socialsalign">
            <EnvelopeSimple size={32} />
            :daniel-phou@hotmail.com
          </p>
        </p>
      </section>

      <section className="section-eric">
        <p className="aboutustitle">Eric - The Architect</p>
        <p className="section-eric-content"></p>
        <p className="socials">
          <p className="socialsalign">
            <img src={github} />
            :<a className="githublinks" href="https://github.com/EricLeeCodes">EricLeeCodes</a>
          </p>
          <p className="socialsalign">
            <EnvelopeSimple size={32} />
            :ericleecodes@gmail.com
          </p>
        </p>
      </section>
    </div>
  );
}

export default Aboutus;
