// Aqui estão módulos que exportamos do nosso arquivo livro-model.ts
import { ILivro, livros } from "../models/livro-model.ts";
import nanoid from "https://deno.land/x/nanoid/mod.ts";

let arrayLivros = livros;

// Nesse arquivos de controles criaremos funções assincronas que irão realizar as ações de nossa API.
// A primeira ação será o 'GET' que retornará todos os livros que existem no Array 'livros'
const getLivros = async (
    { params, response} : { params : { id: string } ; response: any },) => 
        {
            response.status = 200;
            response.body = arrayLivros;
};

// Agora iremos criar um 'GET' por id, que retornará um único livro do Array
const getLivro = async (
    { params, response} : { params : { id: string } ; response: any },) => 
        {
            response.status = 200;
            response.body = arrayLivros.filter(livro => livro.id == params.id);
};

// O 'POST' irá adicionar uma novo livro no Array
// Sempre que um 'POST' é feito, será gerado um id unico utilizando o nanoid
const postLivro = async (
    { request, response } : { request : any ; response: any }, ) =>
        {
            const body = await request.body();
            const livro: ILivro = body.value;
            livro.id = nanoid(11);

            arrayLivros.push(livro)
            
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

            let posicaoLivro = arrayLivros.findIndex(livro => livro.id == livro.id );
            arrayLivros[posicaoLivro] = livro;
            response.status = 200;
            response.body = { 'mensagem' : 'Livro Alterado com sucesso' }
};

// E por fim 'DELETE' para remover um livro do array
const deleteLivro = async (
    { params, response} : { params : { id: string } ; response: any },) =>
        {
            console.log('Exlcuindo...');
            arrayLivros = arrayLivros.filter(livro => livro.id != params.id);
            response.body = { 'mensagem' : 'Livro Excluído com sucesso!' };
};

// Por fim iremos exportar as funções para que possamos utilizar no arquivos 'routes'
export { getLivros, getLivro, postLivro, putLivro, deleteLivro };