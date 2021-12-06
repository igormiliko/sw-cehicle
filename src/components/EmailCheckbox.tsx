import React from 'react'

export default function EmailCheckbox() {
    return (
        <div className="w-80 
                        pl-3 
                        flex 
                        flex-row 
                        items-center 
                        space-x-6
        ">
            <input type="checkbox"
                   className="transform 
                              scale-150
            "/>
            <div>
                <p>
                    Você gostaria de receber as melhores novidades vindas do espaço em seu email?
                </p>
            </div>
        </div>
    )
}
