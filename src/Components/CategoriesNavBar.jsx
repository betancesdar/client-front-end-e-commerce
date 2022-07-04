import styled from "styled-components"

const Container = styled.div`
    max-width: 1050px;
    width: 90%;
    margin: auto;
`
const CheckBox = styled.CheckBox`

`
const HamburgerLines = styled.div`

`
const HamburLine1 = styled.div`


`
const HamburLine2 = styled.div`


`
const HamburLine3 = styled.div`


`




const CategoriesNavBar = () => {
  return (
    <Container>
        <CheckBox/>
            <HamburgerLines>
                <HamburLine1/>
                <HamburLine2/>
                <HamburLine3/>

            </HamburgerLines>

    </Container>
  )
}

export default CategoriesNavBar