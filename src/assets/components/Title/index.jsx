import styled from "styled-components";
import { veryDarkMagenta, darkGrayishMagenta, minWidth } from "../variables";

const TitleContainer = styled.header`
h1{
  font-size: 2.5rem;
  color: ${veryDarkMagenta};
  font-weight: 700;
  line - height: 1.85rem;
}
  
p{
  color: ${darkGrayishMagenta};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.75rem;
  margin: 25px 0;
}

@media screen and (min-width: ${minWidth}){
  text-align: left;
  margin-right: 120px;
  h1 {
    font-size: 4rem;
  }
}
`



export default function Title() {
  return (
    <TitleContainer>
      <h1>10,000+ of our users love our products.</h1>
      <p>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </TitleContainer>
  );
}
