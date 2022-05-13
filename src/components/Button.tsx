import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  color?: string;
  textColor?: string;
};

const Button = ({ children, onClick, color, textColor }: Props) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: textColor,
        padding: '1rem',
        borderRadius: '1rem'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
