import React from 'react';

type Props = {
  animal: string;
};

const Animal = ({ animal }: Props) => {
  return <div className='card center'>{animal}</div>;
};

export default Animal;
