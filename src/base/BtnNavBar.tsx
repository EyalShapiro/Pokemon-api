import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBarLink = styled.li`
  float: left;
  font-family: 'Pokemon Solid', sans-serif;
  text-align: center;
  padding: 2px 8px;
  text-decoration: none;
  border: #4074b5 ridge 4px;
  margin-bottom: 0.5%;
  a {
  color: #4074b5;
  text-decoration: none;
}
`;

export function NavBarLink(props: NavLinkProps) {
  return (
    <StyledNavBarLink>
      <NavLink to={props.to}>
        {props.icon ? props.icon : ''}
        <>{props.text}</>
      </NavLink>
    </StyledNavBarLink>
  );
}
