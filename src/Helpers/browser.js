export function getWindowScrollTop () {
  return (window.pageYOffset !== undefined) ?
    window.pageYOffset :
    (document.documentElement || document.body.parentNode || document.body).scrollTop
}

export function isChrome() {
  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)

}

export function isSafari() {
  return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
}

function animate(elem, style, unit, from, to, time, prop) {
  if (!elem) return
  const start = new Date().getTime(),
    timer = setInterval(function() {
      const step = Math.min(1, (new Date().getTime() - start) / time)
      if (prop) {
        elem[style] = (from + step * (to - from)) + unit
      } else {
        elem.style[style] = (from + step * (to - from)) + unit
      }
      if (step === 1) clearInterval(timer)
    }, 25)
  elem.style[style] = from + unit
}

export function pageScrollTopAnimate(to, time) {
  const isChromeOrSarari = isChrome() || isSafari()
  const element = isChromeOrSarari ? document.body : document.querySelector('body,html')
  animate(element, 'scrollTop', '', getWindowScrollTop (), to, time, true)
}
