import React from 'react';

import moment from "moment";

import { Col, Row, Card } from 'react-bootstrap';

import './weatherCard.css';

const WeatherCard = ({ date, temp, maxTemp, minTemp, weatherCondition, weatherConditionIcon, weatherConditionDesc, windSpeed, windDeg }) => {

    const weatherIcon = weatherConditionIcon;

    let icon = `http://openweathermap.org/img/w/${weatherIcon}.png`


    return (

        <Col md={6} lg={3} style={{ padding: ".8rem" }}>

            <Card style={{ padding: ".2rem " }}>
                <Card.Header className='text-center'>
                    <h4>
                        {moment(date).format("dddd ha")}
                    </h4>
                </Card.Header>

                <Card.Body>
                    <Card.Title className='fs-3 text-center'>

                        <Row className='d-flex align-items-center'>

                            <Col>

                                <Col>
                                    <h6>
                                        wind speed
                                    </h6>
                                </Col>

                                <Col>
                                    <h5>
                                        {windSpeed.toFixed(0)} kt
                                    </h5>
                                </Col>

                            </Col>

                            <Col>
                                {temp.toFixed(0)} °C
                            </Col>

                            <Col>

                                <Col>
                                    <p style={{fontSize: "15.3px"}}>
                                        wind degree
                                    </p>
                                </Col>

                                <Col>
                                    <h5>
                                        {windDeg} °deg
                                    </h5>
                                </Col>

                            </Col>

                        </Row>

                    </Card.Title>

                    <hr />

                    <Col className='d-flex justify-content-around align-items-center mt-2'>
                        <h4>
                            {weatherCondition}
                        </h4>
                        <h4>
                            <img src={icon} alt='weather icon' width={"60px"}/>
                        </h4>
                    </Col>

                    <Col className='text-center mt-2'>
                        <h5>
                            {weatherConditionDesc}
                        </h5>
                    </Col>

                    <hr />

                </Card.Body>

                <Card.Footer className="text-muted d-flex justify-content-evenly">
                    <h4>
                        {maxTemp} °C
                    </h4>

                    <h4>
                        -
                    </h4>

                    <h4>
                        {minTemp} °C
                    </h4>
                </Card.Footer>
            </Card>

        </Col>

    )
}

export default WeatherCard