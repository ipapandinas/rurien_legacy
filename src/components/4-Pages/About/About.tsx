import React from 'react';
import ReactMarkdown from 'react-markdown';

import { useDevice } from '../../../hooks';
import { useAboutQuery } from '../../../queries';

import { Image } from '../../1-Atoms';

export default function About() {
  const { isMobile } = useDevice();
  const about = useAboutQuery();

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
        <ReactMarkdown source={about.texto} />
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
