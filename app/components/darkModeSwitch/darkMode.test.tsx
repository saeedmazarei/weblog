import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DarkModeSwitch from './darkMode';

// Mock the useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the RootState
const initialState = {
  darkMode: {
    darkMode: false,
  },
} as RootState;

const mockStore = configureStore();
const store = mockStore(initialState);

describe('DarkModeSwitch Component', () => {
  it('renders dark mode switch correctly', () => {
    (useSelector as jest.Mock).mockImplementation((selector: (state: RootState) => any) => selector(initialState));

    const { getByLabelText } = render(
      <Provider store={store}>
        <DarkModeSwitch />
      </Provider>
    );

    const darkModeSwitch = getByLabelText('Dark Mode') as HTMLInputElement;

    expect(darkModeSwitch).toBeInTheDocument();
    expect(darkModeSwitch.checked).toBe(false);
  });

  it('dispatches toggleDarkMode action when checkbox is clicked', () => {
    const dispatchMock = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatchMock);
    (useSelector as jest.Mock).mockImplementation((selector: (state: RootState) => any) => selector(initialState));

    const { getByLabelText } = render(
      <Provider store={store}>
        <DarkModeSwitch />
      </Provider>
    );

    const darkModeSwitch = getByLabelText('Dark Mode') as HTMLInputElement;
    fireEvent.click(darkModeSwitch);

    expect(dispatchMock).toHaveBeenCalledWith(expect.any(Function)); // Assuming toggleDarkMode returns a function
  });

  // Add more test cases based on your component's behavior
});
