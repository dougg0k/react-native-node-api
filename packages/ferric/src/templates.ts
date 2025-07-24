export function cargoTomlTemplate(projectName: string) {
  return `
[package]
name = ${projectName}
version = "1.0.0"
edition = "2021"
license = "MIT"

[lib]
crate-type = ["cdylib"]

[dependencies.napi]
version = "3.1"
default-features = false
# see https://nodejs.org/api/n-api.html#node-api-version-matrix
features = ["napi4"]

[dependencies.napi-derive]
version = "3.1"
features = ["type-def"]

[build-dependencies]
napi-build = "2"

[profile.release]
lto = true
codegen-units = 1
strip = "symbols"
opt-level = "z"
panic = "abort"
`;
}

export const GIT_IGNORE_TEMPLATE = `
target
Cargo.lock

*.xcframework/
*.apple.node/
*.android.node/

dist
`;

export const BUILD_RS_TEMPLATE = `
fn main() {
  napi_build::setup();
}
`;

export const LIB_RS_TEMPLATE = `
use napi_derive::napi;

#[napi]
pub fn sum(a: i32, b: i32) -> i32 {
    a + b
}
`;
