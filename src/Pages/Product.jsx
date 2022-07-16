import styled from "styled-components"
import Navbar from "../Components/Navbar"
import Ads from "../Components/Ads"
import NewLetters from "../Components/NewLetters"
import Footer from "../Components/Footer"
import { Add, Remove, ShoppingCartOutlined } from "@mui/icons-material"

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
 flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 200;
    font-weight: bolder;
`;

const Description = styled.p`
    margin: 20px 0px;

`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    color: #2FBEEF;
`;



const AddContainer = styled.div`
    display: flex;
    margin-top: 60px;
    align-items: center;
    width: 50%;
    justify-content: space-between;

`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;



`;
const Amount = styled.span`
    width:30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #2FBEEF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button =styled.button`
    padding: 15px;
    border: 2px solid #2FBEEF;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: #2FBEEF;
    }
`;




const Product = () => {
  return (
    <Container>
        <Ads/>
        <Navbar/>
        <Wrapper>
          <ImgContainer>
            <Image src="https://i.ebayimg.com/images/g/YngAAOSwksdihGae/s-l1600.png"/>
          </ImgContainer>
          <InfoContainer>
            <Title>Dell Intel Core I5</Title>
            <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur 
                necessitatibus soluta quia deserunt mollitia expedita sapiente accusamus corporis voluptas
                 iusto, tempora modi fugit. Obcaecati, cum vero? Distinctio, esse assumenda!
            </Description>
            <Price>$5,000.00</Price>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
            <Button><ShoppingCartOutlined/> ADD TO CART</Button>

            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <NewLetters/>
        <Footer/>

    </Container>
  )
}

export default Product