import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import ManufacturerBar from "../components/ManufacturerBar";
import MedicineList from "../components/MedicineList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchManufacturers, fetchMedicines, fetchTypes} from "../http/medicineAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {medicine} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => medicine.setTypes(data))
        fetchManufacturers().then(data => medicine.setManufacturers(data))
        fetchMedicines(null, null, 1, 2).then(data => {
            medicine.setMedicines(data.rows)
            medicine.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchMedicines(medicine.selectedType.id, medicine.selectedManufacturer.id, medicine.page, 2).then(data => {
            medicine.setMedicines(data.rows)
            medicine.setTotalCount(data.count)
        })
    }, [medicine.page, medicine.selectedType, medicine.selectedManufacturer,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <ManufacturerBar/>
                    <MedicineList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
