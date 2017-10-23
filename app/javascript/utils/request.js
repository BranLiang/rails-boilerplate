import { create } from 'apisauce'

export default function request (baseURL = 'https://api.github.com/') {
  return create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })
}
