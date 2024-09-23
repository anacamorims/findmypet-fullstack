import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import "./SecondSection.css"
import pet1 from "../assets/pet1.jpg"
import pet2 from "../assets/pet2.jpg"
import pet3 from "../assets/pet3.jpg"
import pet4 from "../assets/pet4.jpg"

import { Autoplay, Navigation, Pagination } from "swiper/modules"

const petsFound = [
  { id: 1, name: "Luna", img: pet1 },
  { id: 2, name: "Max", img: pet2 },
  { id: 3, name: "Bella", img: pet3 },
  { id: 4, name: "Charlie", img: pet4 },
]

const SecondSection = () => {
  return (
    <section className="slider-section">
      <div className="slider-container">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {petsFound.map((pet) => (
            <SwiperSlide key={pet.id}>
              <div className="pet-card">
                <h2 className="slider-title">Pets Encontrados</h2>
                <img src={pet.img} alt={pet.name} className="pet-image" />
                <p className="pet-name">{pet.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className="slider-description">
      Os animais de estimação não são apenas companheiros; eles se tornam parte da nossa família, trazendo alegria, amor e momentos inesquecíveis. O vínculo que construímos com nossos pets é profundo e especial, repleto de afeto e lealdade. Quando um animal desaparece, a dor que sentimos vai além da saudade; é um vazio que toca nosso coração e nos faz sentir perdidos.

      É aqui que a Find My Pet se torna vital. Ao conectar pessoas que buscam seus animais de estimação com aqueles que encontraram, estamos criando uma rede de esperança e solidariedade. Cada busca é uma chance de reunir laços quebrados e restabelecer a felicidade que a presença de um animal traz.

      Nunca subestime o poder do amor que compartilhamos com nossos pets. Juntos, podemos transformar a saudade em reencontro, e a tristeza em alegria.    
      </p>
    </section>
  )
}

export default SecondSection
