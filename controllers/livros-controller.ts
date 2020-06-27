import { ILivro, livros } from "../models/livro-model.ts";
import nanoid from "https://deno.land/x/nanoid/mod.ts";

const getLivros = async (
    { params, response} : { params : { id: string } ; response: any },) => 
        {
            response.status = 200;
            response.body = livros;
};

const getLivro = async (
    { params, response} : { params : { id: string } ; response: any },) => 
        {
            response.status = 200;
            response.body = livros.filter(livro => livro.id == params.id);
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

export { getLivros, getLivro, postLivro, putLivro };