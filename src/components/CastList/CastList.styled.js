import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 10px;
list-style: none;
margin:0;
margin-top: 15px;
padding:0;
`

export const ListItem = styled.li`
width: calc((100% - 50px) / 6);
text-align: center;
`

export const Image = styled.img`
display: block;
width: 100%;
height: 314px;
object-fit: cover;
`

export const Title = styled.h2`
margin: 5px 0;
`

export const Text = styled.p`
margin: 0;
`
export const Thumb = styled.div`
width: 100%;
`