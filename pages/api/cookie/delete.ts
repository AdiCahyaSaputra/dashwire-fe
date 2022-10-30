import { deleteCookie } from 'cookies-next'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  deleteCookie('token', {
    req, res
  })

  deleteCookie('user', {
    req, res
  })

  return res.status(200).json({
    message: 'Cookie deleted',
  })

}
