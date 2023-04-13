import styled from "styled-components";
import users from "./users.json";
import { minWidth, softPink, veryDarkMagenta, white } from "../variables";

const TestimonialSection = styled.section`
  .card {
    background: ${veryDarkMagenta};
    margin: 20px 0;
    border-radius: 10px;
    color: ${white};
    padding: 1.75rem;

    .top{
      display: flex;
      align-items: center;
      justify-content: flex-start;

      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 20px;
      }

      .top--texts{
        text-align: left;

        .verified{
          color: ${softPink};
          font-weight: 400;
          margin-top: 5px;
        }
      }
    }

    p{
      text-align: left;
      line-height: 1.5rem;
      font-size: 1.125rem;
      margin-top: 25px;
    }
  }

  @media screen and (min-width: ${minWidth}){
    display: flex;
    column-gap: 30px;
    align-items: flex-start;
    margin: 40px auto;

    .card{
      padding: 2.5rem 2rem;

      &:nth-child(1){
        margin-bottom: auto;
        margin-top: 0;
      }
      
      &:nth-child(2){
        margin-bottom: auto;
        margin-top: 20px;
      }

      &:nth-child(3){
        margin-bottom: auto;
        margin-top: 40px;
      }
    }
    
  }
`;

export default function Testimonials() {
  return (
    <TestimonialSection>
      {users.map((item) => (
        <div key={item.name} className="card">
          <div className="top">
            <img src={item.picture} alt={item.name} />
            <div className="top--texts">
              <h3>{item.name}</h3>
              <h3 className="verified">Verified Buyer</h3>
            </div>
          </div>
          <p>{`" ${item.text} "`}</p>
        </div>
      ))}
    </TestimonialSection>
  );
}
