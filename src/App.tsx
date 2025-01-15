import React from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/RootBar/root navbar";
import Home from "./pages/Home/Home";
import SearchPokeApp from "./Components/pokemon search/AppSearch";
import MyTeam from "./pages/Team Poke/Team";
import NotFoundPage from "./pages/NotFoundPage/NotFond";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
import PokemonTypeChartPage from "./pages/PokemonTypeChartPage";
import { Header } from "./Components/Header";

const App: React.FC<any> = () => {
  return (
    <div>
      <Header></Header>
      <Box>
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Search" element={<SearchPokeApp />} />
              <Route path="/MyTeam" element={<MyTeam />} />
              <Route path="/pokemon/:id" element={<PokemonDetails />} />
              <Route
                path="/Pokemon_Type_Chart/"
                element={<PokemonTypeChartPage />}
              />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </Box>
    </div>
  );
};

export default App;
