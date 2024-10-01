const Travel = require('../Models/Travel')


// exports.read = async (req, res) => {
//     try {
//         // code
//         const id = req.params.id
//         const producted = await Product.findOne({ _id: id }).exec();
//         res.send(producted)
//     } catch (err) {
//         // error
//         console.log(err)
//         res.status(500).send('Server Error')
//     }
// }

exports.list = async (req, res) => {
    try {
        // code
        const producted = await Travel.find({}).exec();
        res.send(producted)
    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}
exports.create = async (req, res) => {
    try {
        // code
        console.log(req.body,req.file)
        var data = req.body
        if (req.file){
            data.file = req.file.filename
        }

        const producted = await Travel(data).save()
        res.send(producted)
    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}
// exports.update = async (req, res) => {
//     try {
//         // code
//         const id = req.params.id
//         const updated = await Product
//             .findOneAndUpdate({ _id: id }, req.body, { new: true })
//             .exec()
//         res.send(updated)

//     } catch (err) {
//         // error
//         console.log(err)
//         res.status(500).send('Server Error')
//     }
// }
exports.remove = async (req, res) => {
    try {
        // code
        const id = req.params.id
        const removed = await Travel.findOneAndDelete({_id:id}).exec()
        res.send(removed)
    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}
