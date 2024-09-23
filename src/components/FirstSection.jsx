import { useState } from "react"
import axios from "axios"
import { CircularProgress } from "@mui/material"
import "./FirstSection.css"
import img01 from "../assets/img-01.svg"

const FisrtSection = () => {
  const [lostPets, setLostPets] = useState([])
  const [foundPets, setFoundPets] = useState([])
  const [showLostPets, setShowLostPets] = useState(false)
  const [showFoundPets, setShowFoundPets] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchLostPets = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get(
        "https://findmypet-api.onrender.com/animais/perdidos"
      )
      console.log("Dados recebidos da API (perdidos):", response.data)
      if (response.data && Array.isArray(response.data.pet)) {
        setLostPets(response.data.pet)
      } else {
        setError("A resposta da API não contém um array de pets perdidos.")
      }
    } catch (error) {
      setError("Erro ao buscar pets perdidos")
      console.error("Erro ao buscar pets perdidos:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchFoundPets = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get(
        "https://findmypet-api.onrender.com/animais/encontrados"
      )
      console.log("Dados recebidos da API (encontrados):", response.data)
      if (response.data && Array.isArray(response.data.pet)) {
        setFoundPets(response.data.pet)
      } else {
        setError("A resposta da API não contém um array de pets encontrados.")
      }
    } catch (error) {
      setError("Erro ao buscar pets encontrados")
      console.error("Erro ao buscar pets encontrados:", error)
    } finally {
      setLoading(false)
    }
  };

  const showLost = () => {
    fetchLostPets()
    setShowLostPets(true)
    setShowFoundPets(false)
  };

  const showFound = () => {
    fetchFoundPets()
    setShowFoundPets(true)
    setShowLostPets(false)
  };

  return (
    <section className="section-container">
      <div className="text-content">
        <h1 className="title">Encontre seu pet perdido</h1>
        <p className="description">
        Navegue por nossa lista de animais perdidos e encontrados e ajude a trazer seu amigo de volta para casa.
        </p>
        <div className="button-container">
          <button className="btn lost-pet" onClick={showLost}>
            Pets perdidos
          </button>
          <button className="btn found-pet" onClick={showFound}>
            Pets encontrados
          </button>
        </div>
      </div>
      <div className="image-content">
        <img src={img01} alt="Imagem descritiva" className="image" />
      </div>

      {loading && <CircularProgress />}
      {error && <p>{error}</p>}

      {showLostPets && !loading && (
        <div className="lost-pets-list">
          <h2>Pets perdidos</h2>
          {lostPets.length > 0 ? (
            <ul>
              {lostPets.map((pet) => (
                <li key={pet._id}>
                  <strong>Nome:</strong> {pet.name}
                  <br />
                  <strong>Espécie:</strong> {pet.specie}
                  <br />
                  <strong>Raça:</strong> {pet.breed}
                  <br />
                  <strong>Cor:</strong> {pet.color}
                  <br />
                  <strong>Status:</strong> {pet.status}
                  <br />
                  <strong>Descrição:</strong> {pet.description}
                  <br />
                  <strong>Contato do proprietário:</strong> {pet.ownerContact}
                  <br />
                  <img
                    src={pet.photoURL}
                    alt={pet.name}
                    style={{ width: "100px", height: "100px", borderRadius: "20%" }}
                    onError={(e) => {
                      e.target.src = "link-da-imagem-padrao.jpg"
                    }}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum pet perdido encontrado.</p>
          )}
        </div>
      )}

      {showFoundPets && !loading && (
        <div className="found-pets-list">
          <h2>Pets encontrados</h2>
          {foundPets.length > 0 ? (
            <ul>
              {foundPets.map((pet) => (
                <li key={pet._id}>
                  <strong>Nome:</strong> {pet.name}
                  <br />
                  <strong>Espécie:</strong> {pet.specie}
                  <br />
                  <strong>Raça:</strong> {pet.breed}
                  <br />
                  <strong>Cor:</strong> {pet.color}
                  <br />
                  <strong>Status:</strong> {pet.status}
                  <br />
                  <strong>Descrição:</strong> {pet.description}
                  <br />
                  <strong>Contato do proprietário:</strong> {pet.ownerContact}
                  <br />
                  <img
                    src={pet.photoURL}
                    alt={pet.name}
                    style={{ width: "100px", height: "100px", borderRadius: "20%" }}
                    onError={(e) => {
                      e.target.src = "link-da-imagem-padrao.jpg"
                    }}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum pet encontrado.</p>
          )}
        </div>
      )}
    </section>
  )
}

export default FisrtSection
