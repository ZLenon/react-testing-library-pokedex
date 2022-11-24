import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente PokemonDetails', () => {
  it('Testa se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkDetails).toBeDefined();
    userEvent.click(linkDetails);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemon/25');

    const namePoke = screen.getByRole('heading', { name: /pikachu details/i });
    expect(namePoke).toBeDefined();
    expect(linkDetails).not.toBeVisible();

    const sumary = screen.getByRole('heading', { level: 2, name: /summary/i });
    expect(sumary).toHaveTextContent('Summary');

    const textDescription = /this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat/i;
    const text = screen.getByText(textDescription);
    expect(text).toHaveTextContent(textDescription);
  });
  it('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkDetails).toBeDefined();
    userEvent.click(linkDetails);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemon/25');

    const locationGame = screen.getByRole('heading', { level: 2, name: /game locations of pikachu/i });
    expect(locationGame).toBeDefined();

    const imgMap = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(imgMap).toBeDefined();
    expect(imgMap[0].src).toEqual('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgMap[0].alt).toEqual('Pikachu location');
    expect(imgMap[1].src).toEqual('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(imgMap[1].alt).toEqual('Pikachu location');

    const nameMap = screen.getByText(/kanto power plant/i);
    expect(nameMap).toBeDefined();
  });
  it('Testa se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkDetails).toBeDefined();
    userEvent.click(linkDetails);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemon/25');

    const checkPokeFavorites = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(checkPokeFavorites).toBeDefined();
    expect(checkPokeFavorites.checked).toBe(false);

    userEvent.click(checkPokeFavorites);
    expect(checkPokeFavorites.checked).toBe(true);
    const starFavorites = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(starFavorites).toBeDefined();

    userEvent.click(checkPokeFavorites);
    expect(checkPokeFavorites.checked).toBe(false);
    expect(starFavorites).not.toBeInTheDocument();

    const pokeFaveText = screen.getByLabelText('Pokémon favoritado?');
    expect(pokeFaveText).toBeDefined();
  });
});
