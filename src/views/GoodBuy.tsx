import { Link } from "react-router-dom"
import Button from "../components/Button"
import robots from '../assets/robots.svg'
import { motion } from "framer-motion"
import Confetti from 'react-confetti'
import { useEffect, useState } from "react"

interface Size {
    width: number | undefined;
    height: number | undefined;
}

export default function GoodBuy() {
    // Hook
    function useWindowSize(): Size {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
        });
        useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }

    const { width, height } = useWindowSize()

    return (
        <motion.div
        initial={{ translateX: '-33px', opacity: 0}}
        animate={{ translateX: '0px', opacity: 1 }}
        exit={{ translateX: '33px', opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
            <Confetti
                width={width}
                height={height}
            />
            <div className="relative 
                            h-screen 
                            w-screen
                            overflow-y-hidden
            ">
                <div className="flex 
                                h-auto 
                                w-screen 
                                justify-center 
                                items-center
                ">
                    <div className="absolute 
                                    w-full 
                                    text-center 
                                    z-40 
                                    mt-40 
                                    sm:mt-0 
                                    max-w-sm
                                    lg:-mt-32
                    ">
                        <p className="text-5xl 
                                      text-green-500
                        ">
                            &#x1F973;Parabéns&#x1F973;
                        </p>
                            <p className="text-4xl 
                                        text-blue-800 
                                        mt-6
                                        pl-4 
                                        pr-4
                            " >
                                Você acabou de adquirir o seu primeiro 
                                veículo da saga Star Wars!!
                                Sua equipe te aguarda para mais uma corrida!
                            </p>
                        <Link to="/vehicles">
                            <div className="mt-6">
                                <Button txt={'VEÍCULOS'} />
                            </div>
                        </Link>
                    </div>
                    <div className="mt-32 
                                    opacity-5 
                                    z-0
                    ">
                        <img src={robots} alt="robots" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
