export default async function handler() {

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NjY3MDU5OTQsImV4cCI6MTY2NjcwOTU5NCwibmJmIjoxNjY2NzA1OTk0LCJqdGkiOiJ1VW83VkExZGdqcHVQUmZTIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.E6mlbkRX9HUJp1qtlQrXn-xVnYylmSidMiD7msWJ61s'
  const baseUrl = 'http://localhost:8000/'

  const data = {
    table_id: '97960a10-4dc4-4dc1-8ca0-00022f4c36c3',
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
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

  })

  const res = await req.json()

  console.log(res)
}
