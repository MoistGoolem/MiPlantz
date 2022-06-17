import styles from '../styles/Home.module.css'
import { Button, Text, useTheme } from '@nextui-org/react'
import Link from 'next/link'

export default function Home() {
    const { theme } = useTheme()

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div>
                    <h1
                        style={{
                            color: theme.colors.primary.value,
                            padding: `${theme.space[2].value} ${theme.space[4].value}`,
                        }}
                    >
                        Home
                    </h1>
                </div>
            </main>
        </div>
    )
}
