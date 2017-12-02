import { SocialId } from './api'

const isLoggedIn = (req, res, next) =>
  req.session.user ? next() : res.redirect('/')

export default (app) => {
  app.get('/', (req, res) => {
    const appId = process.env.SOCIALID_APP_ID
    res.render('login.ejs', { appId })
  })

  app.get('/private', isLoggedIn, (req, res) => {
    res.render('private.ejs', { user: req.session.user })
  })

  app.get('/logout', (req, res) => {
    req.session.user = null
    res.redirect('/')
  })

  app.post('/auth', (req, res, next) => {
    const { token } = req.body
    SocialId.getUserInfo(token).then(response => {
      response.json().then(user => {
        req.session.user = user
        res.redirect('/private')
      })
    })
  })
}
