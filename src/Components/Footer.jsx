import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    height: 100%;
    background-color: #2FBEEF;
    padding: 20px;
`;
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
`;
const Tittle = styled.h3`
    font-size: 30px;
    text-decoration: underline;
    align-items: center;
    justify-content: center;
    color: black;
    text-align: center;
`

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Button = styled.button`
    margin-top: 3px;
    font-size: 16px;
    font-weight: bold;
    justify-content: space-between;
    color: white;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        color: black;
        transform: scale(1.1);
    }

`;

const Center = styled.div`
    flex:1;
`;
const Right = styled.div`
    flex:1;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Tittle>About</Tittle>
        <SocialContainer>
          <SocialIcon color="3B5998">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="ff0066">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="339933">
            <WhatsApp />
          </SocialIcon>
        </SocialContainer>
        <Button>About us</Button>
        <Button>Services</Button>
        <Button>Contact Us</Button>
        <Button>My Account</Button>
      </Left>
      <Center>

      </Center>
      <Right>

      </Right>
    </Container>
  );
}

export default Footer
