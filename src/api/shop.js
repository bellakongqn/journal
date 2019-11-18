const _products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2,src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1852638158,294812004&fm=26&gp=0.jpg'},
    {"id": 2, "title": "H&M T-Shirt", "price": 10.99, "inventory": 10,src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1932044032,2016526258&fm=26&gp=0.jpg'},
    {"id": 3, "title": "Charli XCX", "price": 19.99, "inventory": 5,src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=497783299,2210513014&fm=26&gp=0.jpg'}
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 100)
    },
  
    buyProducts (products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
          ? cb()
          : errorCb()
      }, 100)
    }
  }