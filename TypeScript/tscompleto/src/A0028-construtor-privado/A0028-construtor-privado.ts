//Singleton - GoF | Factory Method(Quando um método de uma classe cria um novo objeto)

export class Database {
  static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(
      `Conectado em ${this.host}, usuario: ${this.user}, senha: ${this.password}`,
    );
  }

  static getDataBase(host: string, user: string, password: string) {
    if (Database.database) {
      console.log('Retornando instância já criada');
      return Database.database;
    }

    console.log('Criando nova instância');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDataBase('localhost', 'root', '123');
db1.connect();

const db2 = Database.getDataBase('222', 'root', '123');
db2.connect();

const db3 = Database.getDataBase('333', 'root', '123');
db3.connect();

const db4 = Database.getDataBase('444', 'root', '123');
db4.connect();
// console.log(db1 === db2); //true

//it will not work on private constructor
// const db1 = new Database('localhost', 'root', '123456');
// db1.connect();

// const db2 = new Database('localhost', 'root', '123456');
// db2.connect();

// console.log(db1 === db2); //false
