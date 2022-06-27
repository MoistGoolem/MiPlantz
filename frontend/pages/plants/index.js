import styles from '../../styles/Home.module.css'
import { Grid } from '@nextui-org/react'
import PlantCard from '../../components/plantCard'
import { useTheme, Loading } from '@nextui-org/react'
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";


// This gets called on every request
export async function getServerSideProps({ req, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );
    // Fetch data from external API
    //const data = await fetch(`http://localhost:3001/api/plants`)
    //const plantsJson = await data.json()

    // if (!plantsJson) {
    //     return {
    //         notFound: true,
    //     }
    // }

    // console.log(plantsJson)
    // // Pass data to the page via props
    return { props: { } }
}

export default function Plants() {
    const { theme } = useTheme()

    const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
        "plants",
        async ({ pageParam = 1}) => 
            await fetch(`http://localhost:3001/api/plants?page=${pageParam}`)
            .then((result) => result.json()),
        {
            getNextPageParam: (lastPage, pages) => {
                console.log('Last page: ', pages)
                if (lastPage.currentPage != lastPage.totalPages) {
                    return pages.length + 1;
                }
            },
        }
    );
    console.log("Fetch Data: ", data);

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
                    {status === "success" && (
                        <InfiniteScroll
                        dataLength={data?.pages.length * 20}
                        next={fetchNextPage}
                        hasMore={hasNextPage}
                        loader={<Loading />}
                        style={{ height: "100%", width: "100%", overflow: "hidden" }}
                        >
                            <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
                                <Grid.Container justify="center">
                                    {data?.pages.map((page, i) => (
                                        <Grid
                                            xs={8} 
                                            sm={10}
                                            css={{ w: "100%", h: "20em" }}
                                            key={i}
                                        >
                                            {page.plants.map((plant) => (
                                                <PlantCard key={plant._id} plant={plant}/>   
                                            ))}
                                        </Grid>
                                    ))}
                                </Grid.Container>
                            </div>
                        </InfiniteScroll>
                    )}
                </main>
            </div>

    )
}
