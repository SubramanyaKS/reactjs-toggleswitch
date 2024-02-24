import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import {dts} from 'rollup-plugin-dts'
// import css from "rollup-plugin-import-css";
import postcss from 'rollup-plugin-postcss';
// import autoprefixer from 'autoprefixer';
//NEW
import terser from '@rollup/plugin-terser';

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      
      {
        file: packageJson.main,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      // NEW
      typescript({
        tsconfig: './tsconfig.json' // Path to your tsconfig.json
      }),
      // css(),
      // peerDepsExternal(),

      resolve(),
      commonjs(),
      postcss({
        plugins: [],
        // sourceMap: true,
        extract: true,
        inject:false,
        extensions:['.css'],
        minimize: true,
        
    }),
    // css(),

      // NEW
      terser(),
    ],
  },
  {
    input: 'dist/cjs/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]