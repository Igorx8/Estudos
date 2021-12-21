-- Retorna todos os resultados
select * from estados

-- Retorna os campos respectivos desejados
select nome, sigla from estados

-- Retorna um nome de campo personalizado e filtra pela região
select 
    sigla, 
    nome as 'Nome do estado' 
from estados
where regiao = 'Sul'

--seleciona e ordena
select 
    nome, 
    regiao 
    from estados
where populacao >= 10
order by populacao;

--order by sem nada, considera crescente, podemos usar ('asc' para crescente, 'desc' para decrescente)