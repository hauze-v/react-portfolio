import { v4 as uuidv4 } from "uuid";
// Images
import igniteMain from "./img/ignite-main.jpg";
import igniteSS01 from "./img/ignite-ss01.jpg";
import igniteSS02 from "./img/ignite-ss02.jpg";

function getProjects() {
  return [
    {
      id: uuidv4(),
      name: "React Music Player",
      caseStudy:
        "This project marks my introduction to React.js. In order to build what you see here I had to learn JSX, how to handle state, and how to pass props. After spending a lot of time with the fundamentals of vanilla JS, I appreciate the speed and ease at which React.js can render things on the screen. Writing Sass was also a fun challenge.",
      bgImage: "/",
      screenshots: ["/", "/"],
    },
    {
      id: uuidv4(),
      name: "Quiz App",
      caseStudy:
        "Object oriented vanilla JavaScript quiz app built using the revealing module pattern. This project allowed me to apply my OOP knowledge through constructor functions and object prototypes.",
      bgImage: "/",
      screenshots: ["/", "/"],
    },
    {
      id: uuidv4(),
      name: "Final Fantasy Ipsum Generator",
      caseStudy:
        "Ever since I first used a custom-built ipsum generator like bacon ipsum back in college, I've always wanted to make one of my own. Since I'm a big nerd and couldn't find an ipsum generator for my favorite video game series, I decided this was the perfect project to practice my JavaScript skills with.",
      bgImage: "/",
      screenshots: ["/", "/"],
    },
    {
      id: uuidv4(),
      name: "React Videography Portfolio",
      caseStudy:
        "Prompto blizzard magic pot princess guard mega-phoenix dispel light robe Raiden dark knight. Cinna slowga adamantoise lion heart elixir haste ninja gear Cait Sith white mage. Relm slowga adamantoise lion heart sleeping bag blizzara myrthril vest Carbuncle samurai. Garnet thunder judges tiger racket echo screen fira rubber suit Kujata warrior.",
      bgImage: "/",
      screenshots: ["/", "/"],
    },
    {
      id: uuidv4(),
      name: "React Gaming Website",
      caseStudy:
        "Prompto blizzard magic pot princess guard mega-phoenix dispel light robe Raiden dark knight. Cinna slowga adamantoise lion heart elixir haste ninja gear Cait Sith white mage. Relm slowga adamantoise lion heart sleeping bag blizzara myrthril vest Carbuncle samurai. Garnet thunder judges tiger racket echo screen fira rubber suit Kujata warrior.",
      bgImage: "/",
      screenshots: ["/", "/"],
    },
    {
      id: uuidv4(),
      name: "Hangman Game",
      caseStudy:
        "Prompto blizzard magic pot princess guard mega-phoenix dispel light robe Raiden dark knight. Cinna slowga adamantoise lion heart elixir haste ninja gear Cait Sith white mage. Relm slowga adamantoise lion heart sleeping bag blizzara myrthril vest Carbuncle samurai. Garnet thunder judges tiger racket echo screen fira rubber suit Kujata warrior.",
      bgImage: "/",
      screenshots: ["/", "/"],
    },
  ];
}

export default getProjects;
