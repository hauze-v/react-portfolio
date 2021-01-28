import { v4 as uuidv4 } from "uuid";
// Images
import igniteMain from "./img/ignite-main.jpg";
import igniteSS01 from "./img/ignite-ss01.jpg";
import igniteSS02 from "./img/ignite-ss02.jpg";
import musicMain from "./img/music-main.png";
import musicSS01 from "./img/music-ss01.png";
import musicSS02 from "./img/music-ss02.png";
import quizMain from "./img/quiz-main (2).png";
import quizSS01 from "./img/quiz-ss01.png";
import quizSS02 from "./img/quiz-ss02.png";
import ipsumMain from "./img/ipsum-main.jpg";
import ipsumSS01 from "./img/ipsum-ss01.jpg";
import ipsumSS02 from "./img/ipsum-ss02.jpg";
import hangmanMain from "./img/hangman-main (2).png";
import hangmanSS01 from "./img/hamgna-ss01.png";
import hangmanSS02 from "./img/hangman-ss02.png";
import captureMain from "./img/capture-main.png";
import captureSS01 from "./img/capture-ss01.png";
import captureSS02 from "./img/capture-ss02.jpg";

function getProjects() {
  return [
    {
      id: uuidv4(),
      name: "React Music Player",
      caseStudy:
        "This project marks my introduction to React.js. In order to build what you see here I had to learn JSX, how to handle state, and how to pass props. After spending a lot of time with the fundamentals of vanilla JS, I appreciate the speed and ease at which React.js can render things on the screen. Writing Sass was also a fun challenge.",
      bgImage: musicMain,
      screenshots: [musicSS01, musicSS02],
    },
    {
      id: uuidv4(),
      name: "React Gaming Website",
      caseStudy:
        "Prompto blizzard magic pot princess guard mega-phoenix dispel light robe Raiden dark knight. Cinna slowga adamantoise lion heart elixir haste ninja gear Cait Sith white mage. Relm slowga adamantoise lion heart sleeping bag blizzara myrthril vest Carbuncle samurai. Garnet thunder judges tiger racket echo screen fira rubber suit Kujata warrior.",
      bgImage: igniteMain,
      screenshots: [igniteSS01, igniteSS02],
    },
    {
      id: uuidv4(),
      name: "React Videography Portfolio",
      caseStudy:
        "Prompto blizzard magic pot princess guard mega-phoenix dispel light robe Raiden dark knight. Cinna slowga adamantoise lion heart elixir haste ninja gear Cait Sith white mage. Relm slowga adamantoise lion heart sleeping bag blizzara myrthril vest Carbuncle samurai. Garnet thunder judges tiger racket echo screen fira rubber suit Kujata warrior.",
      bgImage: captureMain,
      screenshots: [captureSS01, captureSS02],
    },
    {
      id: uuidv4(),
      name: "Final Fantasy Ipsum Generator",
      caseStudy:
        "Ever since I first used a custom-built ipsum generator like bacon ipsum back in college, I've always wanted to make one of my own. Since I'm a big nerd and couldn't find an ipsum generator for my favorite video game series, I decided this was the perfect project to practice my JavaScript skills with.",
      bgImage: ipsumMain,
      screenshots: [ipsumSS01, ipsumSS02],
    },
    {
      id: uuidv4(),
      name: "Vanilla Quiz App",
      caseStudy:
        "Object oriented vanilla JavaScript quiz app built using the revealing module pattern. This project allowed me to apply my OOP knowledge through constructor functions and object prototypes.",
      bgImage: quizMain,
      screenshots: [quizSS01, quizSS02],
    },
    {
      id: uuidv4(),
      name: "Vanilla Hangman Game",
      caseStudy:
        "Prompto blizzard magic pot princess guard mega-phoenix dispel light robe Raiden dark knight. Cinna slowga adamantoise lion heart elixir haste ninja gear Cait Sith white mage. Relm slowga adamantoise lion heart sleeping bag blizzara myrthril vest Carbuncle samurai. Garnet thunder judges tiger racket echo screen fira rubber suit Kujata warrior.",
      bgImage: hangmanMain,
      screenshots: [hangmanSS01, hangmanSS02],
    },
  ];
}

export default getProjects;
