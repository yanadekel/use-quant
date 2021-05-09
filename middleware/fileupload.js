const multer = require('multer');

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(xlsx|xlsm|xlsb|)$/)) {
            return cb(new Error('Please upload an Excel file '))
        }

        cb(undefined, true)
    }
});

module.exports = upload;