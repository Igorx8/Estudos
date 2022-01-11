insert into empresas(nome, cnpj)
values ('Bradesco', 47812942000138),
      ('Vale', 59976661000108),
      ('Cielo', 45423962000191);

ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

-- desc 'nomeDaTabela' (mostra as informações sobre as tabelas)

insert into empresas_unidades(empresa_id, cidade_id, sede)
values (1, 1, 1),
      (1, 2, 0),
      (2, 1, 0),
      (2, 2, 1);