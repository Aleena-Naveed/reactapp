var express = require('express');
var multer = require('multer');
var mongoose = require('mongoose');
var fs = require('fs');
var Schema = mongoose.Schema;
var router = express.Router();


const materialSchema = new Schema({
  title: {
    type: String
  },
  material: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
  },
  rating: {
    type: String,
    default: 'N/A'
  },
  filename: {
    type: String
  }
})

const Material = new mongoose.model('Material', materialSchema)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, 'material/' + file.originalname)
  }
})

const upload = multer({ storage: storage }).single('file')

router.post('/upload', upload, (req, res, next) => {
  const description = req.body.description
  const title = req.body.title
  upload(req, res, (err) => {
    if (err) {
      res.sendStatus(500);
    }
  })
  const material = new Material({
    filename: req.file.originalname,
  })
  material.description = description
  material.title = title
  material.material.data = fs.readFileSync(req.file.path);
  material.material.contentType = req.file.mimetype;
  material.save((err, rec) => {
    if (err)
      res.json({
        success: false,
        err: err
      })
    else
      res.json({
        success: true,
        data: rec
      })
  })
});

router.get('/getList', (req, res) => {
  Material.find({}, (err, rec) => {
    if (err)
      res.json({
        success: false,
        err: err.name
      })
    else if (rec.length > 0) {
      res.json({
        success: true,
        rec: rec
      })
    }
    else {
      res.json({
        success: false,
        err: 'No Material Found'
      })
    }

  })
})

router.delete('/delete/:id', (req, res) => {
  Material.findByIdAndRemove(req.params.id, (err, data) => {
    if (err)
      res.json({ success: false })
    else {
      res.json({ success: true })
    }
  })
})

router.patch('/rate', (req, res) => {
  Material.findById(req.body.id, (err, data) => {
    if (err)
      res.json({ success: false })
    else if (data) {
      data.rating = req.body.rating
      data.save((err) => {
        if (err)
          res.json({ success: false })
        else
          res.json({ success: true })
      })
    }
    else
      res.json({ success: false })
  })
})

router.patch('/title', (req, res) => {
  Material.findById(req.body.id, (err, data) => {
    if (err)
      res.json({ success: false })
    else if (data) {
      data.title = req.body.title
      data.save((err) => {
        if (err)
          res.json({ success: false })
        else
          res.json({ success: true, msg: 'title changed' })
      })
    }
    else
      res.json({successs: false})   
  })
  
})
module.exports = router;
