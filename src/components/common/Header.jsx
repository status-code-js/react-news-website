import React, {useState} from 'react'
import {Link} from "react-router-dom";

function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const [arrowRotation, setArrowRotation] = useState(0)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showDesktopMenu, setShowDesktopMenu] = useState(false)
    const [showCrossIcon, setShowCrossIcon] = useState(false)

    const links = [
        {text: 'Finanzas & Leyes', url: '/finanzas'},
        {text: 'Gastronomía', url: '/gastronomía'},
        {text: 'Educación', url: '/educación'},
        {text: 'Cultura de Negocios', url: '/negocios'},
        {text: 'Salud', url: '/salud'},
        {text: 'Networking', url: '/networking'},
        {text: 'Deporte', url: '/deporte'},
        {text: 'Turismo', url: '/turismo'},
        {text: 'Tendencias & Moda', url: '/tendencias'},
    ]

    const rotateArrow = () => {
        setArrowRotation(rotation => rotation + 180)
    }

    const changeMenu = () => {
        setShowMobileMenu(!showMobileMenu)
        setShowDesktopMenu(!showDesktopMenu)
        setShowCrossIcon(!showCrossIcon)
    }

    const mobileMenuIconClass = `mobile-menu__icon ${showCrossIcon ? 'cross-icon' : ''}`;

  return (
    <div className="text-color1">
        <div className="bg-color2 pt-2 pb-2">
            <div className="max-w-7xl m-0 m-auto px-4">
             <div className="flex justify-between items-center w-full" >
                <div className="flex justify-between gap-10 items-center">
                      <Link onClick={() => {
                          setShowMenu(!showMenu)
                          rotateArrow()
                      }} className="ease-in-out duration-200 hover:opacity-80"
                      >
                          <div className="flex items-center gap-2.5 sm:gap-1 font-sans text-xs font-semibold">
                          <p href="">Impuls the Company & Its Products</p>
                          <img src={process.env.PUBLIC_URL + "/assets/triangle.svg"} alt="Triangle Icon" style={{transform: `rotate(${arrowRotation}deg)`}}/>
                          </div>
                      </Link>
                    <a className="font-metro text-xs font-normal sm:hidden ease-in-out duration-200 hover:opacity-80" href="">Get Access</a>
                </div>
                 <div className="flex justify-between gap-1.5 items-center text-color1 text-sm hidden">
                     <img src={process.env.PUBLIC_URL + "/assets/flag-ru.png"} alt="Russian Flag" className="w-5 h-3"/>
                     <a className="cursor-pointer flex justify-between gap-1.5 items-center" href="">
                         <p className="">RU</p>
                         <img src={process.env.PUBLIC_URL + "/assets/arrow.png"} alt="Arrow Icon" className="w-1.5 h-1" />
                     </a>
                 </div>
             </div>
            </div>
        </div>
                    {showMenu && (
                        <div className="bg-color2">
                            <div className="max-w-4xl m-0 m-auto px-4 top-9 grid grid-cols-3 sm:grid-cols-1 gap-4 p-6 text-center">
                            {links.map((link) => (
                                <Link to={link.url} className="font-sans text-sm font-semibold leading-7 ease-in-out duration-200 hover:opacity-80" onClick={() => { setShowMenu(!showMenu)}}>
                                {link.text}
                                </Link>
                            ))}
                            </div>
                        </div>
                    )}


    <div className="bg-color5">
        <div className="flex justify-between items-center max-w-7xl m-0 m-auto px-4">
            <Link to="/">
            <div className="pt-4 pb-4">
                <img src={process.env.PUBLIC_URL + "/assets/Logo.svg"} alt="Company Logo" className="w-44 h-9"/>
            </div>
            </Link>
            <div className="font-plus text-base font-bold">
                <ul className="flex flex-row justify-between items-center gap-11 font-plus">
                    <li className="sm:hidden"><a className="ease-in-out duration-200 hover:opacity-80">Mapa</a></li>
                    <li className="sm:hidden"><a className="ease-in-out duration-200 hover:opacity-80">Promocional</a></li>
                    <li className="sm:hidden">
                        <a className="flex justify-between items-center gap-2 ease-in-out duration-200 hover:opacity-80">
                            <p>Impuls</p>
                            <img src={process.env.PUBLIC_URL + "/assets/icon-tv.png"} alt="Impuls Tv Icon" className="w-3.5 h-2.5"/>
                        </a>
                    </li>
                    <li className="hidden sm:block"><button onClick={changeMenu}>
                        <img src={`${process.env.PUBLIC_URL}/assets/${showCrossIcon ? 'mobile-menu__cross.png' : 'mobile-menu__icon.svg'}`} alt="" className="w-7"/>
                    </button></li>
                </ul>
            </div>
        </div>
        <ul style={{display: showMobileMenu ? 'block' : 'none'}} className="flex-col text-center leading-7 py-8">
            <li><a>Mapa</a></li>
            <li><a>Promocional</a></li>
            <li><a>Impuls</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Header