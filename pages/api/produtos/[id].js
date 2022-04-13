import { removeProduto } from '../../lib/produtos.js'

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        const { sku, nome, estoque, categoria } = req.body
        const produto = await createProduto({sku, nome, estoque, categoria})
        return res.status(203).json({data: produto})
    }
}