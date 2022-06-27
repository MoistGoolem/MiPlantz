import { useTheme as useNextTheme } from 'next-themes'
import { Card, Text, Col, Spacer, User, Switch, Grid, Button, useTheme } from '@nextui-org/react'
import { SunIcon } from '../public/icons/SunIcon';
import { MoonIcon } from '../public/icons/MoonIcon';
import { HomeIcon } from '../public/icons/HomeIcon'
import Link from 'next/link'

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default function Navbar() {

    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    return (
        <nav style={{position: "sticky", top: 0, zIndex: 9999}}>
            <Grid.Container gap={1} justify="center" css={{position: "sticky", background: "$backgroundContrast" }}>
                <Grid xs>
                    <Spacer y={1} />
                    <Link href={"/"}>
                        <Button
                            auto
                            bordered
                            rounded
                            ripple
                            animated
                            icon={<HomeIcon filled />}
                        />
                    </Link>
                </Grid>
                <Grid xs={8}>
                    <Col>
                        <Link href="/plants/indoor">
                            <Card 
                                isHoverable 
                                isPressable
                                css={{height: "5em"}}
                            >
                                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                    <Text h4 color="white" weight="bold" transform="uppercase">
                                        Indoor Plants
                                    </Text>
                                </Card.Header>
                                <Card.Image 
                                    src="/images/indoorplants.jpeg"
                                    objectFit="cover"
                                    alt='Card Image Background'
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </Card>
                        </Link>
                    </Col>
                    <Spacer y={1} />
                    <Col>
                        <Link href={"/plants/outdoor"}>
                            <Card 
                                isHoverable 
                                isPressable
                                css={{height: "5em"}}
                            >
                                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                    <Text h4 color="white" weight="bold" transform="uppercase">
                                        Outdoor Plants
                                    </Text>
                                </Card.Header>
                                <Card.Image
                                    src="/images/outdoorplants.jpeg"
                                    objectFit="cover"
                                    height="100%"
                                    width="100%"
                                    alt='Card Image Background'
                                />
                            </Card>
                        </Link>
                    </Col>
                </Grid>
                <Grid xs>
                    <Col>
                        <User
                            name="Oliver"
                        />
                    </Col>
                    <Col>
                        <Switch
                            checked={isDark}
                            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                            size="xl"
                            iconOff={<SunIcon filled />}
                            iconOn={<MoonIcon filled />}
                        />
                    </Col>
                </Grid>
            </Grid.Container>
        </nav>
    )
}
