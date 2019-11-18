import express, {Application, Request, Response} from 'express';
import {createServer, Server} from 'http';
import {resolve} from 'path';

const app: Application = express();

app.use(express.static(resolve('.', 'docs')));
app.use((req: Request, res: Response) => {
  res.sendFile(resolve('.', 'docs', 'index.html'));
});

const server: Server = createServer(app);
const port: string = process.env.PORT || '3000';

server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log('Web server is up and running on port %s', port);
});
