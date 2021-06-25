// Run `node index.js` in the terminal

import { NextApiRequest, NextApiResponse } from 'next'
const hltb = require('howlongtobeat')

const hltbService = new hltb.HowLongToBeatService()

const searchTitle = (text: string) => {
  console.log(`Searching for: ${text}`)

  return new Promise((resolve, reject) => {
    hltbService
      .search(text)
      .then((results: any, ...rest: any[]) => {
        console.log({ results, rest })
        resolve(results)
      })
      .catch(reject)
  })
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
