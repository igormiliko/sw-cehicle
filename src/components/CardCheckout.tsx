import RobotsImg from '../assets/robots.svg'

type CardCheckoutProps = {
    img: String,
    alt: String,
    name: String,
    price: Number,
    company: String

}

const CardCheckout = ({
    img,
    alt,
    name,
    price,
    company,
}: CardCheckoutProps) => {
    return (
        <div className="border 
                        border-gray-200
                        break-words
                        h-auto
                        pb-8 
                        w-80
      ">
        <div className={`${img === undefined ? 'opacity-5' : ''} w-64 mx-auto mt-8`}>
          <img src={img === undefined ? RobotsImg : String(img)} alt={String(alt)} />
        </div>
          <div className="w-64 
                          mx-auto 
                          mt-4 
                          space-y-2
          ">
            <p className="text-blue-300 
                          text-2xl
            ">
              {name}
            </p>
            <p className="text-gray-400 
                          text-lg
            ">
              C${price}
            </p>
            <p className="text-gray-600 
                          text-3xl
            ">
              <span className="text-blue-800">
                Company:</span> {company}
            </p>
          </div>
      </div>
    )
}

export default CardCheckout
