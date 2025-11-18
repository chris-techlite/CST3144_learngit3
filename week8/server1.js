const express = require('express');
const app = express();

app.use(express.json());
app.set('port', 3000);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  next();
});
const mongoclient = require('mongodb').MongoClient;

let db;
mongoclient.connect('mongodb+srv://Christain_CO:monday@cluster0.jvuabsa.mongodb.net', (err, client) => {
    db = client.db('webstore')
    });
    app.get('/', (req, res) => {
      res.send('select a collection, e.g., /collection/messages')
    })
    app.param('collectionName', (req, res, next, collectionName) => {
      req.collection = db.collection(collectionName)
      return next()
    })
app.get('/collection/:collectionName', (req, res) => {
  req.collection.find({}).toArray((e, results) => {
    if (e) return next(e)
    res.send(results)
  })
})
app.post('/collection/:collectionName', (req, res, next) => {
  req.collection.insert(req.body, (e, results) => {
    if (e) return next(e)
    res.send(results.ops)
  })
})
const objectId = require('mongodb').ObjectId;
app.get('/collection/:collectionName/:id', (req, res, next) => {
  req.collection.findOne({_id: new objectId(req.params.id)}, (e, result) => {
    if (e) return next(e)
    res.send(result)
  })
})
app.put('/collection/:collectionName/:id', (req, res, next) => {
  req.collection.update(
    {_id: new objectId(req.params.id)},
    {$set: req.body},
    {safe: true, multi: false},
    (e, result) => {
      if (e) return next(e)
      res.send((result.result.n === 1) ? {msg: 'success'} : {msg: 'error'})
    }
  )
})


app.delete('/collection/:collectionName/:id', (req, res, next) => {
  req.collection.deleteOne(
    {_id: objectId(req.params.id)},
    (e, result) => {
      if (e) return next(e)
      res.send((result.result.n === 1) ? {msg: 'success'} : {msg: 'error'})
    }
  )
})
app.listen(3000, () => {
  console.log(`Expressjs server running at localhost:3000`)
})