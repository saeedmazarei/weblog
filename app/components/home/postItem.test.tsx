import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import PostItem from './postItem';

// Mocking the generateDate function
jest.mock('../../helper/functions', () => ({
  generateDate: jest.fn(() => 'Mocked Date'),
}));

describe('PostItem Component', () => {
  const mockPost = {
    userId: 1,
    id: 1,
    title: 'Test Title',
    body: 'Test Body',
  };

  it('renders post item correctly', () => {
    const { getByText } = render(<PostItem post={mockPost} />);

    const titleElement = getByText(/Test Title/i);
    const dateElement = getByText(/Mocked Date/i);
    const bodyElement = getByText(/Test Body/i);

    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
  });

  it('truncates long body text', () => {
    const longPost = {
      userId: 2,
      id: 2,
      title: 'Long Title',
      body: 'This is a very long body text that should be truncated.',
    };

    const { getByText } = render(<PostItem post={longPost} />);

    const truncatedBodyElement = getByText('Test Body');
    const originalBodyElement = getByText('Test Body');

    expect(truncatedBodyElement).toBeInTheDocument();
    expect(originalBodyElement).not.toBeInTheDocument();
  });
});
