import Collections from '../components/Collections'
import Navbar from '../components/Navbar'
import PostNavbar from '../components/PostNavbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <PostNavbar/>
      <Collections/>
    </div>
  )
}
