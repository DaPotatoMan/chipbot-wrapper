import type { ChipbotAPI } from './types'

window.asyncChipBotApi = window.asyncChipBotApi || []

export function loadChipbot(id: string, domain: string) {
  window.CHIPBOT_ID = id
  window.CHIPBOT_DOMAIN_ID = domain

  const script = document.createElement('script')
  script.src = 'https://static.getchipbot.com/edge/p/chipbot.js'
  script.async = true
  script.defer = true

  return new Promise<ChipbotAPI>((resolve, reject) => {
    script.onerror = reject
    script.onload = () => setTimeout(() => resolve(window.chipBotApi), 500)
    document.head.appendChild(script)
  })
}
