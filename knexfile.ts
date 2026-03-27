import type {Knex} from 'knex'
import { env } from './src/config/env.js' 

export const config:Knex.Config = {
    client:'sqlite',
    connection:{filename:env.DATABASE_URL},
    useNullAsDefault:true,
    migrations:{directory:'./src/database/migrations'}
}