# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Initial Project Setup

This project was created and configured with the following steps.

```bash
# 1. Set the bun version using asdf
# Replace <version> with the desired bun version
asdf install bun <version>
asdf local bun <version>

# 2. Create a new Svelte project
# Replace <project-name> with your desired project name
bun x sv create <project-name>

# 3. Update dependencies
bun update

# 4. Add and initialize Biome for code quality
bun add -D -E @biomejs/biome
bun x biome init

# 5. Run the development server
bun run dev
```

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
bun x sv create .

# create a new project in my-app
bun x sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.