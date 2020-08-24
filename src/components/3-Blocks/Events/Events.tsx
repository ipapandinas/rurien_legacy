import React from 'react';
import { FluidObject } from 'gatsby-image';

import { Event } from '../../2-Molecules';

interface SingleEvent {
  cartel: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  detalle: string;
  fecha: string;
  id: number;
  titulo: string;
  ubicacion: string;
}

interface Props {
  events: Array<SingleEvent>;
  title?: string;
}

export default function Events({ events, title }: Props) {
  return (
    <div className="Events">
      {title && <h2 className="Events__title">{title}</h2>}
      <div className="Events__list">
        {events.map(
          ({
            cartel: image,
            detalle: description,
            fecha: date,
            id,
            titulo: title,
            ubicacion: location,
          }) => (
            <div key={id}>
              <Event
                date={date}
                description={description}
                image={image}
                location={location}
                title={title}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
