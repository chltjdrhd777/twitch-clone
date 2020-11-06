import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import background from "./img/free-images-anonymous-mask-download-high-definiton-wallpapers-windows-10-backgrounds-amazing-4k-free-download-wallpapers-quality-images-computer-wallpapers-1920x1080-1-1200x675.jpg";

const GlobalCSS = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    color:white;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration:none;
  }

  body{
    background:url(${background})
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
