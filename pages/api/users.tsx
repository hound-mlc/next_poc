// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
  id: number;
  name: string;
  age: number;
}

const users = [
    {
        id: 1,
        name: 'Manuel',
        age: 25
    },
    {
        id: 2,
        name: 'Paco',
        age: 50
    }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
    res.status(200 ).json(users);
}