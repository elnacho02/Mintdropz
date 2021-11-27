import React from 'react'
import s from "../styles/PostNavbar.module.css"


function PostNavbar() {
    return (
        <div className={s.container}>
            <div className={s.imgContainer}>
                <img src="/monkey.png" alt='monkey' className={s.monkey}/>
                <img src="/monkeyBack.png" alt='monkeyBackground' className={s.monkeyBack}/>
            </div>
            <div className={s.secondContainer}>
                    <img src="/backgrounds/Ellipse 2.png" alt=""/>
                <div className={s.exclusive}>
                    <h2>EXCLUSIVE</h2>
                    <img src="/Frame 11.png" width="6.5%"/>
                    <h4>newest NFT release</h4>
                </div>
                <div className={s.p}>
                    <p>
                    The <strong>BILLIONAIRE CLUB</strong> is a private collection of 10 000 billionaire apes NFTs—unique digital collectibles. The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.<br/> 
                    <span style={{"color":"#AC32E4"}}>Reveal on October 20th.</span>
                    </p>
                </div>
                <div className={s.register}>
                    <input type="email" placeholder='your@email.com'/>
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}

export default PostNavbar
