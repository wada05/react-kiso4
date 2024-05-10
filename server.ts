import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import App from "./src/App";

const app: express.Express = express();
const port = 8000;
const path = require('path');

app.use(express.static('dist'));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});



//cssファイルの読み込みでエラーが出てしまう

// app.get("/", (req: express.Request, res: express.Response) => {
//   const appInstance = React.createElement(App);
//   const html = ReactDOMServer.renderToString(appInstance);
//   res.send(`
//   <!DOCTYPE html>
//   <html lang = "ja">
//   <head>
//     <meta charset = "UTF-8">
//     <meta name = "viewport" content = "width = divice-width, initial-scale = 1.0"> 
//     <title>React App</title>
//   </head>
//   <body>
//       <div id="root">${html}</div>
//   </body>
//   </html>
//   `)
// });

app.get("/api", (req: express.Request, res: express.Response) => {
    res.json([
      {
        id:1,
        name:"りんご",
        price:200,
        image:"https://source.unsplash.com/gDPaDDy6_WE",
      },
      {
        id:2,
        name:"バナナ",
        price:300,
        image:"https://source.unsplash.com/zrF6ACPLhPM",
      },
      {
        id:3,
        name:"みかん",
        price:"150",
        image:"https://source.unsplash.com/bogrLtEaJ2Q",
      },
      {
        id:4,
        name:"メロン",
        price:"2000",
        image:"https://source.unsplash.com/8keUtGmy0xo",
      },
    ]);
  });
  
  app.listen(port, () => {
    console.log(`port ${port} でサーバー起動中`);
  });