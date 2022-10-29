import { TOKEN } from 'lib/utils/TokenAuthUtils'

export default async function handler() {

  const baseUrl = 'http://localhost:8000/'

  const data = {
    table_id: '9797ef4a-9375-4619-b062-38e075ffa0dd',
    data: [
      {
        column_id: 1,
        values: 'Adi Cahya Saputra',
        type: 'string'
      },
      {
        column_id: 2,
        values: 'RPL',
        type: 'string'
      }
    ]
  }

  const req: any = await fetch(`${baseUrl}api/value/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

  })

  const res = await req.json()

  console.log(res)
}
