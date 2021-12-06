import Trust1 from '../assets/checkoutTrust/checkout1.png'
import Trust2 from '../assets/checkoutTrust/checkout2.png'

export default function TrustCheckout() {
    return (
        <div className="flex 
                        space-x-4 
                        mb-6 
                        transform 
                        scale-125">
            <div className="w-32">
                <img src={Trust1} alt='Trust'/>
            </div>
            <div className="w-32">
                <img src={Trust2} alt='Trust'/>
            </div>
      </div>
    )
}
