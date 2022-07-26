export default class Cart {
  items = []

  add(item) {
    if (
      Object.values(this.items)
        .map(item => item.product.title)
        .includes(item.product.title)
    ) {
      return
    }
    this.items.push(item)
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price
    }, 0)
  }
}
