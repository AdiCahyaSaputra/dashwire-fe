import { deleteCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const cookies = ['access_token', 'user', 'tables']

  for (const cookie of cookies) {
    deleteCookie(cookie, {
      req, res
    })
  }


  return res.status(200).json({
    message: 'Cookie deleted',
  })

}
