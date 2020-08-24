import React from 'react';

import { useExposQuery } from '../../../queries';

import { Events, Lists } from '../../3-Blocks';

export default function Exhibitions() {
  const { collectivas, individuales, principales } = useExposQuery();

  const lists = [
    { list: individuales, title: 'Individuales' },
    { list: collectivas, title: 'Collectivas' },
  ];

  return (
    <div className="Exhibitions fade-in">
      <div className="Exhibitions__content container">
        <Events events={principales} title="Mis ultimas expocisiones" />
        <Lists lists={lists} title="Todas mis expocisiones" />
      </div>
    </div>
  );
}
