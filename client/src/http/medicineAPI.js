import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createManufacturer = async (manufacturer) => {
    const {data} = await $authHost.post('api/manufacturer', manufacturer)
    return data
}

export const fetchManufacturers = async () => {
    const {data} = await $host.get('api/manufacturer', )
    return data
}

export const createMedicine = async (medicine) => {
    const {data} = await $authHost.post('api/medicine', medicine)
    return data
}

export const fetchMedicines = async (typeId, manufacturerId, page, limit= 5) => {
    const {data} = await $host.get('api/medicine', {params: {
            typeId, manufacturerId, page, limit
        }})
    return data
}

export const fetchOneMedicine = async (id) => {
    const {data} = await $host.get('api/medicine/' + id)
    return data
}
