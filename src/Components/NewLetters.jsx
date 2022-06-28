import { SendSharp } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.div`
    height: 60vh;
    background-color: #fff5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Tittle = styled.h1`
    font-size:70px;
    margin-bottom: 20px;
`;
const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width:50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
   
`;
const Button = styled.button`
    flex:2;
    background-color: #2FBEEF;
    color: white;
    border: none;
    cursor: pointer;
`;

const NewLetters = () => {
  return (
    <Container>
        <Tittle>Newletter</Tittle>
        <Description>Get all the updates about our products and offers!</Description>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <SendSharp/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewLetters
