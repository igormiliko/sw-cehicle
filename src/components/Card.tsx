import React, { useState } from 'react'
import Button from './Button'
import { useHistory } from 'react-router'
import { motion } from 'framer-motion'

import { observer } from 'mobx-react'
import store from '../Stores/storeVehicle'

type props = {
  img: any,
  name: string,
  price: string,
  company: string,
}


const Card = (
  {
    img,
    name,
    price,
    company,
  }: props ) => {

    const history = useHistory()
    const [isClick, setClick] = useState(false)

    function addVehicle() {
      setClick(true)
      const vehicle = {
        img,
        name,
        price,
        company,
      }
      store.addVehicle(vehicle)
      console.log(vehicle)
      setTimeout(() => {
        history.push('/checkout')
      }, 600)
    }
    return (
      <motion.div
        whileHover={{translateY: -25}}
        transition={{duration: 0.3}}
      >
        <div className="h-96
                        rounded-lg
                        shadow-xl
                        w-72 
        " >
          <div className="rounded-t-lg 
                          max-h-54 
                          overflow-hidden
          ">
            <motion.div
              whileHover={{scale: 1.05}}
              transition={{duration: 0.3}}>
              <img src={String(img)} alt=""/>
            </motion.div>
          </div>
          <div className="flex 
                          justify-center 
                          w-full 
                          pt-4
          ">
            <div className="space-y-2 
                            text-center
            ">
              <p className="text-lg 
                            text-blue-300
              ">
                {name}
              </p>
                <p className="text-3xl 
                              text-gray-400
                ">
                  {price}
                </p>
            </div>
          </div>
          <div className="w-full 
                          flex 
                          justify-center mt-2" 
              onClick={() => addVehicle()}
          >
            <Button txt={'COMPRAR'} />
          </div>
      </div>
    </motion.div>
    )
}

export default observer(Card)
