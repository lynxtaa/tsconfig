module.exports = {
	extends: ['@lynxtaa/eslint-config', '@lynxtaa/eslint-config/requires-typechecking'],
	// See https://typescript-eslint.io/docs/linting/typed-linting
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
}
