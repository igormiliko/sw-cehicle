import { motion } from "framer-motion"

type props = { 
    txt: String,
}
const Button = ({txt}: props) => {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
            transition={{ duration: 0.3 }}
        >
            <button type="submit"
                    className="border-4
                            border-green-500
                            bg-green-500
                            hover:border-green-200
                            h-12                           
                            rounded-md
                            text-2xl
                            text-white
                            w-56
            ">
                {txt}
            </button>
        </motion.div>
    )
}

export default Button
