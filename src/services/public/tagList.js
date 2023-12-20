const {TagType,Tags } = require('../../database/models')

const getTageByType = async(request) => {
    return await Tags.findAll({ where: { type_id }, attributes: ['id', 'tag']})
}

module.exports = {
    getTageByType
}