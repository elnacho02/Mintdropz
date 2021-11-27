import React from 'react'
import Link from "next/link"
import { useRouter } from "next/router";
import s from "../styles/Navbar.module.css"
function Navbar() {
    let router = useRouter()

    return (
        <div className={s.container}>
           <div className={s.logoContainer}>
               <img src="/logo.png" width="30%"/>
           </div>
           <div className={s.navigationContainer}>
                <div className={s.navigation}>
                    <Link href="/">
                        <a className={router.pathname==="/"? s.linkSelected : s.link}>Home</a>
                    </Link>
                    <Link href="/features">
                        <a className={router.pathname==="/features"? s.linkSelected : s.link}>Features</a>
                    </Link>
                    <Link href="/roadmap">
                        <a className={router.pathname==="/roadmap"? s.linkSelected : s.link}>Roadmap</a>
                    </Link>
                    <Link href="/team">
                        <a className={router.pathname==="/team"? s.linkSelected : s.link}>Team</a>
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
