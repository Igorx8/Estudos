
// Record type
const objeto1: Record<string, string | number> = {
  nome: 'Igor',
  sobrenome: 'Carvalho',
  idade: 25
}

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
}

// Required Type
type PessoaRequired = Required<PessoaProtocol>;  //transforma tudo que é opcional em obrigatório

// Partial type
type PessoaPartial = Partial<PessoaRequired>; //transforma tudo que é obrigatório para opcional

// Readonly Type
type PessoaReadonly = Readonly<PessoaRequired>; // transforma tudo em apenas leitura

// Pick type
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;  //Permite você extrair do objeto apenas o que deseja utilizar

const objeto2: PessoaRequired = {
  nome: 'Igor',
  sobrenome: 'Carvalho',
  idade: 25
}

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;  //Computa todos os tipos que estão em ABC que não estão em CDE    // A B
type TipoExtract = Extract<ABC, CDE>;  //Computa todos os tipos que estão em ABC que podem ser atribuidos aos tipos de CDE    // C

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & { id: string };  //Pegamos as chaves de AccountMongo, excluindo '_id', e adicionando a chave 'id'

const accountMongo: AccountMongo = {
  _id: 'asd12ewd2eawdadawd2',
  nome: 'Igor',
  idade: 25,
  sobrenome: 'Carvalho'
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;

  return { ...accountData, id: _id };
}


const accountApi = mapAccount(accountMongo);
console.log('API :');

console.log(accountApi);
