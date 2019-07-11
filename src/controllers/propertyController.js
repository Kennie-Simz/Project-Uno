import Property from '../models/propertyModel';

class propertyController {
  static getProperties(req, res) {
    return res.json({
      message: 'List of all properties',
      properties: Property,
    });
  }

  static createProperty(req, res) {
    const newId = parseInt(Property.length, 10) + 1;
    const {
      status, price, state, city, address, type, image_url,
    } = req.body;
    const newProperty = {
      id: newId,
      owner: req.decoded.id,
      status,
      price,
      state,
      city,
      address,
      type,
      image_url,
    };
    Property.push(newProperty);
    return res.status(200).json({
      message: 'success',
      data: {
        id: newId,
        owner: req.decoded.id,
        status,
        type,
        state,
        city,
        address,
      },
    });
  }
}
export default propertyController;
