import React from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./Components/RootBar/root navbar";
import Home from "./pages/Home/Home";
import SearchPokeApp from "./Components/pokemon search/AppSearch";
import MyTeam from "./pages/Team Poke/Team";
import NotFoundPage from "./pages/NotFoundPage/NotFond";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
import barIco from '../assets/start.png';


const App: React.FC<any> = () => {
  return (
    <div id='main-header'>
      {/* move this to component */}
      <h1 className='header'> Pokémon</h1>
      <img style={{ padding: 0, margin: 0 }} src={barIco} width='3%' alt="logo" />
      <Box>
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Search" element={<SearchPokeApp />} />
              <Route path="/MyTeam" element={<MyTeam />} />
              <Route path="/pokemon/:id" element={<PokemonDetails />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </Box>
    </div>
  );
}

export default App;
