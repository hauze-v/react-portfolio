import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  background-color: #e3e3e3;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgray;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lato", sans-serif !important;
  font-weight: 900 !important;
}
.my-button {
  font-size: 1rem;
  line-height: normal;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out, color 0.2s 0.3s;
  letter-spacing: 0;
  border-radius: 45px;
  height: auto;
  padding: 0.8em 2.1em;
}
.my-button:hover {
  cursor: pointer;
  padding: 0.8em 2.7em;
}

.my-button:active,
.my-button:focus,
.my-button.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.thin-bar {
  border-bottom: 5px solid #f33f12;
}
.details h3 {
  color: #738182;
  text-transform: uppercase;
}

.details .platform {
  font-size: 0.8em;
  text-transform: uppercase;
  margin: 2em 0 -0.1em;
  font-family: "Maven pro", sans-serif;
  font-weight: 500;
  color: #ff7654;
}

.details i {
  color: #ff7654;
  margin-right: 1em;
}

.details p {
  color: #738182;
  font-family: "Maven pro", sans-serif;
  font-weight: 500;
  font-size: 1.2em;
  margin-bottom: 1.8em;
}

.details a,
.details a:link,
.details a:active {
  color: rgba(255, 103, 68, 0.91);
  border: 2px solid rgba(255, 103, 68, 0.91) !important;
  background-color: #fff;
}

.details a:hover,
.details a:focus {
  /*box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 14px 1px rgba(0, 0, 0, 0.15);*/
  background-color: rgba(255, 103, 68, 0.91) !important;
  color: #fff;
}

a {
  text-decoration: none;
  cursor: pointer;
}

`;

export default GlobalStyles;
