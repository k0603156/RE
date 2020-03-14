import fs from "fs";
import path from "path";

const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
);
const chunks = Object.keys(manifest.files)
  .filter(key => /chunk\.js$/.exec(key))
  .map(key => `<script src="${manifest.files[key]}"></script>`)
  .join("");
function createPage(root: any, preloadReduxState: any) {
  return `<!DOCTYPE html> 
              <html lang="ko"> 
                <head>   
                  <meta charset="utf-8" />   
                  <link rel="shortcut icon" href="/favicon.ico" /> 
                  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />  
                  <meta name="theme-color" content="#000000" />   
                  <title>React App</title> 
                </head>
                <body> 
                <noscript>You need to enable JavaScript to run this app.</noscript> 
                  <div id="root"> 
                  ${root} 
                    </div>   
                    <script src="${manifest.files["runtime-main.js"]}"></script>   
                      ${chunks}   
                    <script src="${manifest.files["main.js"]}"></script> 
                    ${preloadReduxState}  
                </body>  
              </html>`;
}

export default createPage;
