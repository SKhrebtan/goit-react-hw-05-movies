import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
@media screen and (max-width:400px){
max-width: 300px; 
}
@media screen and (min-width:401px) and (max-width: 766px){
width: 400px; 
}

   @media screen and (min-width:767px){
  width: calc((100% - 30px) / 2);
 } 
  @media screen and (min-width:1111px){
  width: calc((100% - 60px) / 4);
 } 
  cursor:pointer;
  text-decoration: none;
  color: black;
  text-align: center;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    &:hover {
     transform: scale(1.03);
   }
  &:hover,
  :focus {
    color:orange;
    border-color: orange;
  }
  
`
export const List = styled.ul`
 list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right:20px;
  margin-left: auto;
  margin-right: auto;
  `

export const ListItem = styled.li`
 width: 100%;
 
`

export const Thumb = styled.div`
width: 100%
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  `

export const Title = styled.h2`
    margin: 0;
  
    width: 100%;
`

export const Text = styled.p`
   margin: 0;
`