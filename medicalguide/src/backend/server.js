import knex from 'knex'
import express from 'express'
import bodyParser from 'body-parser'
import knexPostgis from 'knex-postgis'
import clinics from '../data/DataClinics.json' assert { type: "json" };
import cors from 'cors'

const app = express()
app.use(cors())

app.use(bodyParser.json())
const myclinics = clinics.features

function unicodeToChar(text) {
    return text.replace(/\\u[\dA-F]{4}/gi, 
           function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
           });
 }


app.get('/get_data', (req, res)=>{

    res.send("test.users")
})
const db = knex({
    client:'pg',
    connection: {
        host: '127.0.0.1',
        user: 'nafissa',
        password: '1809',
        database: 'medicalguide'
    }
});
const st = knexPostgis(db)

console.log(db('clinics').withSchema('public').select('*').where('id', 1))

app.post('/add_element', (req, res)=>{
    myclinics.forEach((feature)=>{
                db('clinics').insert({
                    name: unicodeToChar(feature.properties.name) ,
                    address: "adresse" in feature.properties ? feature.properties['adresse'] : "addresse non disponible",
                    rating: 4,
                    geom: st.geomFromText(st.asText(st.geomFromGeoJSON(feature.geometry)), 4326),
                    phone: "phone" in feature.properties ? feature.properties['phone'] : "mobile  non disponible"
                }).then(console.log)

    })
    
      res.json("success maybe")
})
app.get('/getitems', (req, res)=>{
    console.log(db('clinics').select("*"))
    res.send(db('clinics').select("*"))
})
app.post('/delete_item', (req, res)=>{
    db('clinics')
  .del().where('id', '=', '1').then(console.log)
  res.send("success")

})

app.post('/delete_all', (req, res)=>{
    db('clinics')
  .del().then(console.log)
  res.send("success")

})

app.listen(5000, ()=>{
    console.log('test')
})