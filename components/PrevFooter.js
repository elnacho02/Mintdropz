import React from 'react'
import Link from 'next/link'
import s from "../styles/PrevFooter.module.css"
function PrevFooter() {
    return (
        <div className={s.container}>
            <h3>Get Aped with Us!</h3>
            <div className={s.linkContainer}>
               <Link href="/">
                    <a className={s.link}>Sign up for our newsletter</a>
               </Link>
                <img src="/click.png"/>
            </div>
            
        </div>
    )
}

export default PrevFooter
