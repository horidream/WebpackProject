const express = require("express");
const path = require("path");


const app = express();

if(process.env.NODE_ENV !== "production"){
    const middleware = require("webpack-dev-middleware");
    const webpack = require("webpack");
    const webpackConfig = require("./webpack.config.js");
    app.use(middleware(webpack(webpackConfig)));
    
}else{
    console.log("serve dist");

    app.use(express.static('dist'));
    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "dist/index.html"));

    })
}
app.listen(3001, ()=> console.log("listen"));

