import nanoid from "https://deno.land/x/nanoid/mod.ts";

interface ILivro {
    id: string;
    titulo: string;
    autor: string;
}

let livros: Array<ILivro> = [{
    id: nanoid(11),
    titulo: "O Senhor dos Anéis - A Sociedade do Anel",
    autor: "J.R.R. Tolkien"
}, {
    id: nanoid(11),
    titulo: "O Senhor dos Anéis - As Duas Torres",
    autor: "J.R.R. Tolkien"
}, {
    id: nanoid(11),
    titulo: "O Senhor dos Anéis - O Retorno do Rei",
    autor: "J.R.R. Tolkien"
}];

export { ILivro, livros };