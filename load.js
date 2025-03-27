const { createJiti } = require("jiti");

const jiti = createJiti(__dirname, {
  debug: true,
  fsCache: false,
});

console.log("require.resolve", require.resolve("./load.js"));
console.log("jiti.resolve", jiti.resolve("./load.js"));

exports.getRef = async () => {
  const { state } = await jiti.import("./state.ts");
  return state;
};
