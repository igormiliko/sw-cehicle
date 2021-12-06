import { motion } from 'framer-motion'
import homeImg from '../assets/home_back1.png'
import Earth from '../assets/planets/earth.png'
import Saturn from '../assets/planets/saturn.png'
import Button from '../components/Button'

import '../Animations.css'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
            <div className="h-screen z-10 sm:h-full md:h-screen sm:pb-6 lg:w-screen bg-gradient-to-b from-gray-900 via-black to-indigo-900 ">
                <div className="flex
                                justify-center
                                w-screen
                ">
                    
                        <div className="floating absolute md:bottom-16 lg:bottom-8 lg:w-44 z-0 w-32 -bottom-24 md:w-52">
                            <img src={Earth} alt="Terra"/>
                        </div>

                    <motion.div animate={{translateZ: 500 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                        <div className="z-40 mt-12 md:mt-52 lg:mt-12 w-80">
                            <Link to="/vehicles">
                                <img src={homeImg} alt="spaceShip"/>
                            </Link>
                        </div>
                    </motion.div>
                    <div className="stars absolute z-0"></div>
                </div>
                    <motion.div animate={{translateZ: 500 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                        <p className="text-white text-center px-12 md:px-32 text-xl md:text-3xl lg:px-72 lg:text-2xl mt-6">
                            Em uma longa e distante galáxia se 
                            esconde o seu maior tesouro, aqule 
                            que habita no coração de cada geek, 
                            almejando ser descoberto como que um gênio na garrafa...
                        </p>
                        <div className="z-40 text-center mt-6" >
                            <Link to="/vehicles">
                                <Button txt="EMBARCAR" />
                            </Link>
                        </div>
                    </motion.div>
            </div>
        </motion.div>
    )
}
