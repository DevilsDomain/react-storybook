import styled, { css } from 'styled-components';
import React from 'react';

const StyledHeader = styled.h1`
  font-size: ${({ size }) => `${size * 1.5}rem`};
  font-family: ${({ font }) => (font === 'Helvetica' ? 'Helvetica, sans-serif' : 'Avenir, sans-serif')};
  font-weight: bold;
`;

export function Header({ size = 1, font = 'Helvetica', children }) {
  const Tag = `h${size}`;
  return (
    <Tag>
      <StyledHeader size={size} font={font}>{children}</StyledHeader>
    </Tag>
  );
}
