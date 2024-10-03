const multer = require('multer')

const storage = multer.diskStorage({
  destination: function ( req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const encodeFilename = Buffer.from(file.originalname, 'latin1').toString('utf-8')
    const uniqueSuffix = Date.now() + '-'+ Math.round(Math.random() * 1E9)
    cb(null, 'ROITAI-'+Date.now()+ '-'+encodeFilename)
  }
})

exports.upload = multer({storage:storage}).single('file')