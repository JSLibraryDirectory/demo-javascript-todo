import rapid from 'rapid-io'

const API_KEY = 'ZGVtby13cy1zZXJ2aWNlLnJhcGlkLmlv'

const client = rapid.createClient(API_KEY)

export default client
export const todos = client.collection('next-rapid-demo')
