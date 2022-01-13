const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const List = sequelize.define('list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const ListMedicine = sequelize.define('list_medicine', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Medicine = sequelize.define('medicine', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Manufacturer = sequelize.define('manufacturer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const MedicineInfo = sequelize.define('medicine_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeManufacturer = sequelize.define('type_manufacturer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(List)
List.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

List.hasMany(ListMedicine)
ListMedicine.belongsTo(List)

Type.hasMany(Medicine)
Medicine.belongsTo(Type)

Manufacturer.hasMany(Medicine)
Medicine.belongsTo(Manufacturer)

Medicine.hasMany(Rating)
Rating.belongsTo(Medicine)

Medicine.hasMany(ListMedicine)
ListMedicine.belongsTo(Medicine)

Medicine.hasMany(MedicineInfo, {as: 'info'});
MedicineInfo.belongsTo(Medicine)

Type.belongsToMany(Manufacturer, {through: TypeManufacturer })
Manufacturer.belongsToMany(Type, {through: TypeManufacturer })

module.exports = {
    User,
    List,
    ListMedicine,
    Medicine,
    Type,
    Manufacturer,
    Rating,
    TypeManufacturer,
    MedicineInfo
}





