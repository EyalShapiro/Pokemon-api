import React from 'react';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BungalowIcon from '@mui/icons-material/Bungalow';
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';
import './styled-NavBrand.css';
import { NavBarLink } from '../../base/BtnNavBar.tsx';

const ico_style: object = { color: 'auto', margin: 'auto', fontSize: 24, position: 'relative' };


interface NavBarProps {}

export class NavBar extends React.Component<NavBarProps> {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <NavBarLink to="/" activeClassName="activeLink" text="Home" icon={<BungalowIcon sx={ico_style} />} />
          <NavBarLink to="/Search" activeClassName="activeLink" text="Search Pokemon playground" icon={<CatchingPokemonTwoToneIcon sx={ico_style} />} />
          <NavBarLink to="/MyTeam" activeClassName="activeLink" text="MyTeam" icon={<GroupsOutlinedIcon sx={ico_style} />} />
        </ul>
      </nav>
    );
  }
}
