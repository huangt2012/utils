import { defineConfig } from 'rollup'
import ts from 'rollup-plugin-typescript2'
import babelPlugin from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'
import terser from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'
import { importExportPlugin } from 'rollup-plugin-import-export'

const config = defineConfig([
    // 输出两种模式：ES Module和CommonJS
    {
        input: ['src/index.ts'],
        output: [
            {
                dir: 'dist/esm',
                format: 'esm',
                preserveModules: true
            },
            {
                dir: 'dist/cjs',
                format: 'cjs',
                preserveModules: true
            }
        ],
        plugins: [
            importExportPlugin(),
            ts(),
            babelPlugin({
                exclude: '**/node_modules/**'
            }),
            commonjs()
        ]
    },
    // 打包为 UMD
    {
        input: ['src/index.ts'],
        output: [
            {
                file: 'dist/umd/index.js',
                format: 'umd',
                name: 'utils',
            },
        ],
        plugins: [
            importExportPlugin(),
            ts(),
            babelPlugin({
                exclude: '**/node_modules/**'
            }),
            commonjs(),
            resolve({ preferBuiltins: true, mainFields: ['browser'] }),
            globals(),
            builtins(),
            terser(),
        ]
    },
    // 打包声明文件
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist/types',
            format: 'esm',
            preserveModules: true,
        },
        plugins: [
            importExportPlugin(),
            dts(),
        ],
    },
])

export default config;