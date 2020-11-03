import express from 'express'
import { resolve } from 'path'

const app = express()

app.use(express.static(resolve(__dirname, '..', '..', '..', 'public')))
app.set('views', resolve(__dirname, '..', '..', '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('views engine', 'html')

app.use('/', (req, res) => {
    res.render('index.html')
})


export default app