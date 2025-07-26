import { Command } from "@commander-js/extra-typings";

export const initCommand = new Command("init")
	.description("Generate the project scaffold")
	.argument("<name>", "Type the project name")
	.action(() => {

	})
