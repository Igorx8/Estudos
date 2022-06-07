import { Persistency } from './persistency';

//teste de classe com apenas uma função que retorna void

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('shound return undefined', () => {
    //System under test - no caso aqui, a classe a ser testada
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo');
  });
});
