import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: black;
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`;
const Input = styled.input`
border: none;
`;


const Right = styled.div`
  flex:1;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-Left: 25px;
`;

const Center = styled.div`
  flex:1;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;
const Navbar = () => {
  return (
    <div className='Container'>
    <Container>
    <Wrapper>
    <Left>
    <Language>ENG</Language>
    <SearchContainer>
       <Input/>
       <Search style={{color:"gray",fontSize:16}}/>
    </SearchContainer>
    </Left>
    <Center><Logo>CAKELY.</Logo></Center>
    <Right>
    <MenuItem>REGISTER</MenuItem>
    <MenuItem>SIGN IN</MenuItem>
      <MenuItem>
      <Badge color="primary" badgeContent={4}>
        <ShoppingCartOutlined />
      </Badge>
      </MenuItem>
    </Right>
    </Wrapper>
    </Container>
    </div>
  )
}

export default Navbar