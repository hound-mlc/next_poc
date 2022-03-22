// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Todo = {
    id: number;
    text: string;
}

const todoLangMap: {lang: string, todos: Todo[]}[] = [
  {
    lang: 'es',
    todos: [
      {
        id: 1,
        text: 'Estudiar SolidJS'
      },
      {
        id: 2,
        text: 'Probar vite'
      },
      {
        id: 3,
        text: 'Dormir'
      }
    ]
  },
  {
    lang: 'en',
    todos: [
      {
        id: 1,
        text: 'Study SolidJS'
      },
      {
        id: 2,
        text: 'Test vite'
      },
      {
        id: 3,
        text: 'Sleep'
      }
    ]
  }
]

type Error = {
  message: string;
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo[] | Error>
) {

  const availableLangs = ['es', 'en'];

  res.status(availableLangs.includes(req.query.lang as string) ? 200 : 404).json(todoLangMap.find(todoMap => todoMap.lang === req.query.lang)?.todos || { message: 'Language not available' })
}
