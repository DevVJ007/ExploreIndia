const Package = require('./../../models/Package');
exports.getPackage = async ()=>{
    return await Package.findAll({
        attributes: ['id', 'title', 'description', 'location', 'price', 'days', 'nights']
    }).then((data)=>{
        return data;
    }).catch((err)=>{
        return err;
    });
}