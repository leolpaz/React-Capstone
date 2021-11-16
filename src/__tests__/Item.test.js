import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Item from '../components/Item';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('Rendering of Item component', () => {
  renderWithRouter(<Item name="test-coin" symbol="TTC" price="0.21" image="random" />);
  test('if the page rendered with the correct elements', () => {
    expect(screen.getByText(/0.21/)).toBeInTheDocument();
    expect(screen.getByText('test-coin')).toBeInTheDocument();
  });
});
