const fetch = require("node-fetch");

function manejaErros(erro) {
  throw new Error(erro.message);
}

async function checaStatus(arrayUrls) {
  try {
    const arrayStatus = await Promise.all(
      arrayUrls.map(async (url) => {
        const res = await fetch(url);
        return `${res.status} - ${res.statusText}`;
      })
    );
    return arrayStatus;
  } catch (erro) {
    manejaErros(erro);
  }
}

function geraArrayDeUrls(arrayLinks) {
  const links = [];
  for (elem of arrayLinks) {
    links.push(Object.values(elem));
  }
  return links;
}

async function validaUrls(arrayLinks) {
  try {
    const links = geraArrayDeUrls(arrayLinks);
    const statusLinks = await checaStatus(links);

    const resultados = arrayLinks.map((objeto, indice) => ({
      ...objeto,
      status: statusLinks[indice],
    }));
    return resultados;
  } catch (erro) {
    manejaErros(erro);
  }
}

module.exports = validaUrls;
