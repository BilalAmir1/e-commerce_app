import { Announcements } from '../components/Announcements';
import styled from 'styled-components'
import Navbar from "../components/Navbar";
import { Products } from '../components/Products';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

const Container = styled.div`
  color: black;
  height: 60px;
`;
const Title = styled.h1`
  margin: 20px;
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
  margin-right: 20px;
`;
const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
`;
const Option = styled.option`
`;

export const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
              <FilterText>Filter Products</FilterText>
              <Select>
              <Option disabled selected>Numbers</Option>
                <Option>1</Option>
                <Option>2</Option>
                <Option>3</Option>
                <Option>4</Option>
                <Option>5</Option>
              </Select>
              <Select>
              <Option disabled selected>Size</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterText>Sort Products</FilterText>
              <Select>
              <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (Desc)</Option>
              </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
