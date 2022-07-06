import styled from "styled-components"
import Navbar from "../Components/Navbar"
import Ads from "../Components/Ads"
import Products from "../Components/Products"
import NewLetters from "../Components/NewLetters"
import Footer from "../Components/Footer"

const Container = styled.div`

`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;

`;
const Title = styled.h1`
    margin: 20px;
`;

const Select = styled.select`
    padding: 15px;
    margin: 5px;
`;

const Option = styled.option`

`;
const ProductsList = () => {
  return (
    <Container>
      <Ads/>
      <Navbar/>
      <Title>Productos</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Categories:</FilterText>
                <Select>
                    <Option disable selected>
                        Select a Category
                    </Option>
                    <Option>Computers</Option>
                    <Option>Office Supplies</Option>
                    <Option>Computers Accesories</Option>
                    <Option>Point of Sales Supplies</Option>
                </Select>
        </Filter>
        <Filter>
            <FilterText>Sorting By:</FilterText>
            <Select>
                    <Option>Min to Max Price</Option>
                    <Option>Max to Min price</Option>
                    <Option>Name A-Z</Option>
                    <Option>Most sold</Option>
                </Select>
        </Filter>
        <Filter>
            <FilterText>Show:

            <Select>
                    <Option>6</Option>
                    <Option>12</Option>
                    <Option>24</Option>
                </Select>
                per page
            </FilterText>
        
        </Filter>
      </FilterContainer>
      <Products/>
      <NewLetters/>
      <Footer/>
    </Container>
  )
}

export default ProductsList
