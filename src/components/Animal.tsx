import React from 'react';

type Props = {
  animal: string;
};

const Animal = ({ animal }: Props) => {
  return <div>{animal}</div>;
};

export default Animal;
