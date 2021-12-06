import { Field } from 'formik'

type props = {
    label: String,
    typed: String,
    id: String,
    name: String
}

const LargeInput = ({
    label,
    typed,
    id,
    name
}: props) => {
    return (
    <div className="flex 
                    flex-col 
                    space-y-1
    ">
        {/* <label className="text-sm text-gray-400">
            {label}:
        </label> */}
        <Field id={String(id)}
               name={String(name)}
               placeholder={String(label)}
               type={String(typed)} 
               className="border-b-2
                          border-blue-800 
                          text-lg
                          h-12 
                          outline-none 
                          px-4
                          w-80 
                          hover:shadow-xl
        "/>
    </div>
    )
}

export default LargeInput
