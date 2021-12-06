import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className="fixed w-screen z-40">
            <header className="bg-gradient-to-b from-black to-gray-800 
                            flex
                            justify-center
                            h-24
                            pt-4 
                            shadow-xl
                            w-full
            ">
                <div className="flex 
                                justify-between 
                                pl-5 pr-5 
                                w-full 
                " >
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome}
                                className="text-white text-3xl mt-4 transform hover:scale-110
                        "/>
                    </Link>
                            <div className="mx-auto" >
                                <Link to="/success">
                                    <Logo />
                                </Link>
                            </div>
                    <Link to="/checkout">
                        <FontAwesomeIcon icon={faCartArrowDown} 
                                className="text-white text-3xl mt-4 mr-4 transform hover:scale-110
                        "/>
                    </Link>
                </div>
            </header>
        </div>
    );
}
