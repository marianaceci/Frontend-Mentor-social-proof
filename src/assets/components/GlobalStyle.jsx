import { createGlobalStyle } from "styled-components";
import { fontFamily, fontSize, minWidth } from "./variables";
import bgDeskTop from "/images/bg-pattern-top-desktop.svg";
import bgDeskBottom from "/images/bg-pattern-bottom-desktop.svg";
import bgMobTop from '/images/bg-pattern-top-mobile.svg';
import bgMobBottom from '/images/bg-pattern-bottom-mobile.svg';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: ${fontFamily};
  font-size: ${fontSize};
  display: flex;
  align-items: center;
  justify-content: center;  
  background-image: url(${bgMobTop}), url(${bgMobBottom});
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;

  @media screen and (min-width: ${minWidth}){
    height: 100vh;        
    background-image: url(${bgDeskTop}), url(${bgDeskBottom});
  }
}
`;
