import styles from '../styles/Home.module.css'
import { Container, Card, Row, Text, Col, Spacer } from '@nextui-org/react'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://github.com/MoistGoolem"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' Me'}
            </a>
        </footer>
    )
}
