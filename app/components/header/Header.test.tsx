import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Header from './header';

describe('Header Component', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/overreacted/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders with custom style', () => {
    const customStyle = { color: 'red' };
    const { getByText } = render(<Header style={customStyle} />);
    const linkElement = getByText(/overreacted/i);
    expect(linkElement).toHaveStyle(customStyle);
  });
});
