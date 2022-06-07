import { Messaging } from './messaging';

const createSut = () => new Messaging();

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('testando se funcao sendMessage foi chamada', () => {
    const sut = createSut();
    const consoleMsgSpy = jest.spyOn(console, 'log');
    sut.sendMessage('message');
    expect(consoleMsgSpy).toBeCalledTimes(1);
  });

  it('testando retorno funcao sendMessage', () => {
    const sut = createSut();
    sut.sendMessage('teste');
    const consoleMsgSpy = jest.spyOn(console, 'log');
    expect(consoleMsgSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
