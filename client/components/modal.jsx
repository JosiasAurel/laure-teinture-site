import React from "react";
import Image from "next/image";
import styles from "../styles/index.module.css";

const Modal = ({ open }) => {
    return (
        <div>
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
        </div>
    )
};

export default Modal;