export const MAX_MOBILE_WIDTH = 800

export const isMobile = () => {
  return window.outerWidth < MAX_MOBILE_WIDTH
}
