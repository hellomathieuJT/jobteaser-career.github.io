Element.prototype.originalAddEventListener = Element.prototype.addEventListener

Element.prototype.addEventListener = function (type, fct, capture) {
  // init
  this.eventListenerList = this.eventListenerList || {}
  this.eventListenerList[type] = this.eventListenerList[type] || []
  capture = capture || false
  // call original method
  this.originalAddEventListener(type, fct, capture)
  // save the event into a list
  this.eventListenerList[type].push({
    listener: fct,
    useCapture: capture,
  })
}

Element.prototype.getEventListeners = function (type) {
  console.log(this.eventListenerList)
  this.eventListenerList = this.eventListenerList || {}
  return type in this.eventListenerList ? this.eventListenerList[type] : []
}
