import { GlobalStyle } from './assets/components/GlobalStyle';
import styled from 'styled-components';
import Title from './assets/components/Title';
import Footer from './assets/components/Footer';
import Rating from './assets/components/Rating';
import Testimonials from './assets/components/Testimonials';
import { minWidth } from './assets/components/variables';

const Container = styled.div`
  text-align: center;
  margin: 25px;
  max-width: 600px;
  @media screen and (min-width: ${minWidth}){
    max-width: 1100px;
    display: flex;
    flex-direction: column;

    .top-container{
      display: flex;
      align-items: center;
    }
  }
`

function App() { 

  return (
    <Container>
      <GlobalStyle />
      <div className="top-container">
        <Title />
        <Rating />
      </div>
      <div className="bottom-container">
        <Testimonials />
        <Footer />
      </div>
    </Container>
  )
}

export default App
