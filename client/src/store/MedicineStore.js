import {makeAutoObservable} from "mobx";

export default class MedicineStore {
    constructor() {
        this._types = []
        this._manufacturers = []
        this._medicines = []
        this._selectedType = {}
        this._selectedManufacturer = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setManufacturers(manufacturers) {
        this._manufacturers = manufacturers
    }
    setMedicines(medicines) {
        this._medicines = medicines
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedManufacturer(manufacturer) {
        this.setPage(1)
        this._selectedManufacturer = manufacturer
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get manufacturers() {
        return this._manufacturers
    }
    get medicines() {
        return this._medicines
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedManufacturer() {
        return this._selectedManufacturer
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
