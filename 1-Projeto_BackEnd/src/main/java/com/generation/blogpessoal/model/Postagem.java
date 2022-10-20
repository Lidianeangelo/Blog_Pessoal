package com.generation.blogpessoal.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="tb_postagens")
public class Postagem {

@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private Long id;

@NotBlank(message="Insira um título")
@Size(min=0,max=100,message="O atributo deve ter 100 caracteres")
private String titulo;

@NotBlank(message="Insira o texto")
@Size(min=0,max=1000,message="O atributo deve ter 1000 caracteres")
private String texto;

@NotBlank(message="Insira a data")
@Size(min=0,max=1000,message="O atributo deve ter 1000 caracteres")
public String datapost;

@NotBlank(message="Insira o autor")
@Size(min=0,max=1000,message="O atributo deve ter 1000 caracteres")
private String autor;

@NotBlank(message="Insira o link")
@Size(min=0,max=1000,message="O atributo deve ter 1000 caracteres")
private String link;

@NotBlank(message="Insira sua foto")
@Size(min=0,max=1000,message="O atributo deve ter 1000 caracteres")
private String imagem;

@ManyToOne
@JsonIgnoreProperties("postagem")
private Tema tema;

@ManyToOne
@JsonIgnoreProperties("postagem")
private Usuario usuario;

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getTitulo() {
	return titulo;
}

public void setTitulo(String titulo) {
	this.titulo = titulo;
}

public String getTexto() {
	return texto;
}

public void setTexto(String texto) {
	this.texto = texto;
}


public String getDatapost() {
	return datapost;
}

public void setDatapost(String datapost) {
	this.datapost = datapost;
}


public String getAutor() {
	return autor;
}

public void setAutor(String autor) {
	this.autor = autor;
}

public String getLink() {
	return link;
}

public void setLink(String link) {
	this.link = link;
}

public String getImagem() {
	return imagem;
}

public void setImagem(String imagem) {
	this.imagem = imagem;
}

public Tema getTema() {
	return tema;
}

public void setTema(Tema tema) {
	this.tema = tema;
}

public Usuario getUsuario() {
	return usuario;
}

public void setUsuario(Usuario usuario) {
	this.usuario = usuario;
}


}
