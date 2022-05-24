export interface ChipbotAPI {
  /** This is an experimental API. If you have use cases where you may want to dynamically configure ChipBot,
   * please reach out to support@getchipbot.com or ask a question in ChipBot on the bottom right. */
  setConfig(key: 'theme', value: 'light' | 'dark'): void

  eventManager: {
    on(event: 'visibleState', callback: (isVisible: boolean) => void): void
  }

  /**
   * Calling `open()` will always temporarily suspend any visibility rules configured on ChipBot.
   * This makes it convenient to have ChipBot hidden by default but triggered manually through custom open calls.
   * Anytime the user closes ChipBot or if `close()` is called, visibility rules will be re-enabled.
   */
  open(): void

  /** Show ChipBot Visibility */
  show(): void

  /** Hide ChipBot Visibility */
  hide(): void

  /** Render ChipBot Button */
  renderBaseIcon(target: Element): void

  /** Show Pylon
   * @param id Pylon id */
  showVideoIcon(id: string): void

  /** Hide Pylon */
  hideVideoIcon(): void

  /** Open Pylon
   * @param id Pylon id */
  showVideoExperience(id: string): void

  /** Open Knowledge Base Article
   * @param id Article id */
  kbOpenArticle(id: string): void

  /** Open Knowledge Base Article in a Modal
   * @param id Article id */
  kbOpenArticleModal(id: string): void

  /** Product Information */
  getProductInfo(): void

  /** Session Information */
  getSessionInfo(): void

  /** Open Category
   * @param id Category Node ID */
  kbOpenCategory(id: string): void

  /** Open Calendly Booking */
  openBookingForm(): void

  /** List all registered Pylons */
  getVideoExperienceList(): void

  /** Ask Form **/
  openAskQuestionForm(email?: string): void

  /** Feedback Form **/
  openFeedbackForm(email?: string): void
}

export interface DefineChipbotConfig {
  id: string
  domainId: string
  onload?: (this: ChipbotAPI) => void
}

declare global {
  interface Window {
    CHIPBOT_ID: string
    CHIPBOT_DOMAIN_ID: string
    chipBotApi: ChipbotAPI
    asyncChipBotApi: any[]
  }
}
