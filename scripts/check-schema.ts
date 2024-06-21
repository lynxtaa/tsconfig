/* eslint-disable no-console */
import { readFile } from 'node:fs/promises'

import { betterAjvErrors } from '@apideck/better-ajv-errors'
import Ajv, { type SchemaObject } from 'ajv'
import chalk from 'chalk'
import { globby } from 'globby'

const schema = JSON.parse(await readFile('./schema/schema.json', 'utf8')) as SchemaObject

delete schema.$schema
delete schema.id

const ajv = new Ajv({ strict: false })

const configPaths = await globby('{bundler,tsc}/**/*.json', {
	onlyFiles: true,
})

console.log(`🔨 Validating configs...\n`)

let errorCount = 0

for (const path of configPaths) {
	const config = JSON.parse(await readFile(path, 'utf8')) as unknown
	const validate = ajv.compile(schema)
	if (validate(config)) {
		console.log(`✅ ${path}`)
	} else {
		const errors = betterAjvErrors({ schema, data: config, errors: validate.errors })
		console.log(`🙀 ${path}`)
		for (const error of errors) {
			console.log(chalk.yellow(`${error.message} at "${error.path}"`))
		}
		errorCount++
	}
}

if (errorCount > 0) {
	process.exit(1)
}
