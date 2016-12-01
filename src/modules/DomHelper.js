class DomHelper {

  OnDomReady(cb = undefined) {

    if (typeof cb !== "function") {
      return
    }

    !function (fn) {

      const dom = document

      if (dom.readyState != "loading") {
        fn()
      }
      else if (dom.addEventListener) {
        dom.addEventListener("DOMContentLoaded", fn)
      }
      else {
        dom.attachEvent("onreadystatechange", () => {
          if (dom.readyState != "loading") {
            fn()
          }
        })
      }
    }(cb)
  }

  noWindow() {
    return typeof window === "undefined"
  }

  findScrollableAncestor(node) {
    while (node.parentNode) {
      node = node.parentNode

      if (node === document) {
        // This particular node does not have a computed style.
        continue
      }

      if (node === document.documentElement) {
        // This particular node does not have a scroll bar,
        // it uses the window.
        continue
      }

      const style = window.getComputedStyle(node)
      const overflowY = style.getPropertyValue("overflow-y") ||
        style.getPropertyValue("overflow")

      if (overflowY === "auto" || overflowY === "scroll") {
        return node
      }
    }

    // A scrollable ancestor element was not found,
    // which means that we need to do stuff on window.
    return window
  }

  scrollPageTop() {
    return document.body.scrollTop || document.documentElement.scrollTop
  }

  queryAll(selectors = undefined, element = document) {

    if ("string" === typeof selectors) {
      return element.querySelectorAll(selectors)
    }

  }

  hasClass(el = false, className = "") {
    if (el.classList) {
      el.classList.contains(className)
    }
    else {
      new RegExp(`(^| )${className}( |$)`, "gi").test(el.className)
    }
  }

  addClass(el = false, className = "") {
    if (el.classList) {
      el.classList.add(className)
    }
    else {
      el.className += ` ${className}`
    }
  }

  removeClass(el = false, className = "") {
    if (el.classList) {
      el.classList.remove(className)
    }
    else {
      const classNames = className.split(" ").join("|")
      const regexClass = new RegExp(`(^|\\b)${classNames}(\\b|$)`, "gi")
      el.className = el.className.replace(regexClass, " ")
    }
  }

  replaceClass(el = false, oldClass = "", newClass = "") {
    this.removeClass(el, oldClass)
    this.addClass(el, newClass)
  }

  toggleClass(el = false, className = "") {
    if (el.classList) {
      el.classList.toggle(className)
    }
    else {
      const classeNames = el.className.split(" ")
      let existingIndex = -1

      for (let i = classeNames.length; i--;) {
        if (classeNames[i] === className) {
          existingIndex = i
        }
      }

      if (existingIndex >= 0) {
        classeNames.splice(existingIndex, 1)
      }
      else {
        classeNames.push(className)
      }

      el.className = classeNames.join(" ")
    }
  }

}

export default new DomHelper()
