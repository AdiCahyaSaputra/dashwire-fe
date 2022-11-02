import { setCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  if (req.body) {
    Object.keys(req.body).map(key => {

      const date = new Date()
      const days = req.body[key].days ?? 1

      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      setCookie(key, req.body[key], {
        req, res, httpOnly: true, expires: date
      })

    })
  }

  return res.status(200).json({
    message: 'Cookie is set'
  })

}
