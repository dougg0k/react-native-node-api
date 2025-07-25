import { Command } from "@commander-js/extra-typings";

export const generateCommand = new Command("generate")
	.description("Generate the project scaffold")
	.argument("<name>", "Type the project name")
	.action((str, options) => {

	})
