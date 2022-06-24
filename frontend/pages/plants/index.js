import styles from '../../styles/Home.module.css'
import { Grid } from '@nextui-org/react'
import PlantCard from '../../components/plantCard'
import { useTheme } from '@nextui-org/react'


// This gets called on every request
export async function getServerSideProps({ req, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );
    // Fetch data from external API
    const data = await fetch(`http://localhost:3001/api/plants`)
    const plantsJson = await data.json()

    if (!plantsJson) {
        return {
            notFound: true,
        }
    }

    console.log(plantsJson)
    // Pass data to the page via props
    return { props: { plantsJson } }
}

export default function Plants({plantsJson}) {
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
                        Plants
                    </h1>
                </div>
                <Grid.Container gap={1} justify="center">
                    <Grid
                        xs={8} 
                        sm={10}
                        css={{ w: "100%", h: "20em" }}
                    >
                        {plantsJson.plants.map(plant => (
                            <PlantCard key={plant._id} plant={plant}/>
                        ))}
                    </Grid>
                </Grid.Container>
            </main>
        </div>
    )
}
