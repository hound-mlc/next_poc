// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
  id: number;
  name: string;
  age: number;
}

type Error = {
    message: string;
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
    },
    {
        id: 3,
        name: 'Santiago',
        age: 50
    }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Error>
) {
    const user = users.find((user: User) => user.id === +req.query.id);
    res.status(user ? 200 : 404).json(user ? user : {message: 'No user found'});
}
