import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Img, { FluidObject } from 'gatsby-image';

interface Props {
  current: boolean;
  date: string;
  description: string;
  image: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  location: string;
  title: string;
}

export default function Event({
  current,
  date,
  description,
  image,
  location,
  title,
}: Props) {
  return (
    <div className={classnames('Event', { ['Event--current']: current })}>
      <div className="Event__content">
        {title && <div className="Event__title">{title}</div>}
        {description && <div className="Event__description">{description}</div>}
        <div className="Event__contentBottom">
          {date && (
            <div className="Event__iconLabel">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <div
                className={classnames('Event__date', {
                  ['Event__date--current']: current,
                })}
              >
                {date}
              </div>
            </div>
          )}
          {location && (
            <div className="Event__iconLabel">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div className="Event__location">{location}</div>
            </div>
          )}
        </div>
      </div>
      {image && (
        <Img
          className="Event__image"
          alt={title}
          fluid={image.childImageSharp.fluid}
        />
      )}
    </div>
  );
}
