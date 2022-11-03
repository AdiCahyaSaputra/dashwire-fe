import { setCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  if (req.body) {
    Object.keys(req.body).map(key => {

      const date = new Date()
      const time = req.body[key].time ?? 60 * 60

      date.setTime(date.getTime() + (time * 1000))
      setCookie(key, req.body[key].value ?? req.body[key], {
        req, res, httpOnly: true, expires: date
      })

    })
  }

  return res.status(200).json({
    message: 'Cookie is set'
  })

}
