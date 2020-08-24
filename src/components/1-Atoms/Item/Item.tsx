import React from 'react';
import classnames from 'classnames';

import Image from '../Image/Image';

interface Props {
  alt: string;
  className?: string;
  filename: string;
}

export default function Item({ alt, className, filename }: Props) {
  return (
    <div className={classnames('Item', className)}>
      <div className="Image__wrapper">
        <Image className="Image__gatsby" alt={alt} filename={filename} />
      </div>
    </div>
  );
}
