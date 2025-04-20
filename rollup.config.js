import {nodeResolve} from '@rollup/plugin-node-resolve';
import ts from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import {replaceImportMetaEnvDev} from './replace-import-meta.js';

/** @type {import('rollup').RollupOptions} */
export default [
	{
		input: './src/content.ts',
		output: {dir: './lib', /*file: './content.js'*/ format: 'es'},
		plugins: [
			nodeResolve(),
			ts(),
			terser({
				format: {
					comments: false,
				},
			}),
			replaceImportMetaEnvDev(),
		],
	},
];
