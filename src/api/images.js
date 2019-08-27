
import request from '@/utils/request'

export const apiGetBeautyImages = (params = {}) => {
  return request.get('/apiopen/getImages', { params })
}