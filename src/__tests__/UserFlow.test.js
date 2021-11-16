import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as redux from 'react-redux';
import App from '../container/App';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test user flow', () => {
  const useSelectorMock = redux.useSelector;
  const useDispatchMock = redux.useDispatch;
  const mockStore = {
    coinsReducer: {
      initialList: [
        {
          name: 'test_coin_a',
          symbol: 'TTCA',
          price: '9.2163',
          hTwentyFour: '9.7363',
          lTwentyFour: '9.1461',
          dTwentyFour: '-1.0384',
          image: '../assets/Cjdowner-Cryptocurrency-Litecoin.svg',
        },
        {
          name: 'test_coin_b',
          symbol: 'TTCB',
          price: '9.2163',
          hTwentyFour: '9.7363',
          lTwentyFour: '9.1461',
          dTwentyFour: '-1.0384',
          image: '../assets/Cjdowner-Cryptocurrency-Litecoin.svg',
        },
      ],
      filteredList: [
        {
          name: 'test_coin_a',
          symbol: 'TTCA',
          price: '9.2163',
          hTwentyFour: '9.73634',
          lTwentyFour: '9.14613',
          dTwentyFour: '-1.03842',
          image: '../assets/Cjdowner-Cryptocurrency-Litecoin.svg',
        },
        {
          name: 'test_coin_b',
          symbol: 'TTCB',
          price: '9.2165',
          hTwentyFour: '9.7363',
          lTwentyFour: '9.1461',
          dTwentyFour: '-1.0384',
          image: '../assets/Cjdowner-Cryptocurrency-Litecoin.svg',
        },
      ],
    },
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    render(<App />);
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });
  test('If component rendered correctly', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('test_coin_a')).toBeInTheDocument();
  });
  test('If price is properly displayed', () => {
    expect(screen.getByText(/9.2163/)).toBeInTheDocument();
  });
  test('If input is on the page', () => {
    expect(screen.getByPlaceholderText('Type here to filter')).toBeInTheDocument();
  });
  test('If the user can navigate to detail', () => {
    const coin = screen.getByText('test_coin_a');
    fireEvent.click(coin);
    expect(screen.getByText(/24h Low/)).toBeInTheDocument();
    expect(screen.getByText(/24h High/)).toBeInTheDocument();
    expect(screen.getByText(/24h Delta/)).toBeInTheDocument();
  });
  test('If the user can click on the arrow to move back to home', () => {
    const backArrow = screen.getByTestId('back-arrow');
    fireEvent.click(backArrow);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
