import styled, { css } from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
  padding: ${props => props.size === 'small' ? '5px 10px' : '10px 20px'};
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${props =>
    props.type === 'primary' &&
    css`
      background-color: #b8e5d0;
      color: #fff;

      &:hover {
        background-color: #a1d5ba;
      }
    `}

  ${props =>
    props.type === 'secondary' &&
    css`
      background-color: transparent;
      border: 1px solid #b8e5d0;
      color: #b8e5d0;

      &:hover {
        border-color: #a1d5ba;
      }
    `}
`;

export function Button({ type, size }) {
  return (
    <div>
      <StyledButton type={type} size={size}>Button</StyledButton>
    </div>
  );
}
