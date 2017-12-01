import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import session from 'express-session'

import routes from './app/routes'

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

const secret = process.env.SESSION_SECRET

app.use(session({ secret, resave: true, saveUninitialized: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

routes(app)

app.listen(port, () => console.log(`Listening on ${port}`))
