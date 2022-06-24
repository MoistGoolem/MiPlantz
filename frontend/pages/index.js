import styles from '../styles/Home.module.css'
import { Button, Text, useTheme } from '@nextui-org/react'
import Link from 'next/link'
import confetti from 'canvas-confetti';


export default function Home() {
    const { theme } = useTheme()

        const handleConfetti = () => {
            confetti();
        };

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
                <Button
                    auto
                    rounded
                    ripple={false}
                    size="xl"
                    onClick={handleConfetti}
                    css={{
                        background: '$white',
                        fontWeight: '$semibold',
                        boxShadow: '$md',
                        position: 'relative',
                        overflow: 'visible',
                        color: '#0F9549',
                        px: '$18',
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            background: '$white',
                            opacity: 1,
                            borderRadius: '$pill',
                            transition: 'all 0.4s ease'
                        },
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            '&:after': {
                                transform: 'scaleX(1.5) scaleY(1.6)',
                                opacity: 0
                            }
                        },
                        '&:active': {
                            transform: 'translateY(-2px)'
                        }
                    }}
                >
                    Click me
                </Button>
            </main>
        </div>
    )
}
