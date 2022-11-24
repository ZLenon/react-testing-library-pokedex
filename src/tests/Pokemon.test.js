import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Pokemon', () => {
  it('Testa se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const namePoke = screen.getByTestId('pokemon-name');
    expect(namePoke).toBeDefined();
    expect(namePoke.textContent).toEqual('Pikachu');

    const typePoke = screen.getByTestId('pokemon-type');
    expect(typePoke).toBeDefined();
    expect(typePoke.innerHTML).toEqual('Electric');

    const pesoPoke = screen.getByTestId('pokemon-weight');
    expect(pesoPoke).toBeDefined();
    expect(pesoPoke.innerHTML).toEqual('Average weight: 6.0 kg');
  });
  it('Testa se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido;', () => {
    renderWithRouter(<App />);

    const datailsLink = screen.getByRole('link', { name: /more details/i });
    expect(datailsLink.href).toEqual('http://localhost/pokemon/25');

    const detailsIMG = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(detailsIMG.src).toEqual('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(detailsIMG.alt).toEqual('Pikachu sprite');
  });
  it('Testa se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    const { history } = renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: 'More details' });
    expect(detailsLink).toHaveTextContent('More details');

    userEvent.click(detailsLink);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemon/25');
  });
  it('Teste se existe um ícone de estrela nos Pokémon favoritados', () => {
    const { history } = renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkDetails);

    const { location: { pathname } } = history;
    expect(pathname).toEqual('/pokemon/25');

    const checkFavorites = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(checkFavorites).toBeDefined();
    userEvent.click(checkFavorites);

    const starFavorite = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(starFavorite.src).toEqual('http://localhost/star-icon.svg');
    expect(starFavorite.alt).toEqual('Pikachu is marked as favorite');
  });
});
