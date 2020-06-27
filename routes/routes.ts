import { Router } from "https://deno.land/x/oak/mod.ts";
import { getLivros, getLivro, postLivro, putLivro } from "../controllers/livros-controller.ts";

const router = new Router();

router.get("/api/v1/teste", (context) => {
    context.response.status = 200;
    context.response.body = "Hello World, Deno.Land API";
});

router.get("/api/v1/livros", getLivros);

router.get("/api/v1/livros/:id", getLivro);

router.post('/api/v1/livros', postLivro)

router.put('/api/v1/livros', putLivro)

export default router;