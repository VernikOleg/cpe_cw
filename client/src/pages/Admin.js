import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateManufacturer from "../components/modals/CreateManufacturer";
import CreateMedicine from "../components/modals/CreateMedicine";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [manufacturerVisible, setManufacturerVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [medicineVisible, setMedicineVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Додати тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setManufacturerVisible(true)}
            >
                Додати виробника
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setMedicineVisible(true)}
            >
                Додати ліки
            </Button>
            <CreateManufacturer show={manufacturerVisible} onHide={() => setManufacturerVisible(false)}/>
            <CreateMedicine show={medicineVisible} onHide={() => setMedicineVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
