import { getEnv } from './builtins/dist'

console.log('current env')
console.log(JSON.stringify(getEnv(),null, 2))
