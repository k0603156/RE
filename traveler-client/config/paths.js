"use strict";
const path = require("path");
const fs = require("fs");

const TravelerDir = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(TravelerDir, relativePath);

const moduleFileExtensions = ["js", "ts", "jsx", "tsx"];

const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );
  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }
  return resolveFn(`${filePath}.ts`);
};

module.exports = {
  TravelerPublic: resolveApp("src/PUBLIC"),
  TravelerHtml: resolveApp("src/PUBLIC/index.html"),
  TravelerIndexTs: resolveModule(resolveApp, "src/CLIENT/index")
};
