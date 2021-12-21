--atualiza o nome usando como refencia a sigla
update estados
set nome = 'Maranhão'
where sigla = 'MA';


--Formas de se escrever
select nome from estados where sigla = 'MA';

select estados.nome from estados where sigla = "MA";

select est.nome from estados est where sigla = 'MA';

update estados 
set 
    nome = 'Paraná', 
    populacao = 11.32
where sigla = 'PR'