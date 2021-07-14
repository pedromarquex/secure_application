const { Router } = require('express')

const router = Router()

router.get('/', (request, response) => {
    return response.json({ ok: true })
})

module.exports = router