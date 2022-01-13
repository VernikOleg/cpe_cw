import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {MEDICINE_ROUTE} from "../utils/consts";

const MedicineItem = ({medicine}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(MEDICINE_ROUTE + '/' + medicine.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + medicine.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Ліки...</div>

                </div>
                <div>{medicine.name}</div>
            </Card>
        </Col>
    );
};

export default MedicineItem;
