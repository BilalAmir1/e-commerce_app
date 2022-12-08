import styled from 'styled-components'
import Navbar from "../components/Navbar";
import { Announcements } from '../components/Announcements';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`
  
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex:1;
`;
const Image = styled.img`
  width:100%;
  height:90vh;
  object-fit:cover;
`;
const InfoContainer = styled.div`
  flex:1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight:200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight:100;
  font-size:40px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  width: 50%;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option`
  
`;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  font-weight:700;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Amount = styled.span`
  width:30px;
  height:30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  Padding: 15px;
  background-color: white;
  font-weight: 500;
  border: 2px solid black;
  cursor: pointer;
  
  &:hover{
    background-color: gray;
  }
`;


const FilterTitle = styled.span`
  font-weight:100;
  font-size:20px;
`;
const FilterColor = styled.div`
  width:20px;
  height:20px;
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
  background-color: ${ (props)=> props.color};
`;




export const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Blue Jeans</Title>
                <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Desc>
                <Price>$10.99</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="blue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/> 
                  </AmountContainer>
                  <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
