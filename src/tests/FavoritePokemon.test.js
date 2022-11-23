import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import FavoritePokemon from '../pages/FavoritePokemon';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente FavoritePokemon', () => {
  it('Testa se exibe na tela a mensagem "No favorite pokemon found", caso a pessoa não tenha Pokémon favoritos', () => {
    render(<FavoritePokemon />);

    const notPokemonsFav = screen.getByText('No favorite Pokémon found');
    expect(notPokemonsFav).toHaveTextContent('No favorite Pokémon found');
  });
  it('Teste se são exibidos todos os cards de Pokémon favoritados', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);// ver mais detalhes do pokemon

    const favPokemons = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favPokemons);// favoritei o pokemon

    const viewPokeFav = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(viewPokeFav);// vejo se o pokemon esta na lista de favoritos

    const { location: { pathname } } = history;
    expect(pathname).toEqual('/favorites');// estou na rota de favoritos

    const starFav = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(starFav).toBe(starFav);// verifico se o pikachu é o favorito
  });
});
