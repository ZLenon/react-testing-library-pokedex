import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokedex', () => {
  it('Testa se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);

    const encouterPokmon = screen.getByRole('heading', { level: 2, name: 'Encountered Pokémon' });
    expect(encouterPokmon).toBeDefined();
  });
  it('Testa se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);

    const pokePicachu = screen.getByText('Pikachu');
    expect(pokePicachu).toBeDefined();

    const btnNext = screen.getByRole('button', { name: 'Próximo Pokémon' });
    expect(btnNext).toBeDefined();

    userEvent.click(btnNext);

    const pokeCharmander = screen.getByText('Charmander');
    expect(pokeCharmander).toBeDefined();

    userEvent.click(btnNext);

    const pokeCaterpie = screen.getByText('Caterpie');
    expect(pokeCaterpie).toBeDefined();

    userEvent.click(btnNext);

    const pokeEkans = screen.getByText('Ekans');
    expect(pokeEkans).toBeDefined();

    userEvent.click(btnNext);

    const pokeAlakazam = screen.getByText('Alakazam');
    expect(pokeAlakazam).toBeDefined();

    userEvent.click(btnNext);

    const pokeMew = screen.getByText('Mew');
    expect(pokeMew).toBeDefined();

    userEvent.click(btnNext);

    const pokeRapidash = screen.getByText('Rapidash');
    expect(pokeRapidash).toBeDefined();

    userEvent.click(btnNext);

    const pokeSnorlax = screen.getByText('Snorlax');
    expect(pokeSnorlax).toBeDefined();

    userEvent.click(btnNext);

    const pokeDragonair = screen.getByText('Dragonair');
    expect(pokeDragonair).toBeDefined();

    userEvent.click(btnNext);

    expect(pokePicachu).toBeDefined();
  });
  it('Testa se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);

    const namePoke = screen.getByText('Pikachu');
    expect(namePoke).toBeDefined();

    const pesoPoke = screen.getByText(/average weight: 6\.0 kg/i);
    expect(pesoPoke).toBeDefined();
  });
  it('Testa se a Pokédex tem todos botões de filtro', () => {
    renderWithRouter(<App />);

    const btnAll = screen.getByRole('button', { name: 'All' });
    expect(btnAll).toBeDefined();

    const btnFilters = screen.getAllByTestId('pokemon-type-button');
    expect(btnFilters).toBeDefined();
    /*  */
    const btnEletric = screen.getByRole('button', { name: /electric/i });
    expect(btnEletric).toBeDefined();
    userEvent.click(btnEletric);
    const typeEletric = screen.getAllByText(/electric/i);
    expect(typeEletric).toBeDefined();

    const btnFire = screen.getByRole('button', { name: /fire/i });
    expect(btnFire).toBeDefined();
    userEvent.click(btnFire);
    const typeFire = screen.getAllByText(/fire/i);
    expect(typeFire).toBeDefined();

    const btnBug = screen.getByRole('button', { name: /bug/i });
    expect(btnBug).toBeDefined();
    userEvent.click(btnBug);
    const typeBug = screen.getAllByText(/bug/i);
    expect(typeBug).toBeDefined();

    const btnPoison = screen.getByRole('button', { name: /poison/i });
    expect(btnPoison).toBeDefined();
    userEvent.click(btnPoison);
    const typePoison = screen.getAllByText(/poison/i);
    expect(typePoison).toBeDefined();

    const btnPsych = screen.getByRole('button', { name: /psychic/i });
    expect(btnPsych).toBeDefined();
    userEvent.click(btnPsych);
    const typePsych = screen.getAllByText(/psychic/i);
    expect(typePsych).toBeDefined();

    const btnNormal = screen.getByRole('button', { name: /normal/i });
    expect(btnNormal).toBeDefined();
    userEvent.click(btnNormal);
    const typeNormal = screen.getAllByText(/normal/i);
    expect(typeNormal).toBeDefined();

    const btnDragon = screen.getByRole('button', { name: /dragon/i });
    expect(btnDragon).toBeDefined();
    userEvent.click(btnDragon);
    const typeDragon = screen.getAllByText(/dragon/i);
    expect(typeDragon).toBeDefined();
  });
  it('Testa se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const btnAll = screen.getByRole('button', { name: 'All' });
    expect(btnAll).toBeDefined();
    userEvent.click(btnAll);
    const btnText = screen.getByText('All');
    expect(btnText).toBeDefined();
  });
});
