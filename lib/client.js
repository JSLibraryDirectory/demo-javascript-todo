import rapid from '@rapid-io/client'

const API_KEY = 'MTMuNjQuNzcuMjAyOjgwODA='
const AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiMGU0NzAyOWUtMDY2OC00NGRhLWFkMDItZWQ4N2E5MmQzY2E4IiwicnVsZXMiOlt7ImNvbGxlY3Rpb24iOiIuKiIsInJlYWQiOnRydWUsImNyZWF0ZSI6dHJ1ZSwidXBkYXRlIjp0cnVlLCJkZWxldGUiOnRydWV9XX0.dV5Z67kgjpaD7jWzOTtmZJBsx_kcapcy2dZ2YCM4m-o'

const client = rapid.createClient(API_KEY)

const authorize = async () => {
  try {
    await client.authorize(AUTH_TOKEN)
  } catch (err) {
    throw err
  }
}

authorize()

export default client
export const todos = client.collection('next-rapid-demo')
