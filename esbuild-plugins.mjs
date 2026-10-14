import fs from 'node:fs/promises';

/** @type {import('esbuild').Plugin} */
const customFiles = {
  name: 'custom-files',
  setup(build) {
    build.onLoad({ filter: /\.custom$/ }, async (args) => ({
      contents: `export default ${JSON.stringify((await fs.readFile(args.path, 'utf8')).trim())};`,
      loader: 'js',
    }));
  },
};

export default [customFiles];
