import Collections from '../components/Collections'
import Footer from '../components/Footer'
import GoldenMessagge from '../components/GoldenMessagge'
import Navbar from '../components/Navbar'
import PostNavbar from '../components/PostNavbar'
import PrevFooter from '../components/PrevFooter'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
          {/* <img src="/backgrounds/Ellipse 1.png" className={styles.ellipse1}/> */}
        {/* <img src="/backgrounds/Ellipse 2.png" className={styles.ellipse2}/> */}
         <img src="/backgrounds/dots1.png" className={styles.dots1}/> 
          <img src="/backgrounds/Ellipse 3.png" className={styles.ellipse3} width="63%"/> 
        <Navbar />
        <PostNavbar/>
        <Collections/>
        <GoldenMessagge/>
        <PrevFooter />
        <Footer/>
      
    </div>
  )
}
