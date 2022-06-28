import styled from "styled-components"

const Container = styled.div`
    flex:1;
    margin: 3px;
    height:70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height:100%;
    object-fit: cover; 
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(204,153,0,0.5);
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    margin-bottom: 20px;
    font-weight: 500;
    color: white;
`

const Button = styled.button`
    display: flex;
    border: none;
    padding: 10px;
    font-size: 20px;
    background-color: #cc9900;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: transparent;
        transition: all 0.5s ease;
        color: black;
        border-radius: 100%;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>View Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
