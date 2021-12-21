create table if not exists cidades(
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    estado_id int unsigned not null,
    area decimal(10,2),
    PRIMARY KEY(id),
    foreign key(estado_id) references estados(id)
);

create table if not exists testes(
    id int unsigned not null auto_increment PRIMARY KEY
);


drop table if exists testes;

-- drop table testes;