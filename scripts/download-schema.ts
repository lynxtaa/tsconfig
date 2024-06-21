/* eslint-disable no-console */
import { writeFile } from 'node:fs/promises'

console.log('🔨 Downloading schema...')

const response = await fetch('https://json.schemastore.org/tsconfig')

if (!response.ok) {
	throw new Error(`Bad response (${response.status})`)
}

const schema = await response.json()

await writeFile('./schema/schema.json', JSON.stringify(schema, null, 2), 'utf8')

console.log('✅ Schema downloaded successfully')
