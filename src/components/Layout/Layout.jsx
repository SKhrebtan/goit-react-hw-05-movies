import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Nav, List, Listitem } from './Layout.styled';
import styled from "styled-components";;

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 20px 0px;
  color: white;
  
  &.active {
    color: orange;
  }
  & a:hover{
   color: orange;
  }
`;

const Layout = () => {
    return (
        <div>
            <header>
                 <Nav> 
            <List>
                <Listitem><StyledLink to="/">Home</StyledLink></Listitem>
                <Listitem><StyledLink to="/movies">Movies</StyledLink></Listitem>
            </List>
            </Nav>  
            </header>
            
            <main>
                <Suspense fallback="Loading">
                    <Outlet />
                </Suspense>
            </main>
            <footer></footer>
            
        </div>
       
    )
}

export default Layout;