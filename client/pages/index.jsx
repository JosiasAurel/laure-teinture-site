import React from "react"

// import custom components
import Header from "../components/header"

import styles from "../styles/index.module.css"

import Link from "next/link"

const Home = () => {
    return (
        <div className={styles.homepage}>
            <Header />
            <main className={styles.content}>
                <div className={styles.showerImages}>
                    <span className={styles.imageOne}>
                        <img src="/images/IMG_20210321_120901.jpg" alt=""/>
                    </span>
                    <span className={styles.imageTwo}>
                        <img src="/images/IMG_20210321_120246.jpg" alt=""/>
                    </span>
                </div>
                <h2>Des Vetements De Qulatite a Bon Prix</h2>
            </main>

            <section className={styles.sectionTwo}>
                <Link href="/shop"> 
                    <h3 className={styles.gotoshop}>
                        Aller en Boutique
                    </h3>
                </Link>
            </section>


        </div>
    )
}

export default Home