import { Card,Text, Row, Button, Col } from '@nextui-org/react'

const PlantCard = ({plant}) => {
    return(
        <Card isHoverable isPressable css={{ w: "48.2%", h: "100%", margin: "$5" }}>
            <Card.Header css={{ position: "absolute", top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        {plant.name.common}
                    </Text>
                    <Text h3 color="white">
                        {plant.name.botanical.species}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="/images/indoorplants.jpeg"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                }}
            >
                <Row>
                    <Col>
                        <Text color="#000" size={12}>
                            Light: {plant.placement.light}
                        </Text>
                        <Text color="#000" size={12}>
                            Climate: {plant.climate}
                        </Text>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Button flat auto rounded color="secondary">
                            <Text
                                css={{ color: "inherit" }}
                                size={12}
                                weight="bold"
                                transform="uppercase"
                            >
                                Notify Me
                            </Text>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
};

export default PlantCard;