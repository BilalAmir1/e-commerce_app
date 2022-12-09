import { Send } from "@material-ui/icons";
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 45vh;
  background-color: #fcf5f5;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
`;

const Desc = styled.div`
  font-size: 23px;
  margin: 20px;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  height: 40px;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  color: white;
  background-color: teal;
  cursor: pointer;
`;

export const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Get Weekly Updates from your Favourite Products.</Desc>
        <InputContainer>
            <Input placeholder="Your E-mail"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

