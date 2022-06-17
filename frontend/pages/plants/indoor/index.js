import styles from '../../../styles/Home.module.css'
import { useTheme } from '@nextui-org/react'

// This gets called on every request
export async function getServerSideProps({ req, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );
    // Fetch data from external API
    const data = await fetch(`http://localhost:3001/api/plants/indoor`)
    const indoorPlants = await data.json()

    if (!indoorPlants) {
        return {
            notFound: true,
        }
    }

    console.log(indoorPlants)
    // Pass data to the page via props
    return { props: { indoorPlants } }
}

export default function Indoor({ indoorPlants }) {
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
                        Indoor Plants
                    </h1>
                </div>
            </main>
        </div>
    )
}
