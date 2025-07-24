---
"ferric-cli": minor
---

- Created generate command to generate scaffold project. Replacing ferric-example.
- Add path as arg to build project.
- Fixed cargo build command with correct --release flag.
- Added Cargo.toml optmizations for size.
- Added tests ferric-cli, to build and generate commands.
- Added debug flag as commands logging.
- Replaced eslint since the project lacks formatter and sort organizer, biome is faster and has all three.
- Changed build output to send to dist folder.
