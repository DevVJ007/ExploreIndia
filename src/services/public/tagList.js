const Tags = require('../../models/Tags');
const TagType = require('../../models/TagType');
exports.getTagByType = async (type_id) => {
    return await Tags.findAll({
        where: {
            type_id
        },
        attributes: ['id', 'tag']
    }).then((data) => {
        return data;
    }).catch((err) => {
        return err;
    });
}
