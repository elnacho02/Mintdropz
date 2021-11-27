import React from 'react'
import s from "../styles/Footer.module.css"
function Footer() {
    return (
        <div className={s.container}>
           <div className={s.border}>
                <div className={s.logo}>
                    <img src="/logo.png" />
                    <h5>Terms of Service</h5>
                    <h5>Privacy Policy</h5>
                </div>
                <div className={s.socialMedia}>
                    <div className={s.icons}>
                        <img src="/twitter.png" />
                        <img src="/discord.png" />
                        <img src="/instagram.png" />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Footer
