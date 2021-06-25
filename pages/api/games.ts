// Run `node index.js` in the terminal

import { NextApiRequest, NextApiResponse } from 'next'
import { Game } from '../../components/types'
const hltb = require('howlongtobeat')

const hltbService = new hltb.HowLongToBeatService()

const searchTitle = async (text: string): Promise<Game[]> => {
  console.log(`Searching for: ${text}`)
  const results = await hltbService.search(text)
  return results
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const searchText = req.query.q as string
    const titles = await searchTitle(searchText)

    return res.send(titles)
  } catch (e) {
    console.error(e)
    res.status(500).send(e.message)
  }
}
