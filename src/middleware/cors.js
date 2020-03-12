import cors from 'cors'

export const corsMiddleware = () => {
  return cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
}

export const setCorsHeader = (req, res, next) => {
  // CORS headers
  res.header('Access-Control-Allow-Origin', '*') // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS')
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Authorization,Content-type')
  if (req.method === 'OPTIONS') {
    res.status(200).send('OKIE !')
  } else {
    next()
  }
}
