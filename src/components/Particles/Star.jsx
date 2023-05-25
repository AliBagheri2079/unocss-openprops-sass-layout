import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import starData from "./config/starData";

/*
	NOTE: D3.js (Data-Driven Documents)
	SEE NOTES: D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation. you can create this particle with D3.js
	NOTE: P5.js
	SEE NOTES: P5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else. you can create this particle with P5.js
	NOTE: Paper.js
	SEE NOTES: Paper.js is an open source vector graphics scripting framework that runs on top of the HTML5 Canvas. It offers a clean Scene Graph / Document Object Model and a lot of powerful functionality to create and work with vector graphics and bezier curves, all neatly wrapped up in a well designed, consistent and clean programming interface. you can create this particle with Paper.js
  NOTE: Particles.js
  SEE NOTES: A lightweight JavaScript library for creating particles. In pure js project you can use this library
  NOTE: TsParticles-Engine or TsParticles
  SEE NOTES: A lightweight TypeScript library for creating particles. Dependency free (*), browser ready and compatible with React.js, Vue.js (2.x and 3.x), Angular, Svelte, jQuery, Preact, Inferno, Riot.js, Solid.js, and Web Components. In pure ts project you can use this library
  NOTE: React-Particles
  SEE NOTES: in React and Next project, insteadof using top libraries, you can use this library
*/

const StarParticle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    /*
      * you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    
      * this loads the tsparticles package bundle, it's the easiest method for getting everything ready
     
      * starting from v2 you can add only the features you need reducing the bundle size
     */
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="star-particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={starData}
    />
  );
};
export default StarParticle;
