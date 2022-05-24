import type { ChipbotAPI, DefineChipbotConfig } from './types'
import { loadChipbot } from './loader'

let isInit = false

export const chipbot = new Proxy({} as ChipbotAPI, {
  get: (_, key: keyof ChipbotAPI) => window.chipBotApi?.[key] || (() => {
    console.warn('Chipbot not loaded yet. Calling:', key)
  })
})

export function defineChipbot(config: DefineChipbotConfig) {
  if (isInit)
    return

  isInit = true

  loadChipbot(config.id, config.domainId)
    .then(() => config.onload?.call(chipbot))
    .catch(() => isInit = false)

  return chipbot
}
