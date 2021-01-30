import { v4 as uuidv4 } from "uuid";
// Images
import igniteMain from "./img/ignite-main.jpg";
import igniteSS01 from "./img/ignite-ss01.jpg";
import igniteSS02 from "./img/ignite-ss02.jpg";
import musicMain from "./img/music-main.png";
import musicSS01 from "./img/music-ss01.png";
import musicSS02 from "./img/music-ss02.png";
import quizMain from "./img/quiz-main (2).png";
import quizSS01 from "./img/quiz-ss01 (2).png";
import quizSS02 from "./img/quiz-ss02 (2).png";
import ipsumMain from "./img/ipsum-main.jpg";
import ipsumSS01 from "./img/ipsum-ss01.jpg";
import ipsumSS02 from "./img/ipsum-ss02.jpg";
import hangmanMain from "./img/hangman-main (2).png";
import hangmanSS01 from "./img/hangman-ss01.png";
import hangmanSS02 from "./img/hangman-ss02 (2).png";
import captureMain from "./img/capture-main.png";
import captureSS01 from "./img/capture-ss01.png";
import captureSS02 from "./img/capture-ss02.jpg";

function getProjects() {
  return [
    {
      id: uuidv4(),
      name: "React Music Player",
      caseStudy: `This project marks my introduction to React.js. I had built a music player in the past using vanilla JS and so I figured a good entry point to learning React would be to build something I'm somewhat familiar with. I learned some of the key fundamentals of how React.js works. For example, I quickly fell in love with writing JSX and keeping all my HTML code directly below any logic I needed for that particular component. Maintaining all the code needed to both display and update the UI all in one file makes so much sense to me. This was my first time using state in React and not relying on the DOM to store the application data. This made it a lot easier when it came time to grab that data since I no longer had to traverse the DOM for that particular HTML node and could even pass state to other components using props. This project was also my first introduction to Sass and coming from vanilla JS I really enjoyed creating partials for each component. However, I learned styled-components with my next project and love keeping everything in one file so much more. Lastly, I learned how much easier it is to update the UI. With vanilla JS we have to traverse the DOM, add an event listener, inside that listener do some more DOM traversal to find the piece we want to update... it can be a lot. With React though, I love that the state is always stored in a JS variable and so we can add an event like onClick directly to the JSX element and then use something like map or a "...spread" operator to update it. React just made so much sense after this project.`,
      logic: `The logic behind the project is pretty straight-forward. I had a data file which contained the cover art, mp3 files, and general information about each song. I hooked this up to some state simply called "songs" and then had some additional state for isPlaying, currentSong, etc. From there I created a Player component which held most of the logic for the project. It implements things like playing songs, draging the time bar so you can skip to the middle of a song, and skipping songs. It also has a Library component where I used my first map function to spread all the songs in my state into their own LibrarySong component which I hid away off the screen until the user clicks the button. Once everything was in place I had some issues with formatting the song times properly and also trying to style the scrollbar. I've come to realize scrollbars are tricky to style since each browser handles them differently.`,
      bgImage: musicMain,
      screenshots: [musicSS01, musicSS02],
      webLink: "http://35.222.64.101/",
      githubLink: "https://github.com/hauze-v/react-music-player",
    },
    {
      id: uuidv4(),
      name: "React Gaming Website",
      caseStudy: `This was my most recent React project and my introduction to Redux. Up until this point I found React pretty easy to learn and implement and was thoroughly enjoying my time with it. Redux, however, made React feel so clunky. I know it's likely because I don't have a deep understanding yet of actions, reducers, and dispatch, but I can't help but feel like the complexity increased dramatically with this project simply due to Redux. With that being said, I certainly understand the value it brings and like the idea of having a global state "store" that we don't need to worry about passing up the tree or drilling down to as was required in my previous projects. Secondly, this project allowed me to set up and use an external API in a meaningful way. I've built things using APIs in the past, but I was shocked at how quickly I could grab and display data on the screen using React components. I love how this one came out and enjoyed building the toggleable "card" style components so much that I refactored this entire portfolio site to use React components.`,
      logic: `The logic behind the curtains comes down to an api.js file I created to hold all the URL strings needed for calling the external API. Then there's a gamesAction file that fetches the data from the API using Axios and dispatches that data to a gamesReducer which then updates the state and renders the Home page. What's cool about using an API is that the data will always be fresh and dynamic.There's no need to come update the "popular games" here because I'm fetching the highest rated games from the past six months. From the Home page, the user can click on a card that triggers another Axios API request through the gamesDetailsAction file to fetch some screenshots and additional information about that particular game. The gamesDetailsReducer then renders that information on the screen in a nice pop-up style card that I was able to animate using AnimateSharedLayout.`,
      bgImage: igniteMain,
      screenshots: [igniteSS01, igniteSS02],
      webLink: "http://35.239.133.109",
      githubLink: "https://github.com/hauze-v/ignite",
    },
    {
      id: uuidv4(),
      name: "React Videography Portfolio",
      caseStudy:
        "Prompto blizzard magic pot princess guard mega-phoenix dispel light robe Raiden dark knight. Cinna slowga adamantoise lion heart elixir haste ninja gear Cait Sith white mage. Relm slowga adamantoise lion heart sleeping bag blizzara myrthril vest Carbuncle samurai. Garnet thunder judges tiger racket echo screen fira rubber suit Kujata warrior.",
      bgImage: captureMain,
      screenshots: [captureSS01, captureSS02],
      webLink: "http://34.70.229.27/react-capture-portfolio",
      githubLink: "https://github.com/hauze-v/react-capture-portfolio",
    },
    {
      id: uuidv4(),
      name: "Final Fantasy Ipsum Generator",
      caseStudy:
        "Ever since I first used a custom-built ipsum generator like bacon ipsum back in college, I've always wanted to make one of my own. Since I'm a big nerd and couldn't find an ipsum generator for my favorite video game series, I decided this was the perfect project to practice my JavaScript skills with.",
      bgImage: ipsumMain,
      screenshots: [ipsumSS01, ipsumSS02],
      webLink: "https://finalfantasyipsum.com/",
      githubLink: "https://github.com/hauze-v/final-fantasy-ipsum",
    },

    {
      id: uuidv4(),
      name: "Vanilla Quiz App",
      caseStudy:
        "Object oriented vanilla JavaScript quiz app built using the revealing module pattern. This project allowed me to apply my OOP knowledge through constructor functions and object prototypes.",
      bgImage: quizMain,
      screenshots: [quizSS01, quizSS02],
      webLink: "https://hauze-v.github.io/oop-quiz-app/",
      githubLink: "https://github.com/hauze-v/oop-quiz-app",
    },
    {
      id: uuidv4(),
      name: "Vanilla Hangman Game",
      caseStudy:
        "Prompto blizzard magic pot princess guard mega-phoenix dispel light robe Raiden dark knight. Cinna slowga adamantoise lion heart elixir haste ninja gear Cait Sith white mage. Relm slowga adamantoise lion heart sleeping bag blizzara myrthril vest Carbuncle samurai. Garnet thunder judges tiger racket echo screen fira rubber suit Kujata warrior.",
      bgImage: hangmanMain,
      screenshots: [hangmanSS01, hangmanSS02],
      webLink: "https://hauze-v.github.io/hangman-game/",
      githubLink: "https://github.com/hauze-v/hangman-game",
    },
  ];
}

export default getProjects;
