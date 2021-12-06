import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function ToastWarning() {
    return (
    <div className="flex 
                    flex-col 
                    justify-center 
                    items-center 
                    text-3xl 
                    text-center 
                    text-white 
                    shadow-xl 
                    w-80 h-auto 
                    py-4 
                    px-4
                    rounded-lg 
                    bg-red-600
                    relative
    ">
        {/* <FontAwesomeIcon icon={faTimes}
                         className="absolute top-2 right-2 text-sm cursor-pointer text-white
        "/>         */}
        <p>Confira todos os dados</p>
        <div className="space-x-4 
                        mt-2">
            <FontAwesomeIcon icon={faExclamationTriangle} 
                             className="text-yellow-400
            "/>
            <FontAwesomeIcon icon={faExclamationTriangle} 
                             className="text-yellow-400
            "/>
            <FontAwesomeIcon icon={faExclamationTriangle} 
                             className="text-yellow-400
            "/>
        </div>
    </div>
    )
}
