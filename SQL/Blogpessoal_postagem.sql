USE db_blogpessoal;
INSERT INTO tb_postagens (id,autor,datapost,imagem,link, texto, titulo)
VALUES ("1", "Lidiane Angelo","19/10/2022","xxx","xxx","xxxxxxxxxxx","Empregabilidade");

insert into tb_temas (id, descricao) values ("2", "Empregabilidade");

SELECT * FROM tb_postagens;
SELECT * FROM tb_temas;
SELECT * FROM tb_usuarios;
