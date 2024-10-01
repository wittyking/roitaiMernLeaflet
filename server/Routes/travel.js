const express = require('express')
const router = express.Router()

const {
    // read,
    list,
    create,
    // update,
    remove
} = require('../Controllers/travel')

const { upload } = require('../Middleware/upload')


//http://localhost:5000/api/product
router.get('/travel', list)
// router.get('/product/:id', read)
router.post('/travel',upload, create)
// router.put('/product/:id', update)
router.delete('/travel/:id', remove)




module.exports = router