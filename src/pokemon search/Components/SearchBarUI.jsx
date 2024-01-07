import React, { useState } from "react";
import { useHistory } from "react-router";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { allPokemonNames } from "";
import TextField from "@material-ui/core/TextField";

const SearchBarUI = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        history.push(`/pokemon/${name}`);
      }}
      style={{
        display: "flex",
        justifyContent: " space-around",
        paddingBottom: "20px",
      }}
    >
      <Autocomplete
        id="pokemon-names"
        options={allPokemonNames}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        disableOpenOnFocus={true}
        onInputChange={(e, value) => setName(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Search..."
            fullWidth
          />
        )}
      />
    </form>
  );
};

export default SearchBarUI;
