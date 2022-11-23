import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('Testando o componente <About.js />.', () => {
  it('Testa se a página contém as info sobre a Pokédex', () => {
    render(<About />);
    const textDescrition = 'This application simulates a Pokédex, a digital encyclopedia containing all Pokémon';
    const infoPokedex = screen.getByText(textDescrition);
    expect(infoPokedex).toHaveTextContent(textDescrition);
  });
  it('Testa se a página contém um heading h2 com o texto About Pokédex;', () => {
    render(<About />);
    const textAbout = screen.queryByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(textAbout).toHaveTextContent('About Pokédex');
  });
  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    render(<About />);
    const text1 = 'This application simulates a Pokédex, a digital encyclopedia containing all Pokémon';
    const text2 = 'One can filter Pokémon by type, and see more details for each one of them';
    const paragrf1 = screen.getByText(text1);
    const paragrf2 = screen.getByText(text2);

    expect(paragrf1).toHaveTextContent(text1);
    expect(paragrf2).toHaveTextContent(text2);
  });
  it('Testa se a página contém a imagem de uma Pokédex', () => {
    render(<About />);
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const pokeImg = screen.getByRole('img', { src: url });
    expect(pokeImg).toHaveAttribute('src', url);
  });
});
