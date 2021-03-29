
import React, { useState } from "react"
import styles from "../styles/index.module.css"
import Image from "next/image"

const Header = () => {
    const [open, setOpen] = useState(false)

    function handleModal() {
        if (open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <nav>
            <header className={styles.header}>
            <h1>LT</h1>
            <button onClick={handleModal}>Contacts</button>
        </header>
        { open ? <div className={styles.contactCard}>
            <h2 style={{paddingTop: "0.5em"}}>Contact</h2>
            <div>
                <span>
                    <Image src="/wa.png" width="50" height="50" />
                    <h3>+237 677317027</h3>
                </span>
                <span>
                    <Image src="/phone.png" width="30" height="30" />
                    <h3>+237 697174821</h3>
                </span>
                <span>
                    <Image src="/gmail.png" width="20" height="20" />
                    <h3>sndemni@gmail.com</h3>
                </span>
            </div>
        </div> : <div className={styles.contactCardClosed}>
            <h2 style={{paddingTop: "0.5em"}}>Contact</h2>
            <div>
                <span>
                    <Image src="/wa.png" width="50" height="50" />
                    <h3>+237 677317027</h3>
                </span>
                <span>
                    <Image src="/phone.png" width="30" height="30" />
                    <h3>+237 697174821</h3>
                </span>
                <span>
                    <Image src="/gmail.png" width="20" height="20" />
                    <h3>sndemni@gmail.com</h3>
                </span>
            </div>
        </div> }
        </nav>
    )
}

export default Header