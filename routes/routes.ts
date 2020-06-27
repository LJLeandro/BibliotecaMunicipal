// Utilizaremos o pacote 'oak' para importar o módulo de rotas
import { Router } from "https://deno.land/x/oak/mod.ts";
// E também utilizaremos as funções exportas do controller
import { getLivros, getLivro, postLivro, putLivro, deleteLivro } from "../controllers/livros-controller.ts";

const router = new Router();

router.get("/api/v1/livros", getLivros);

router.get("/api/v1/livros/:id", getLivro);

router.post('/api/v1/livros', postLivro)

router.put('/api/v1/livros', putLivro)

router.delete('api/v1/livros/:id', deleteLivro)

// Exportaremos o Router instanciado e carregado para o arquivo que irá inicializar nossa aplicação.
export default router;