const http = require('http')
const url = require('url')


class Router extends Map {
  constructor (notFoundFn) {
    if (typeof notFoundFn !== 'function') throw new Error('notFoundFn must be function')

    super()
    this.notFoundFn = notFoundFn
  }

  get (path, fn) {
    if (typeof path !== 'string') throw new Error('path must be string')
    if (typeof fn !== 'function') throw new Error('fn must be function')

    super.set(path, fn)
  }

  post (path, fn){
    if (typeof path !== 'string') throw new Error('path must be string')
    if (typeof fn !== 'function') throw new Error('fn must be function')
    
    
    super.set(path, fn)
  }

  dispatch (req, res) {
    if (!(req instanceof http.IncomingMessage)) throw new Error('req must be IncomingMessage')
    if (!(res instanceof http.ServerResponse)) throw new Error('req must be ServerReponse')

    const reqUrl = url.parse(req.url, true)

    if (super.has(reqUrl.pathname)) {
      var handlerFn = super.get(reqUrl.pathname)
      handlerFn(req, res)
      return
    } else {
      this.notFoundFn(req, res)
    }
  }
}

module.exports = Router