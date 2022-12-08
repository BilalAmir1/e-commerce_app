import { categories } from '../data';
import styled from 'styled-components'
import { CategoryItem } from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
`;


export const Categories = () => {
  return (
    <Container>
      {categories.map(
        item=>(<CategoryItem item = {item}/>)
      )}
    </Container>
  )
}
