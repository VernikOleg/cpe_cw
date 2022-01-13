import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const ManufacturerBar = observer(() => {
    const {medicine} = useContext(Context)

    return (
        <Row className="d-flex">
            {medicine.manufacturers.map(manufacturer =>
                <Card
                    style={{cursor:'pointer'}}
                    key={manufacturer.id}
                    className="p-3"
                    onClick={() => medicine.setSelectedManufacturer(manufacturer)}
                    border={manufacturer.id === medicine.selectedManufacturer.id ? 'danger' : 'light'}
                >
                    {manufacturer.name}
                </Card>
            )}
        </Row>
    );
});

export default ManufacturerBar;
