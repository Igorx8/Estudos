const pegaArquivo = require("../index");

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
  {
    "<input>":
      "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input",
  },
  {
    DataTransfer:
      "https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer",
  },
  {
    HTMLCanvasElement:
      "https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement",
  },
  {
    "Implementation notes":
      "https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes",
  },
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
    const resultado = await resolvePromise("./arquivos/texto1.md").then(
      (res) => {
        return res;
      }
    );
    // const resultado = await pegaArquivo('C:\Users\TSA\Documents\GitHub\Estudos\NodeJs\Primeira biblioteca em NodeJS\test\arquivos\texto1.md')
    expect(resultado).toEqual(arrayResult);
  });
});
