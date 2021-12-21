-- Agrupa as regiões, soma a população e ordena de forma decrescente
select
    regiao as 'Região',
    sum(populacao) as Total
from estados
group by regiao
ORDER BY Total DESC;

-- Soma toda a população
select sum(populacao) as Total
from estados;

-- Calcula a média de populacao por estado
select avg(populacao) as Total
from estados;