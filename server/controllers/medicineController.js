const uuid = require('uuid')
const path = require('path');
const {Medicine, MedicineInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class MedicineController {
    async create(req, res, next) {
        try {
            let {name, price, manufacturerId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const medicine = await Medicine.create({name, price, manufacturerId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    MedicineInfo.create({
                        title: i.title,
                        description: i.description,
                        medicineId: medicine.id
                    })
                )
            }

            return res.json(medicine)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {manufacturerId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let medicines;
        if (!manufacturerId && !typeId) {
            medicines = await Medicine.findAndCountAll({limit, offset})
        }
        if (manufacturerId && !typeId) {
            medicines = await Medicine.findAndCountAll({where:{manufacturerId}, limit, offset})
        }
        if (!manufacturerId && typeId) {
            medicines = await Medicine.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (manufacturerId && typeId) {
            medicines = await Medicine.findAndCountAll({where:{typeId, manufacturerId}, limit, offset})
        }
        return res.json(medicines)
    }

    async getOne(req, res) {
        const {id} = req.params
        const medicine = await Medicine.findOne(
            {
                where: {id},
                include: [{model: MedicineInfo, as: 'info'}]
            },
        )
        return res.json(medicine)
    }
}

module.exports = new MedicineController()
