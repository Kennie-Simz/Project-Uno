import uuid from 'uuid';

class Property {
  constructor() {
    this.Properties = [];
  }

  //  Get all properties
  findAll() {
    return this.Properties;
  }

  findAllMyAds(userId) {
    return this.Properties.filter(property => property.userId === userId);
  }

  findAdsOfSpecificType(type) {
    return this.Properties.filter(property => property.type === type);
  }

  // Create and save Property
  create({
    status = 'available', type, imageUrl, description, userId,
  }) {
    const newProperty = {
      id: uuid.v4(),
      createdOn: new Date(),
      status,
      type,
      description,
      imageUrl,
      userId,
    };

    this.Properties.push(newProperty);

    return newProperty;
  }

  // Get a property by id
  findOne(id) {
    return this.Properties.find(user => user.id === id);
  }

  // Delete a property
  delete(id) {
    // const property = this.findOne(id);
    const newProperties = this.Properties.filter(property => property.id !== id);
    this.Properties = [...newProperties];
    return true;
  }

  // Update a property
  update(id, data) {
    const property = this.findOne(id);
    const index = this.Properties.indexOf(property);
    this.Properties[index].type = data.type || property.type;
    this.Properties[index].description = data.description || property.description;
    this.Properties[index].imageUrl = data.imageUrl || property.imageUrl;

    return this.Properties[index];
  }

  markAsSold(id) {
    const property = this.findOne(id);
    const index = this.Properties.indexOf(property);
    this.Properties[index].status = 'sold';

    return this.Properties[index];
  }

  remove() {
    this.Properties = [];
  }
}

export default new Property();
