export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Nutrition Tracker",
    description:
      "Built a custom calorie & nutrient tracking app with fast local storage and offline support.",
    tech: ["React", "WASM-SQLite", "Hono", "NX"],
    link: "https://github.com/manu2699/nutri-track",
    github: "https://github.com/manu2699/nutri-track",
  },
  {
    title: "Control flow",
    description:
      "Developed a handy control flow library for React inspired by Solid.js",
    tech: ["React", "Typescript", "NPM"],
    link: "https://www.npmjs.com/package/control-flow-react",
    github: "https://github.com/manu2699/react-control-flow",
  },
  {
    title: "Portfolio",
    description: "The portfolio website you are currently viewing.",
    tech: ["Astro", "Tailwind", "Bun", "Solid.js"],
    link: "https://maneeshk.now.sh",
    github: "https://github.com/manu2699/Portfolio",
  },
  {
    title: "Bingo",
    description:
      "To play Bingo online with friends along with some chatting options.",
    tech: ["MERN Stack", "Redis", "Socket.io"],
    link: "https://chatndbingo.onrender.com/",
    github: "https://github.com/manu2699/ChatndBingo",
  },
  {
    title: "Covid Tracker",
    description:
      "A mobile app to track COVID-19 case trends in India, per-state breakdown, and visualizations.",
    tech: ["React native", "D3.js"],
    link: "https://w3devz.vercel.app/covid19tracker.html",
    github: "https://github.com/manu2699/Covid_19_Tracker",
  },
];