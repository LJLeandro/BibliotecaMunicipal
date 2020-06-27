// Aqui estão módulos que exportamos do nosso arquivo livro-model.ts
import { ILivro, livros } from "../models/livro-model.ts";
import nanoid from "https://deno.land/x/nanoid/mod.ts";

// Nesse arquivos de controles criaremos funções assincronas que irão realizar as ações de nossa API.
// A primeira ação será o 'GET' que retornará todos os livros que existem no Array 'livros'
const getLivros = async (
    { request, response} : { request : { id: string } ; response: any },) => 
        {
            response.status = 200;
            response.body = livros;
};

// Agora iremos criar um 'GET' por id, que retornará um único livro do Array
const getLivro = async (
    { request, response} : { request : { id: string } ; response: any },) => 
        {
            response.status = 200;
            response.body = livros.filter(livro => livro.id == request.id);
};

// O 'POST' irá adicionar uma novo livro no Array
// Sempre que um 'POST' é feito, será gerado um id unico utilizando o nanoid
const postLivro = async (
    { request, response } : { request : any ; response: any }, ) =>
        {
            const body = await request.body();
            const livro: ILivro = body.value;
            livro.id = nanoid(11);

            livros.push(livro)
            
            response.status = 200;
            response.body = { 'mensagem' : 'Livro Incluído com sucesso' }

};

// E caso sejá necessário iremos utilizar o 'PUT' para atualizar as informações do livro.
const putLivro = async (
    { request, response } : { request : any ; response: any }, ) =>
        {
            console.log(JSON.stringify(request));

            const body = await request.body();
            const livro: ILivro = body.value;

            let posicaoLivro = livros.findIndex(livro => livro.id == livro.id );
            livros[posicaoLivro] = livro;
            response.status = 200;
            response.body = { 'mensagem' : 'Livro Alterado com sucesso' }
};

// E por fim 'DELETE' para remover um livro do array
const deleteLivro = async (
    { request, response} : { request : { id: string } ; response: any },) =>
        {
            let posicaoLivro = livros.findIndex(livro => livro.id == request.id );
            livros.splice(posicaoLivro);
            response.status = 200;
            response.body = { 'mensagem' : 'Livro Alterado com sucesso' }
};

// Por fim iremos exportar as funções para que possamos utilizar no arquivos 'routes'
export { getLivros, getLivro, postLivro, putLivro };