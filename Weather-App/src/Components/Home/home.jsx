import React, { useState } from 'react'

import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Container, Row, Col } from 'react-bootstrap';

import WeatherCard from '../WeatherCard/weatherCard';

import './home.css';

const Home = () => {

    let [cityName, setCityName] = useState("");

    let [weatherData, setWeatherData] = useState([]);

    let [locationDetail, setLocationDetail] = useState({ country: "", city: "", latitude: "", longitude: "" })

    const dataSubmitHandler = async (event) => {
        event.preventDefault();

        try {

            const apiKey = 'd1c5749e519520a9d2c4de2f24c2a0a0';

            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&weather?lat={lat}&lon={lon}&appid=${apiKey}&units=metric`);

            console.log("Response: ", response);

            setWeatherData(response.data.list);

            setLocationDetail({ country: response.data.city.country, city: response.data.city.name, latitude: response.data.city.coord.lat, longitude: response.data.city.coord.lon })

            setCityName("");

        } catch (error) {

            alert("Ran into a problem check console for error")

            console.log(`Error is: ${error}`);
        }


    }

    return (
        <Container fluid>

            <Col className='d-flex justify-content-center mt-2'>

                <h1 className='weatherAppHeading text-light'>
                    Weather App
                </h1>

            </Col>

            <Col className='d-flex justify-content-center'>

                <Form className="formDesign" onSubmit={dataSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='fw-bold fs-4 text-light formDesign '>City Name</Form.Label>
                        <Form.Control className='p-2' type="name" autoComplete='off' placeholder="Enter City Name" value={cityName} onChange={(event) => {
                            setCityName(event.target.value);
                        }} />
                    </Form.Group>

                    <Col className='d-flex justify-content-end'>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Col>
                </Form>

            </Col>

            <Container fluid className='mt-3 locationSection' >

                <Col>
                    <h4 className='text-center fw-bold text-light locationHeading'>
                        Location Details
                    </h4>
                </Col>

                <Row className='text-light'>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <h5>
                            City:
                        </h5>
                        &nbsp;
                        <h3>
                            {locationDetail.city}
                        </h3>
                    </Col>

                    <Col className='d-flex justify-content-center align-items-center'>

                        <h5>
                            Country:
                        </h5>
                        &nbsp;
                        <h3>
                            {locationDetail.country}
                        </h3>
                    </Col>

                    <Col className='d-flex justify-content-center align-items-center'>
                        <h5>
                            Latitude:
                        </h5>
                        &nbsp;
                        <h3>
                            {/* {locationDetail.latitude.toFixed(2)} ϕ */} {/*Note: toFixed(2) caused error in initial start only*/}

                            {locationDetail.latitude} ϕ
                        </h3>
                    </Col>

                    <Col className='d-flex justify-content-center align-items-center'>
                        <h5>
                            Longitude:
                        </h5>
                        &nbsp;
                        <h3>
                            {/* {locationDetail.longitude.toFixed(2)} λ */} {/*Note: toFixed(2) caused error in initial start only*/}

                            {locationDetail.longitude} λ 
                        </h3>
                    </Col>

                </Row>

            </Container>

            <Container fluid className='mt-2 cardsContainer'>

                <Col>
                    <h4 className='text-center fw-bold text-light locationHeading'>
                        Weather Details
                    </h4>
                </Col>

                <Row>

                    {
                        weatherData.map((data, index) => {
                            return (
                                <WeatherCard
                                    key={index}
                                    date={data.dt_txt}
                                    temp={data.main.temp}
                                    minTemp={data.main.temp_min}
                                    maxTemp={data.main.temp_max}
                                    windSpeed={data.wind.speed}
                                    windDeg={data.wind.deg}
                                    weatherCondition={
                                        data.weather.map(weatherCon => (
                                            weatherCon.main
                                        )
                                        )
                                    }
                                    weatherConditionIcon={
                                        data.weather.map(weatherConIcon => (
                                            weatherConIcon.icon
                                        )
                                        )
                                    }
                                    weatherConditionDesc={
                                        data.weather.map(weatherConDesc => (
                                            weatherConDesc.description
                                        )
                                        )
                                    }
                                />
                            )
                        })
                    }

                </Row>

            </Container>

        </Container>
    )
}

export default Home