// const http = require("http");
// const myname = require("./features.");
import http from "http";
// import myname from "./features.js";
// import {mynam2, mynam3} from "./features.js"
// import * as myobj from "./features.js";
import { genrerateLovePercent } from "./features.js";
// import fs from "fs";
// import path from "path";

// const home = fs.readFile("./index.html" ,()=> {
//     console.log("File Read Successfully");
// })
// const home = fs.readFileSync("./index.html");
// console.log(path.dirname("home/indexedDB.java"));

// console.log(genrerateLovePercent());

const server = http.createServer((req,res)=> {
    console.log(req.method);
    // console.log(req.url);  ( url access )
    // res.end("<h1>Noice</h1>"); ( end response no more loading and give a message noice )
    // Server k routing 
    if (req.url === "/about") { 
    res.end(`Love is ${genrerateLovePercent()} About Page`);
    }
    else if (req.url === "/") {
        // fs.readFile("./index.html" ,(err,home) => {
            res.end("home");
        // })
    }
    else if (req.url === "/contact") {
    res.end("Contact Page");
    }
    else {
    (res.end("No Page Found"));
    }
})

server.listen(5000,() => {
    console.log("Server is Working");
})