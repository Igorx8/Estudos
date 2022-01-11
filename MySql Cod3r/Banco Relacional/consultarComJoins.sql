-- trás o que existe na tabela da esquerda + o que existe em comum entre as duas através do id de cidades == prefeitos.cidade_id
SELECT * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id;

-- trás o que existe em comum entre as duas através do id de cidades == prefeitos.cidade_id
select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

-- trás o que existe na tabela da direita + o que existe em comum entre as duas através do id de cidades == prefeitos.cidade_id
SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;

SELECT * FROM prefeitos; 

SELECT * FROM cidades;



-- full join não existe no mysql, então faremos
 SELECT * FROM cidades c FULL JOIN prefeitos p ON c.id = p.cidade_id;
 --UNION (REMOVE OS DUPLICADOS), UNION ALL(MOSTRA TUDO)

 SELECT * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id
 union all 
 SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;