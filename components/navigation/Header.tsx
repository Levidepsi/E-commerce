"use client"

import { HeaderMenuItem, HeaderTypes } from "@/types/header"
import "./navigation.css"
import Image from "next/image"
import { useWindowWide } from "@/hooks/useWindowWide"
import { usePathname } from "next/navigation"
import logo from "@/public/logo.png"
import Link from "next/link"
import { useState } from "react"

const Header = ({ header }: { header: HeaderTypes }) => {
  
  const path = usePathname()
  const wide = useWindowWide()
  const [openAccount, setOpenAccount] = useState(false)

  if (path.includes("/admin")) {
    return null
  }

  console.log(header)
  const header_position: string = header.header_position ? header.header_position : "absolute"
  const paddingTop = wide >= 1024 ? header.padding_top : header.padding_top 
  const paddingBottom = wide >= 1024 ? header.padding_bottom : header.padding_bottom 
  return (
    <header
      // style={{paddingBottom: }}
      className={`Header_Container ${header.menu_type} ${header_position}`}>
      
      
      <div className="Header-Logo-Wrap">
        <Link href={"/"}>
          <Image src={header.header_logo ? header.header_logo : logo} alt={header.title} width={500} height={500} className=""/>
        </Link>
      </div>

      {/* desktop hidden on mobile */}
      {header.header_menu && 
        <div className="Desktop-Menu">
          <ul className="MenuItems_Wrapper">
            {header.header_menu.map((menu: HeaderMenuItem, index: number) => {
              return (
                <li
                  key={index}
                  className="menu-item desktop">
                  <Link href={menu.page? menu.page.slug.slug : "/"}>
                    {menu.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      }

      {/* mobile menu here with hamburger button */}
      {/*  */}

      {/*  */}

      {/* cart/account */}
      <div className="UserButtons">
        <button type="button">
          <CartButton />
        </button>
        <button type="button">
          <AccountButton />
        </button>
      </div>
    </header>
  )
}

export default Header

const CartButton = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="86px" height="86px" viewBox="0 0 24.00 24.00" fill="none" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>

      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.24000000000000005"/>

      <g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" strokeWidth="1.344" strokeLinecap="round" strokeLinejoin="round"/> </g>

    </svg>
  )
}

const AccountButton = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 48 48">
      <path d="M0 0h48v48H0z" fill="none"/>
      <g id="Shopicon">
        <path d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12   c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8   s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"/>
      </g>
    </svg>
  )
}