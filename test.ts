const { createJiti } = require("jiti");
const assert = require("node:assert");
const { createRequire } = require("node:module");
const { state } = require("./state.ts");

async function main() {
  const { getRef } = await import("./load.js");
  const importedState = await getRef();

  console.log(Object.keys(createRequire(__dirname).cache));

  state.value++;

  console.log(state);
  console.log(importedState);

  assert(state.value === importedState.value);
}

main();
