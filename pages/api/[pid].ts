import { NextApiRequest, NextApiResponse } from 'next'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { pid } = req.query
  res.end(`Post: ${pid}`)
}
