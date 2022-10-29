// Interface 
import ResponseInterface from 'lib/interface/ResponseInterface'

export const BASE_API_URL = 'http://localhost:8000/api'

export const RESPONSE = ({ status, message, data }: ResponseInterface) => {
  return {
    status: status ?? 200,
    message,
    data: data ?? []
  }
}
