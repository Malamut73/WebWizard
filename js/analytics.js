function createAnalytics(){
    let counterService = 0
    let counterStaff = 0
    let counterPrice = 0
    let counterContact = 0
    let counterOrders = 0

    const listenerService = () => counterService++
    const listenerStaff = () => counterStaff++
    const listenerPrice = () => counterPrice++
    const listenerContact = () => counterContact++
    const listenerOrders = () => counterOrders++

    const service = document.querySelector('.services-counter')
    const staff = document.querySelector('.staff-counter')
    const price = document.querySelector('.price-counter')
    const contact = document.querySelector('.contacts-counter')
    const orders = document.querySelectorAll('order-counter')

    service.addEventListener('click', listenerService)
    staff.addEventListener('click', listenerStaff)
    price.addEventListener('click', listenerPrice)
    contact.addEventListener('click', listenerContact)
    orders.forEach(order => {
        order.addEventListener('click', listenerOrders);
    });

    return {
        getCounters(){
            return `Клики по услугам: ${counterService}
            Клики по персоналу: ${counterStaff}
            Клики по цене: ${counterPrice}
            Клики по контактам: ${counterContact}
            Клики по заказать: ${counterOrders}`;
        },

        resetCounter(){
            counterService = 0
            counterStaff = 0
            counterPrice = 0
            counterContact = 0
            counterOrders = 0
        }

    }
}

window.analytics = createAnalytics()