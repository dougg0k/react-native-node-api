# `ferric` (ESM Module)

A wrapper around Cargo making it easier to produce prebuilt binaries targeting iOS and Android matching the [the prebuilt binary specification](https://github.com/callstackincubator/react-native-node-api/blob/main/docs/PREBUILDS.md) as well as [napi.rs](https://napi.rs/) to generate bindings from annotated Rust code.

## Install the project

`npm install --save-dev ferric-cli`

## Add scripts

```json
"scripts": {
   "generate:proj": "ferric generate folder_name",
   "debug": "ferric build folder_name",
   "release": "npm run debug --configuration release",
},
```
