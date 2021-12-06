export default function Policy() {
    return (
        <div className="w-80 
                        pl-3 
                        flex 
                        flex-row 
                        items-center 
                        space-x-6
        ">
            <input type="checkbox" 
                   className="transform scale-150
            "/>
            <div>
                <p>
                    Ao clicar você concordar em continuar 
                    e com nossa <span className="text-blue-800">política de produtos</span>
                    </p>
            </div>
        </div>
    )
}
