import {Request, Response} from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Victor',
    email: 'victor@gmail.com',
    password: '123456',
    techs: [
      'React', 
      'ReactNative',
      {title: 'JavaScript', experience: 100}
    ]
  })

  return response.json(user)
}