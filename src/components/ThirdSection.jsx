import { Component } from "react"
import axios from "axios"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import "./ThirdSection.css"

class ThirdSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specie: "",
      breed: "",
      color: "",
      results: [],
      error: false,
      errorMessage: "",
      noResults: false,
    }
  }

  handleSearch = async (e) => {
    e.preventDefault()

    if (!this.state.specie && !this.state.breed && !this.state.color) {
      this.setState({
        error: true,
        errorMessage: "Preencha pelo menos um campo para a busca",
      })
      return
    }

    try {
      const response = await axios.get(
        `https://findmypet-api.onrender.com/animais`,
        {
          params: {
            specie: this.state.specie,
            breed: this.state.breed,
            color: this.state.color,
          },
        }
      )

      if (response.data.length === 0) {
        this.setState({
          noResults: true,
          results: [],
          error: false,
          errorMessage: "",
        })
      } else {
        this.setState({
          results: response.data,
          noResults: false,
          error: false,
          errorMessage: "",
        })
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        this.setState({
          error: true,
          errorMessage: "Nenhum pet encontrado para essa busca",
        })
      } else {
        console.error("Erro ao buscar pets", error);
        this.setState({
          error: true,
          errorMessage: "Ocorreu um erro ao buscar os pets. Tente novamente",
        })
      }
    }
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: false,
      errorMessage: "",
      noResults: false,
    })
  }

  render() {
    const { specie, breed, color, results, error, errorMessage, noResults } =
      this.state

    return (
      <div className="pet-search">
        <form onSubmit={this.handleSearch}>
          <h3 className="title-search">Busca por pet</h3>

          <div className="input-button" id="search-form">
            <FormControl fullWidth margin="normal">
              <InputLabel id="specie-label">Espécie</InputLabel>
              <Select
                labelId="specie-label"
                name="specie"
                value={specie}
                onChange={this.handleInputChange}
                label="Espécie"
              >
                <MenuItem value="">
                  <em>Nenhum</em>
                </MenuItem>
                <MenuItem value="Cachorro">Cachorro</MenuItem>
                <MenuItem value="Gato">Gato</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Raça"
              variant="outlined"
              name="breed"
              value={breed}
              onChange={this.handleInputChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Cor"
              variant="outlined"
              name="color"
              value={color}
              onChange={this.handleInputChange}
              fullWidth
              margin="normal"
              error={error}
              helperText={error ? errorMessage : ""}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "16px" }}
            >
              Buscar
            </Button>
          </div>
        </form>

        <div>
          {noResults ? (
            <p>Nenhum pet encontrado</p>
          ) : (
            results.length > 0 && (
              <ul>
                {results.map((pet) => (
                  <li key={pet._id}>
                    <p>Nome: {pet.name}</p>
                    <p>Espécie: {pet.specie}</p>
                    <p>Raça: {pet.breed}</p>
                    <p>Cor: {pet.color}</p>
                  </li>
                ))}
              </ul>
            )
          )}
          {error && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    )
  }
}

export default ThirdSection
