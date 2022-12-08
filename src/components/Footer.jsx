import styled from 'styled-components'
import { Facebook, Instagram, MailOutline, Pinterest, Room, Twitter, Phone } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  padding: 20px;
`;
const Logo = styled.h1`
  
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width:40px;
  height:40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: white;
  background-color: #${props=>props.color};
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>CAKELY.</Logo>
            <Desc>IT's All ABout Fashion.</Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="e60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room/>8483 Aspen Drive Columbus, GA 31904</ContactItem>
            <ContactItem><Phone/>202-555-0166</ContactItem>
            <ContactItem><MailOutline/>Contact@CAKELY.dev</ContactItem>
        </Right>
    </Container>
  )
}
