import styled from 'styled-components';

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
  height: 460px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
     transform: scale(1.03);
 
  }
  `

export const Title = styled.h2`
    margin: 0;
  
    width: 100%;
`

export const Text = styled.p`
   margin: 0;
`