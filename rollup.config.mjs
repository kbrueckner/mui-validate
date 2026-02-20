import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default [
    {
        cache: false,
        input: 'src/index.ts',
        output: [
            {
                file: 'playground/src/component-lib/index.js',
                format: 'esm',
                banner: '/* eslint-disable */',
            },
            { file: `dist/${pkg.main}`, format: 'cjs' },
            { file: `dist/${pkg.module}`, format: 'esm' },
        ],
        plugins: [
            del({ targets: ['dist/*', 'playground/src/component-lib'] }),
            typescript({
                useTsconfigDeclarationDir: true,
            }),
        ],
        external: Object.keys(pkg.peerDependencies || {}),
    },
    {
        input: 'dist/dts/src/index.d.ts',
        output: [
            { file: 'dist/index.d.ts', format: 'es' },
            { file: 'playground/src/component-lib/index.d.ts', format: 'es' },
        ],
        plugins: [
            dts(),
        ],
    },
];
