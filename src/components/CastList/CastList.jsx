
import PropTypes from 'prop-types';
import noimage from '../../images/noimage.jpg'
import {List, ListItem, Image,Title, Text,Thumb,StyledNavLink} from './CastList.styled'
export default function CastList({ cast }) {
       return (
        <List>
           {cast.map(({ id, name, character, profile_path }) => {
                console.log(profile_path)
               return (
                   <StyledNavLink to={`/actor/${id}`}>
                        <ListItem key={id}>
                       <Thumb>{profile_path === null
                            ? <Image src={noimage} alt="noimage"></Image>
                            : <Image src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name}></Image>}</Thumb> 
                        <Title>{name}</Title>
                        <Text>{character}</Text>
                    </ListItem>
                    </StyledNavLink>
                   
                )
            })}
       </List>
    )
}

CastList.propTypes = {
    cast: PropTypes.array,
}