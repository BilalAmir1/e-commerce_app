import styled from 'styled-components'

const Container = styled.div`
  color: white;
  height: 30px;
  background-color: teal;
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 500;
  fontSize: 14px
`;
export const Announcements = () => {
  return (
    <Container>
    Super Deal! Free Shipping 30% OFF
    </Container>
  )
}
