import * as React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLElement> {
  icon: React.ElementType;
  label: string;
  type?: 'submit' | 'reset' | 'button';
}

const Base = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: var(--gradient-softred-pink);
  padding: 19px 32px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  outline: 2px solid transparent;
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    filter: brightness(0.8);
  }
  :focus-visible {
    outline-color: var(--desaturated-red);
    outline-offset: 4px;
  }
`;

const IconButton = ({ icon, label, ...args }: Props) => {
  const Icon: React.ElementType = icon;
  return (
    <Base aria-label={label} {...args}>
      <Icon title={'right arrow'} />
    </Base>
  );
};

export default IconButton;
