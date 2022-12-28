import uniqid from "uniqid";

const projects = [
  {
    _id: uniqid(),
    mobile: true,
    name: "Socially - PWA",
    technologies: [
      "React",
      "Redux",
      "Rest API",
      "React Router",
      "Material UI",
      "Styled Components",
    ],
    site: "https://curious-sable-29bfe2.netlify.app/",
    github: "https://github.com/rartamosa/Socially-PWA",
    image: "./assets/socially.png",
  },
  {
    _id: uniqid(),
    mobile: false,
    name: "To Do App (extended)",
    technologies: [
      "React",
      "React Router",
      "Rest API",
      "Custom Hook",
      "custom reusable component",
      "NPM reusable components",
    ],
    site: "https://bejewelled-cat-b72838.netlify.app",
    github: "https://github.com/rartamosa/To-do-app-extended",
  },
  {
    _id: uniqid(),
    mobile: false,
    name: "to do app",
    technologies: [
      "local storage",
      "React",
      "custom hook",
      "NPM reusable component",
    ],
    site: "https://reliable-dango-25e722.netlify.app",
    github: "https://github.com/rartamosa/To-do-app",
  },
];

export default projects;
