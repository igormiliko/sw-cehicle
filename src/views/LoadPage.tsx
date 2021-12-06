import React from 'react'
import Logo from '../components/Logo';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

import '../Animations.css'
import { motion } from 'framer-motion';

export default function LoadPage() {

    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div id="Load" 
                className="relative
                            bg-gradient-to-b from-gray-900 via-black to-indigo-900
                            flex
                            h-screen
                            items-center
                            justify-center
                            w-screen
            ">
                <div className="stars absolute z-0"></div>
                <div className="flex flex-col items-center w-screen z-30" >
                    <div id="spaceShip">
                        <Logo  />
                    </div>
                    <div>
                        <Link to="/Home">
                            <Button txt={'START'} />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
