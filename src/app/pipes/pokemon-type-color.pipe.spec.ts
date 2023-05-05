import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';

describe('PokemonTypeColorPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonTypeColorPipe();
    expect(pipe).toBeTruthy();
  });
});
