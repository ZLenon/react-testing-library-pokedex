import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  it('O primeiro link deve possuir o texto Home;', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });
    expect(linkHome).toBeDefined();
  });
  it('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeDefined();
  });
  it('O terceiro link deve possuir o texto Favorite Pokémon', () => {
    renderWithRouter(<App />);
    const linkFavPokemons = screen.getByRole('link', { name: 'Favorite Pokémon' });
    expect(linkFavPokemons).toBeDefined();
  });
  it('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });
    expect(linkHome).toBeInTheDocument();

    userEvent.click(linkHome);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/');
  });
  it('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();

    userEvent.click(linkAbout);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/about');
  });
  it('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação;', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavPokemons = screen.getByRole('link', { name: 'Favorite Pokémon' });
    expect(linkFavPokemons).toBeInTheDocument();

    userEvent.click(linkFavPokemons);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/favorites');
  });
  it('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />);
    const { location: { pathname } } = history;
    expect(pathname).toEqual('/');

    act(() => {
      history.push('/Page-requested-not-found');
    });
    const notFound = screen.getByRole('heading', { name: 'Page requested not found' });
    expect(notFound).toBeDefined();
  });
});
