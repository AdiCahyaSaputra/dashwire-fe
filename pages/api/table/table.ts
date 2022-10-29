import { TOKEN } from 'lib/utils/TokenAuthUtils'
import { NextApiResponse } from 'next'

export default async function handler(response: NextApiResponse) {

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
      'Authorization': `Bearer ${TOKEN}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

  })

  const res = await req.json()

  console.log(res)
  // return response.status(200).json({
  //   message: res.message
  // })
}
