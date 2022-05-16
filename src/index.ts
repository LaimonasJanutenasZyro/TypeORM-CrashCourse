import { createConnection } from "typeorm"

const main = async () => {
    const connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5433,
        username: "laimonasjanutenas",
        password: undefined,
        database: 'typeorm'
    })

    console.log('aa')
}

main()