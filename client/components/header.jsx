
import React, { useState } from "react";
import styles from "../styles/index.module.css";
import Modal from "./modal";
import Link from "next/link";

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        if (modalOpen) {
            setModalOpen(false)
        } else if (!modalOpen) {
            setModalOpen(true)
        }
    };
    return (
        <nav className={styles.headerNav}>
            <header className={styles.header}>
            <Link href="/">
                <h1>LT</h1>
            </Link>
            <button onClick={toggleModal}>Contacts</button>
        </header>
        <Modal open={modalOpen} />
        </nav>
    )
};

export default Header;