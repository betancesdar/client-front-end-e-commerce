  import styled from "styled-components";
  import { Facebook, Instagram, WhatsApp,MailOutline,Room,Phone,Twitter } from "@mui/icons-material";
  
  const Container = styled.div`
    display: flex;
    background-color: #2FBEEF;
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
    color: white;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;

  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    color: white;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        color: black;
        transform: scale(1.05);
    }

  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color:white;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>WilmaDev</Logo>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi modi veritatis non 
            iusto similique sint fugiat nam enim officia aliquam illo autem impedit, accusantium 
            eveniet hic architecto eaque nulla quisquam?
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="339933">
              <WhatsApp />
            </SocialIcon>
            <SocialIcon  color= "4a9eff">
                <Twitter/>
            </SocialIcon>
           </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>Contact Us</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms And Warranties</ListItem>
            <ListItem>Blog</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px",color:"black"}}/> Ave.Bartolome Colón #54,  Santiago de los Caballeros, Rep.Dom
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px",color:"black"}}/> 1-829-962-5015
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px",color:"black"}} /> Wilkin_ramirez@hotmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;