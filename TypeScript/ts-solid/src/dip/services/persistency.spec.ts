describe('Testando alguma coisa', () => {
  it('descricao do teste (it)', () => {
    const number = 1;
    expect(number).not.toBe(1);
  });
  test('descricao do teste (test)', () => {
    const nome = 'Igor';
    expect(nome).toBe('Igor');
  })
})
