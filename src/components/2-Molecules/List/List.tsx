import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  list: string;
  title: string;
}

export default function Event({ list, title }: Props) {
  return (
    <div className="List">
      <h3 className="List__title">{title}</h3>
      <ReactMarkdown className="List__list" source={list} />
    </div>
  );
}
