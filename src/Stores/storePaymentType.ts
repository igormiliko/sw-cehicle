import { observable, action } from "mobx";

class PaymantTypeStore {
    @observable PaymantType: string = ''

    @action
    loadPaymantType = () => {
        return this.PaymantType
    }

    @action 
    addPaymantType = (PaymantType: string) => {
        this.PaymantType = PaymantType
    }
}

const paymantStore = new PaymantTypeStore()

export default paymantStore