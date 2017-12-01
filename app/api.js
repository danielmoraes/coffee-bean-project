import fetch from 'isomorphic-fetch'

import config from '../config'

export const SocialId = {
  getUserInfo: (token) => {
    const { fields } = config.socialId
    const secret = process.env.SOCIALID_APP_SECRET
    const base = 'https://api-staging.socialidnow.com/v1/marketing/login/info'
    return fetch(`${base}?api_secret=${secret}&token=${token}&fields=${fields}`)
  }
}

export default {
  SocialId
}
