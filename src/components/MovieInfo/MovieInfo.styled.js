import styled from 'styled-components';

export const Wrapper = styled.div`

 display: flex;
  gap: 30px;
  flex-direction: column;

@media screen and (min-width: 666px){
    flex-direction: row;}
`

export const Thumb = styled.div`
flex-shrink: 0;
@media screen and (min-width: 666px){
height:375px;
width: 250px; 
}


`

export const InfoContainer = styled.div`
max-width: 480px;
`

export const Title = styled.h2`
margin: 0;
`
export const InfoText = styled.p`
font-style: italic;
`

export const Image = styled.img`
display: block;
object-fit: cover;
width:100%;
`

export const InfoTextTitle = styled.h3`
`