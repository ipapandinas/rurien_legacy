import React from 'react';

import { List } from '../../2-Molecules';

interface SingleList {
  list: string;
  title: string;
}

interface Props {
  lists: Array<SingleList>;
  title?: string;
}

export default function Event({ lists, title }: Props) {
  return (
    <div className="Lists">
      {title && <h2 className="Lists__title">{title}</h2>}
      <div className="Lists__lists">
        {lists.map(({ list, title }, idx) => (
          <div key={idx}>
            <List list={list} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
}
