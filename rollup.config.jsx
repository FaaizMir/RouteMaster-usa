import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';


export default {
    input: 'src/main.js', // Adjust the input path if needed
    output: {
      file: 'dist/bundle.js',
      format: 'iife',
    },
    plugins: [
      resolve(),
      commonjs(),
    ],
    external: [
  '/herovideo.mp4',
  // Add other external modules here if needed
],
  };