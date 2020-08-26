import React from 'react';

import { useDevice } from '../../../hooks';
import { Item } from '../../1-Atoms';

export default function Home() {
  const { isMobile } = useDevice();

  if (isMobile) {
    return (
      <div className="Home fade-in">
        <div className="Home__infinite">
          <div className="Home__line">
            <Item className="mobile" alt="monos" filename="artxaH150.jpeg" />
          </div>
        </div>

        <div className="Home__slogan">
          <span className="Slogan">Entre pinceles mi mente descansa...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="Home fade-in">
      <div className="Home__infinite">
        <div className="Home__line">
          <Item className="first" alt="sinFirma" filename="sinFirma.jpg" />
          <Item className="first" alt="rojo" filename="rojo.jpg" />
          <Item className="first" alt="paraTelmo" filename="paraTelmo.jpg" />
          <Item className="first" alt="faro" filename="faro.jpg" />
          <Item className="first" alt="espacio" filename="espacio.jpg" />
          <Item className="first" alt="azul" filename="azul.jpg" />
          <Item className="first" alt="sinFirma" filename="sinFirma.jpg" />
          <Item className="first" alt="rojo" filename="rojo.jpg" />
          <Item className="first" alt="paraTelmo" filename="paraTelmo.jpg" />
        </div>

        <div className="Home__line">
          <Item className="second" alt="baldosa" filename="baldosa.jpg" />
          <Item className="second" alt="ellas" filename="ellas.jpg" />
          <Item className="second" alt="inthesea" filename="intheseaVIII.png" />
          <Item className="second" alt="girl" filename="girl.jpg" />
          <Item className="second" alt="imaginaMar" filename="imaginaMar.jpg" />
          <Item className="second" alt="telmo" filename="telmo.png" />
          <Item className="second" alt="puerto" filename="puerto.jpg" />
          <Item className="second" alt="urbano" filename="urbano.jpg" />
          <Item className="second" alt="baldosa" filename="baldosa.jpg" />
          <Item className="second" alt="ellas" filename="ellas.jpg" />
          <Item className="second" alt="inthesea" filename="intheseaVIII.png" />
          <Item className="second" alt="girl" filename="girl.jpg" />
        </div>

        <div className="Home__line">
          <Item className="third" alt="bosques" filename="bosques.png" />
          <Item className="third" alt="cielo" filename="cielo.jpg" />
          <Item className="third" alt="cote" filename="cote.png" />
          <Item className="third" alt="galerna" filename="galerna.jpg" />
          <Item className="third" alt="lluvia" filename="lluvia.png" />
          <Item className="third" alt="noviembre" filename="noviembre.jpg" />
          <Item className="third" alt="nubes" filename="nubes.jpg" />
          <Item className="third" alt="paraguas" filename="paraguas.jpeg" />
          <Item className="third" alt="reflejos" filename="reflejos.jpg" />
          <Item className="third" alt="sonar" filename="sonar.png" />
          <Item className="third" alt="bosques" filename="bosques.png" />
          <Item className="third" alt="cielo" filename="cielo.jpg" />
          <Item className="third" alt="cote" filename="cote.png" />
          <Item className="third" alt="galerna" filename="galerna.jpg" />
          <Item className="third" alt="lluvia" filename="lluvia.png" />
        </div>
      </div>

      <div className="Home__slogan">
        <span className="Slogan">Entre pinceles mi mente descansa...</span>
      </div>
    </div>
  );
}
