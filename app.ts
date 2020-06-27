// Novamente importaremos o OAK mas dessa vez para utilizar seu servidor de aplicação
import { Application } from "https://deno.land/x/oak/mod.ts";
// Com config do DOTENV configuraremos o Host e a Port do serviçoes
import { config } from "https://deno.land/x/dotenv/mod.ts";
import router from "./routes/routes.ts";

const HOST = config().HOST ?? "127.0.0.1";
const PORT = config().PORT ?? 8000;

// Inforemos a nossa aplicação quais rotas ela deve estar 'escutando'
// E quais metódos são permitidos no nosso caso: 'POST', 'PUT', 'GET', 'DELETE'
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// Para saber se nosso servidor subiu com sucesso exibiremos o log abaixo
console.log(`Deno is running: ${HOST}:${PORT}`);
await app.listen(`${HOST}:${PORT}`);