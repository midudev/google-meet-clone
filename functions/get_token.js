const twilio = require('twilio')

exports.handler = async function (context, event, callback) {
  const { ACCOUNT_SID, API_KEY_SID, API_KEY_SECRET } = context
  const accessToken = new twilio.jwt.AccessToken(ACCOUNT_SID, API_KEY_SID, API_KEY_SECRET)
  accessToken.identity = event.username
  
  const grant = new twilio.jwt.AccessToken.VideoGrant({
    room: 'miduroom'
  })

  accessToken.addGrant(grant)

  callback(null, {
    token: accessToken.toJwt()
  })
}