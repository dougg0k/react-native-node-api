import { Command } from "@commander-js/extra-typings";

export const generateCommand = new Command("generate")
  .description("Generate the projct scaffold")
  .argument("<name>", "Type project name");
