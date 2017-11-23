class Order {
    constructor (
        public id: string,
        public address: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItens: OrderItem[] = []
    ){}
}

class OrderItem {
    constructor (public quantity: number, public menuId: string){}
}

export {Order, OrderItem}