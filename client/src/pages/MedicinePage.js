import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOneMedicine} from "../http/medicineAPI";

const MedicinePage = () => {
    const [medicine, setMedicine] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneMedicine(id).then(data => setMedicine(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                <h2>{medicine.name}</h2>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + medicine.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                    

                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>Від: {medicine.price} грн.</h3>

                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Властивості</h1>
                {medicine.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default MedicinePage;
