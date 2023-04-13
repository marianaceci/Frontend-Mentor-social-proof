import styled from "styled-components";

const FooterStyle = styled.footer`
  font-size: 11px;
  text-align: center;
`
  
const FooterLink = styled.a`
  color: hsl(228, 45%, 44%);
`

export default function Footer(){
  return (
    <FooterStyle>
      Challenge by
      <FooterLink href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</FooterLink>.
      Coded by <FooterLink href="https://www.frontendmentor.io/profile/marianaceci" target="_blank">Mariana Schmidt</FooterLink>
    </FooterStyle>
  )
}
