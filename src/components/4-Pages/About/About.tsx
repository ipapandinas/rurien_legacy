import React from 'react';

import { useDevice } from '../../../hooks';

import { Image } from '../../1-Atoms';

export default function About() {
  const { isMobile } = useDevice();

  return (
    <div className="About container fade-in">
      <div className="About__top">
        <Image
          className="About__topImage"
          alt="Profil image"
          filename="profil.png"
        />
        <span className="About__topText">
          Fuensanta
          {isMobile ? <br /> : ' '}
          R. Urien
          {isMobile ? <br /> : ' '}
          (Bilbao 1966)
        </span>
      </div>
      <div className="About__content">
        <p>
          Licenciada en Periodismo por la Facultad de Ciencias Sociales y de la
          Comunicación del Pais Vasco. Interesada por la fotografía colaboré con
          varios diarios de información. Me fui a vivir a Bayona, localidad del
          sur de Francia, donde realicé durante varios años diferentes cursos de
          artes plásticas en la Ecole Supérieure d’Art Pays Basque. Allí
          descubrí la belleza de la pintura al óleo. Actualmente curso el grado
          de Historia del Arte en la UNED. Miembro de la Asociación Española de
          Pintores y Escultores, de la Asociación Artística Vizcaína y del
          colectivo Entre 3.
        </p>
        <p>
          Recreo en mis obras lugares que me rodean, paisajes urbanos,marinos,
          naturales. Es importante encontrar y elegir el momento, ese instante
          que mis ojos ven, efímero, parado en el tiempo, atrapado entre
          pigmentos, quedará intacto, inolvidable. Crear un diálogo entre la
          obra y su espectador, la pintura y el observador, me fascina. Intento
          plasmar la realidad, mi realidad, sus colores, mis colores. Quizás, al
          final, lo que queda reflejado es mi interior. Eso sería fantastico!
          Así, al observar mi propia obra lograría conocerme un poco más...
        </p>
      </div>
      <div className="About__bottom">
        <div className="About__contact">
          <span className="Contact__label">Contacto:</span>
          <a
            className="Contact__mail"
            href="mailto:fuentxu64@gmail.com"
            title="Contacto"
          >
            fuentxu64@gmail.com
          </a>
        </div>
        <Image
          className="About__bottomImage"
          alt="Tools"
          filename="about.png"
        />
      </div>
    </div>
  );
}
