import React from 'react'
import Link from "next/link"
import s from "../styles/Navbar.module.css"
function Navbar() {
    return (
        <div className={s.container}>
           <div className={s.logoContainer}>
               <img src="/logo.png" alt="logo"/>
           </div>
           <div className={s.navigationContainer}>
                <div className={s.navigation}>
                    <Link href="/">
                        <a className={s.linkSelected}>Home</a>
                    </Link>
                    <Link href="/">
                        <a className={s.link}>Features</a>
                    </Link>
                    <Link href="/">
                        <a className={s.link}>Roadmap</a>
                    </Link>
                    <Link href="/">
                        <a className={s.link}>Team</a>
                    </Link>
                    <button className={s.button}>
                        Join Our Discord
                    </button>
                </div>
           </div>
        </div>
    )
}

export default Navbar
