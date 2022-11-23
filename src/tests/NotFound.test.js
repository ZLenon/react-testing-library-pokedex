import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../pages/NotFound';

describe('Testando o componente NotFound', () => {
  it('Testando se a página contém um heading h2 com o texto Page requested not found', () => {
    render(<NotFound />);

    const textNotFound = screen.getByRole('heading', { level: 2, name: 'Page requested not found' });
    expect(textNotFound).toBeDefined();
  });
  it('Testa se a pág mostra a img "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"', () => {
    render(<NotFound />);

    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const imgSrc = screen.getByRole('img', { src: url });
    expect(imgSrc).toHaveAttribute('src', url);
  });
});
