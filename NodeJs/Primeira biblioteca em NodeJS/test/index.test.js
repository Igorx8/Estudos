const pegaArquivo = require("../index");

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  }
];

const resolvePromise = (caminho) => {
  return new Promise((resolve, reject) => {
    resolve(pegaArquivo(caminho));
    reject("Deu ruim");
  });
};

describe("pegaArquivo::", () => {
  it("deve ser uma função", () => {
    expect(typeof pegaArquivo).toBe("function");
  });
  it("deve retornar array com resultados", async () => {
    // const resultado = await resolvePromise("./arquivos/texto1.md").then(
    //   (res) => {
    //     return res;
    //   }
    // );
    const resultado = await pegaArquivo('./test/arquivos/texto1.md')
    expect(resultado).toEqual(arrayResult);
  });
  it('deve retornar mensagem "Não há links"', async () =>{
    const resultado = await pegaArquivo('./test/arquivos/texto1_semlinks.md')
    expect(resultado).toBe('não há links')
  })
  it('deve lançar um erro na falta de arquivos', () => {
    async function capturaErro(){
      await pegaArquivo('./arquivos')
      expect(capturaErro).toThrowError(/O arquivo ou diretório não foram encontrados/)
    }
  })
});
