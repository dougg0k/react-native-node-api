const assert = require("node:assert");
const addon = require("bindings")("addon.node");

// biome-ignore lint/suspicious/noShadowRestrictedNames: Unknown
const toLocaleString = (text) => {
  return text
    .toString()
    .split(",")
    .map((code) => String.fromCharCode(parseInt(code, 10)))
    .join("");
};

module.exports = () => {
  assert.strictEqual(toLocaleString(addon.newBuffer()), addon.theText);
  assert.strictEqual(toLocaleString(addon.newExternalBuffer()), addon.theText);
  assert.strictEqual(toLocaleString(addon.copyBuffer()), addon.theText);
  const buffer = addon.staticBuffer();
  assert.strictEqual(addon.bufferHasInstance(buffer), true);
  assert.strictEqual(addon.bufferInfo(buffer), true);
  addon.invalidObjectAsBuffer({});

  // TODO: Add gc tests
  // @see
  // https://github.com/callstackincubator/react-native-node-api/issues/182
};
