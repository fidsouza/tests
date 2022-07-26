import Cart from './Cart'

describe('Cart', () => {
  let cart
  let product = {
    title: 'Adidas running shoes',
    price: 3332,
  }

  beforeEach(() => {
    cart = new Cart()
  })

  it('should retorn 0 whtn getTotal() is executed in a new created instance', () => {
    expect(cart.getTotal()).toEqual(0)
  })

  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product,
      quantity: 2,
    }

    cart.add(item)

    expect(cart.getTotal()).toEqual(6664)
  })

  it('should ensure no more than on product exists at a time', () => {
    cart.add({
      product,
      quantity: 2,
    })

    cart.add({
      product,
      quantity: 1,
    })

    expect(cart.getTotal()).toEqual(6664)
  })
})
