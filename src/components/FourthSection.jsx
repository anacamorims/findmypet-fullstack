import "./FourthSection.css"
import img02 from "../assets/img-02.svg"

const FourthSection = () => {
  return (
    <div className="fourth-section" id="conheca">
      <p className="text-section">
      A jornada de procurar um animal perdido é um lembrete poderoso da conexão que compartilhamos com nossos amigos de quatro patas. Eles nos ensinam sobre o amor incondicional, a empatia e a alegria nas pequenas coisas. Quando um pet desaparece, não estamos apenas enfrentando a ausência física dele; estamos lidando com a perda de um amor verdadeiro, que preenche nossos dias com sorrisos e conforto.
      </p>

      <img src={img02} alt="Cachorro" className="dog-svg" />
    </div>
  )
}

export default FourthSection
