import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const external = new Set([
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]);

export default {
  input: './src/index.js',
  external: (id) => external.has(id),
  plugins: [babel()],
  output: {
    format: 'cjs',
    file: pkg.main,
  },
};
