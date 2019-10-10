const express=require('express')
const app=express()
const Todoroute=require('./routes/routes')


app.use(express.urlencoded({ extended: false }))

app.set('view engine','ejs')


app.use('/',Todoroute)

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>console.log('server running'))