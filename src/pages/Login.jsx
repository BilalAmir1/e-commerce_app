import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), 
  url("https://images.pexels.com/photos/1124092/pexels-photo-1124092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
  display: flex;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin:10px 0px;
  padding: 10px;

`;
const Agreement = styled.span`
  font-size: 23px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 15px 20px;
`;
const Link = styled.a`
  margin:5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Login = () => {
  return (
    <Container>
      <Wrapper>
            <Title>SIGN IN</Title>
            <Form> 
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <Button>Login</Button>
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT?</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}
