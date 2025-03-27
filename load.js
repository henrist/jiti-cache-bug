const { createJiti } = require("jiti");
const { normalize } = require("node:path");
const { fileURLToPath } = require("node:url");

const jiti = createJiti(__dirname, {
  debug: true,
  fsCache: false,
});

console.log("require.resolve", require.resolve("./load.js"));
console.log("jiti.resolve", jiti.resolve("./load.js"));
console.log(
  "normalize(fileURLToPath(jiti.esmResolve))",
  normalize(fileURLToPath(jiti.esmResolve("./load.js")))
);

exports.getRef = async () => {
  const { state } = await jiti.import("./state.ts");
  return state;
};
