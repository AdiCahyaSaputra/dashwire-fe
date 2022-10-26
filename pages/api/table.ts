export default async function handler() {

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NjY3MDU5OTQsImV4cCI6MTY2NjcwOTU5NCwibmJmIjoxNjY2NzA1OTk0LCJqdGkiOiJ1VW83VkExZGdqcHVQUmZTIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.E6mlbkRX9HUJp1qtlQrXn-xVnYylmSidMiD7msWJ61s'
  const baseUrl = 'http://localhost:8000/'

  const data = {
    table_name: 'Siswa SMK',
    columns_info: [
      {
        name: 'nama',
        validation_rules: 'required|string|min:8'
      },
      {
        name: 'jurusan',
        validation_rules: 'required|string'
      }
    ],
    users: [
      {
        id: 2
      },
      {
        id: 3
      }
    ]
  }

  // const data = {
  //   table_name: 'Kontak SMK',
  //   columns_info: [
  //     {
  //       name: 'nisn',
  //       validation_rules: 'required|string|min:8'
  //     },
  //     {
  //       name: 'no_hp',
  //       validation_rules: 'required|numeric'
  //     }
  //   ]
  // }

  const req: any = await fetch(`${baseUrl}api/table/`, {
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
