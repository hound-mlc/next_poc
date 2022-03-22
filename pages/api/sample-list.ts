// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Item = {
    id: number;
    text: string;
}

const itemList: Item[] = [
      {
        id: 1,
        text: 'Sample List 1'
      },
      {
        id: 2,
        text: 'Sample List 2'
      },
      {
        id: 3,
        text: 'Sample List 3'
      }
]

type Error = {
  message: string;
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  res.status(200).json(itemList)
}
