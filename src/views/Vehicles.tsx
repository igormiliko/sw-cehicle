import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../components/Card";

import PHOTO_VEHICLES from "../assets/vehicles/vehicles";
import { motion } from "framer-motion";

function Vehicles() {
    let [vehicles, setVehicles] = useState(Array)   
    
    async function getSWAPI() {
        const URL = 'https://swapi.dev/api/vehicles/'
        await axios.get(URL).then(res => setVehicles(res.data.results))
    }
    function queryPathImg(findVehicle: string) {
        const [path] = PHOTO_VEHICLES.map(vehicle => {
                        let path
                        for(const [vehicleName, value] of Object.entries(vehicle)) {
                            path = vehicleName === findVehicle ? value : ''
                        }
                        return path
                    }).filter(each => each !== '')
        return path
    }
    useEffect(() => {    
       getSWAPI()
    },[])
    return (
        <motion.div
            initial={{ translateX: '-33px', opacity: 0}}
            animate={{ translateX: '0px', opacity: 1 }}
            exit={{ translateX: '33px', opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="h-auto w-screen">
                <div className="shadow-xl py-8 text-6xl text-gray-600 w-screen text-center">
                    <h1>Veículos</h1>
                </div>
                <div className="w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center mt-10">
                    {   
                        vehicles?.map( 
                            (vehicle: any) => {
                                // console.log()
                                vehicle.cost_in_credits = vehicle.cost_in_credits === 'unknown' ?
                                                            String(Math.round(Math.random() * 100000)) :
                                                            vehicle.cost_in_credits
                                return(
                                    <div className="mt-6">
                                        <Card img={queryPathImg(vehicle.name)}
                                            name={vehicle.name}
                                            price={vehicle.cost_in_credits}
                                            company={vehicle.manufacturer}
                                        />
                                    </div>
                                );
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Vehicles
