import { setCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const date = new Date()
  const days = 1

  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))

  setCookie('token', req.body.token, {
    req, res, httpOnly: true, expires: date
  })

  setCookie('user', req.body.user, {
    req, res, httpOnly: true, expires: date
  })

  return res.status(200).json({
    message: 'Cookie is set'
  })

}
