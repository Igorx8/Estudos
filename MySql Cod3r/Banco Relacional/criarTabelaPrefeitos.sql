create table if not exists prefeitos(
  id int unsigned not null auto_increment,
  nome varchar(255) not null,
  cidade_id int unsigned,
  PRIMARY KEY(id),
  UNIQUE KEY(cidade_id),
  FOREIGN KEY(cidade_id) REFERENCES cidades(id)
);