import { createConnection } from "typeorm"
import { Client } from './entities/Client'
import { Banker } from './entities/Banker'
import { Transaction } from "./entities/Transaction"
import express from "express"
import { createClientRouter } from "./routes/create_client"
import { createBankerRouter } from "./routes/create_banker"
import { createTransactionRouter } from "./routes/create_transaction"
import { connectBankerToClientRouter } from "./routes/connect_banker_to_client"
import { deleteClientRouter } from "./routes/delete_client"

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

        app.use(express.json())
        app.use(createClientRouter)
        app.use(createBankerRouter)
        app.use(createTransactionRouter)
        app.use(connectBankerToClientRouter)
        app.use(deleteClientRouter)

        app.listen(8081, () => {
            console.log('now running on port 8081')
        })
    } catch (err) {
        console.error(err)
        throw new Error("unable to connect to database")
    }



}

main()