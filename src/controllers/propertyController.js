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

  static updateProperty(req, res) {
    const { id } = req.params;
    const property = Property.find(updateProperty => updateProperty.id == id);
    if (property) {
      (property.status = req.body.status), (property.price = req.body.price);
      return res.status(201).json({
        status: 'success',
        data: property,
      });
    }
    res.status(400).json({
      status: 'error',
      error: 'Property not found',
    });
  }

  static sellProperty(req, res) {
    const { id } = req.params;
    const property = Property.find(updateProperty => updateProperty.id == id);
    if (!property) {
      res.status(400).json({
        status: 'error',
        error: 'Property not found',
      });
    } else {
      (property.status = 'sold');
      return res.status(201).json({
        status: 'success',
        data: property,
      });
    }
  }

  static deleteProperty(req, res) {
    const { id } = req.params;
    const property = Property.find(deletedProperty => deletedProperty.id == id);
    if (!property) {
      res.status(400).json({
        status: 'error',
        error: 'Property id not found',
      });
    } else {
      const delProperty = Property.filter(propertyDel => propertyDel.id !== id);
      return res.status(201).json({
        status: 'success',
        data: delProperty,
      });
    }
  }
}
export default propertyController;
