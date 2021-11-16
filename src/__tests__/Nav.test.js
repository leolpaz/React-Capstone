import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('Rendering of Nav component', () => {
  test('if the page displays Home on the default /path', () => {
    renderWithRouter(<Nav />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
  test('if the page displays path on a differed /path', () => {
    renderWithRouter(<Nav />, { route: '/Test' });
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
