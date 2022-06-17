import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { useTheme } from '@nextui-org/react'


export default function Plant() {
    const router = useRouter()
    const { id } = router.query
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
                        Plant id: {id}
                    </h1>
                </div>
            </main>
        </div>
    )
}
