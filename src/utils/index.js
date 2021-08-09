import { URLS } from './constants'

export const getWhatsUrl = (text, url) => encodeURI(`${url || URLS.whatsapp}${text}`)
export const openWhatsUrl = (text) => window.open(getWhatsUrl(text), '_blank')
