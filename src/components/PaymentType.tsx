import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faBarcode, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { observer } from 'mobx-react';
import paymantStore from '../Stores/storePaymentType';

function PaymentType() {
    function setPaymentMethod(method: string) {
        paymantStore.addPaymantType(method)
        console.log(paymantStore.loadPaymantType())
    }

    return (
        <div className="flex 
                        flex-row 
                        space-x-20
        ">
            <div onClick={() => setPaymentMethod('credit')}>
                <FontAwesomeIcon icon={faCreditCard} 
                                 className="text-7xl 
                                            text-green-500 
                                            hover:text-green-300
                "/>
                <p className="text-center 
                              text-blue-800">
                    Cartão
                </p>    
            </div>
            <div onClick={() => setPaymentMethod('ticket')}>
                <FontAwesomeIcon icon={faBarcode} 
                                 className="text-7xl 
                                            text-gray-500 
                                            hover:text-gray-300" 
                />
                <p className="text-center 
                              text-blue-800
                ">
                    Boleto
                </p>    
            </div>
      </div>
    )
}
export default observer(PaymentType);
