import { handleGet, handlePost } from './axios'
import { QUERY_SPONSOR } from '../contants/apis'

const baseUrl = 'http://44.211.208.152'

export const querySponsor = (params) => {
  const url = baseUrl + QUERY_SPONSOR
  return handleGet({url, params})
}
