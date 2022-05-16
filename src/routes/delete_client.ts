import express from "express"
import { Client } from "../entities/Client";
import { Transaction, TransactionTypes } from "../entities/Transaction";

const router = express.Router()


router.delete('/api/client/:clientId', async (req, res) => {
    const { clientId } = req.params

    const {
        type, amount
    } = req.body

    const response = await Client.delete(
        parseInt(clientId, 10)
    );

    return res.json(response)
});


export { router as deleteClientRouter }