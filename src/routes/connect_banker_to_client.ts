import express from "express"
import { Client } from "../entities/Client";
import { Banker } from "../entities/Banker";
import { Transaction, TransactionTypes } from "../entities/Transaction";

const router = express.Router()


router.put('/api/banker/:bankerId/client/:clientId', async (req, res) => {
    const { bankerId, clientId } = req.params

    const client = await Client.findOne(
        { where: { id: parseInt(clientId, 10) } }
    );

    const banker = await Banker.findOne(
        { where: { id: parseInt(bankerId, 10) } }
    );

    if (!client || !banker) {
        return res.json({ msg: 'Not found' })
    }

    banker.clients = [
        client
    ]

    await banker.save()

    return res.json(banker)
});


export { router as connectBankerToClientRouter }