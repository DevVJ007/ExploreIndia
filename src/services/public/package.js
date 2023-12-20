const {Package} = require('../../database/models');
const getPackage = async (request)=>{
    return await Package.findAll({
        attributes: ['id', 'title', 'description', 'location', 'price', 'days', 'nights']
    })
}

module.exports = {
    getPackage
}