import { createConnection } from "typeorm"
import { Client } from './entities/Client'
import { Banker } from './entities/Banker'
import { Transaction } from "./entities/Transaction"
import express from "express"

const app = express()

const main = async () => {
    try {
        const connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5433,
            username: "laimonasjanutenas",
            password: undefined,
            database: 'typeorm',
            entities: [Client, Banker, Transaction],
            synchronize: true
        })

        console.log('connected to database')

        app.listen(8080, () => {
            console.log('now running on port 8080')
        })
    } catch (err) {
        console.error(err)
        throw new Error("unable to connect to database")
    }



}

main()