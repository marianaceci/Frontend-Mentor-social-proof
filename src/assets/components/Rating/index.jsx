import styled from "styled-components";
import { lightGrayishMagenta, minWidth, veryDarkMagenta } from "../variables";

const cards = ["Reviews", "Report Guru", "BestTech"];

const RatingContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin: 40px auto;
`
const RatingCard = styled.div`
  width: 100%;
  background: ${lightGrayishMagenta};
  color: ${veryDarkMagenta};
  font-weight: 700;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  font-size: 1.15rem;
  border-radius: 10px;

  ul{
    display: flex;
    column-gap: 0.5rem;
    justify-content: center;
  }

  @media screen and (min-width: ${minWidth}){
    flex-direction: row;
    width: 450px;
    padding: 1.25rem 0;
    ul{
      padding: 0 30px;      
    }
    &:nth-child(1){
      margin-right: 80px;
    }
    &:nth-child(2){
      margin-right: 40px;
      margin-left: auto;
    }
    &:nth-child(3){
      margin-right: 0px;      
      margin-left: auto;
    }
  }
`

export default function Rating() {
  return (
    <RatingContainer>
      {cards.map((item) => (
        <RatingCard key={item}>
          <ul>
            <img src="/images/icon-star.svg" alt="star icon" />
            <img src="/images/icon-star.svg" alt="star icon" />
            <img src="/images/icon-star.svg" alt="star icon" />
            <img src="/images/icon-star.svg" alt="star icon" />
            <img src="/images/icon-star.svg" alt="star icon" />
          </ul>
          <p>Rated 5 Starts in {item}</p>
        </RatingCard>
      ))}
    </RatingContainer>
  );
}

