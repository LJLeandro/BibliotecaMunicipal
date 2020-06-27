import { ILivro, livros } from "../models/livro-model.ts";
import nanoid from "https://deno.land/x/nanoid/mod.ts";
import { isMediaType } from "../../../../Users/Lucas/AppData/Local/deno/deps/https/deno.land/81154df8d47c9a9c60986b9ae3886eee2cf43bc6e1a9afaded9dea1c037e5b55.ts";

const getLivros = async (
    { request, response} : { request : { id: string } ; response: any },) => 
        {
            response.status = 200;
            response.body = livros;
};

const getLivro = async (
    { request, response} : { request : { id: string } ; response: any },) => 
        {
            response.status = 200;
            response.body = livros.filter(livro => livro.id == request.id);
};

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

const deleteLivro = async (
    { request, response} : { request : { id: string } ; response: any },) =>
        {
            let posicaoLivro = livros.findIndex(livro => livro.id == request.id );
            livros.splice(posicaoLivro);
            response.status = 200;
            response.body = { 'mensagem' : 'Livro Alterado com sucesso' }
};

export { getLivros, getLivro, postLivro, putLivro, deleteLivro };