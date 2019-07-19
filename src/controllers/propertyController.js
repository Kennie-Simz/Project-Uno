import Property from '../models/propertyModel';
import pool from '../database';

class propertyController {
  static getProperties(req, res) {
    pool.query('SELECT * FROM properties ORDER BY id ASC', (error, results) => {
      if (error) {
        return res.status(400).json({
          status: '400',
          message: error
        })
      }
      return res.json({
        message: 'List of all properties',
        properties: results.rows,
      });
    })
  }

  static getSingleProperty(req, res) {
    const { id } = req.params;

    pool.query('SELECT * FROM properties WHERE id = $1', [id], (error, results) => {
      if (results.rowCount < 1) {
        return res.status(404).json({
          message: 'Error',
          error: `Property with id ${id} not found`,
        });
      } else {
        res.status(200).json({
          status: '200',
          data: results.rows
        })
      }
    })
  }

  static createProperty(req, res) {
    const {
      title, type, price, address, state, imageUrl, description,
    } = req.body;
    pool.query('INSERT INTO properties \
      (title, status, type, price, address, state, imageUrl, description, \
      ownerEmail, ownerPhoneNumber, ownerId) VALUES($1, $2, $3, $4, $5, \
        $6, $7, $8, $9, $10, $11)',
      [title, 'Available', type, price, address, state, imageUrl, description, req.decoded.email, req.decoded.phoneNumber, req.decoded.id],
      (error, results) => {
        if (error) {
          return res.status(400).json({
            message: 'Error',
            error: error.detail
          })
        }
        return res.status(201).json({
          status: '201',
          message: 'Property created',
          data: {
            id: results.insertId,
            ownerId: req.decoded.ownerId,
            ownerEmail: req.decoded.email,
            title,
            status: 'For Sale',
            type,
            price,
            state,
            imageUrl,
            description
          }
        })
      })

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
    res.status(404).json({
      status: 'error',
      error: 'Property not found',
    });
  }

  static sellProperty(req, res) {
    const { id } = req.params;

    pool.query('UPDATE properties SET status= $1 WHERE id = $2', ['Sold', id], (error, results) => {
      if (error) {
        return res.status(400).json({
          status: '400',
          error
        })
      } else {
        return res.status(201).json({
          status: 201,
          data: 'Property sold',
        });
      }

    })


  }

  static deleteProperty(req, res) {
    const { id } = req.params;
    pool.query('SELECT * FROM properties WHERE id = $1', [id], (error, results) => {
      if (results.rowCount > 0) {
        pool.query('DELETE FROM properties WHERE id = $1 AND ownerid = $2', [id, req.decoded.id], (errr, ress) => {
          if (errr) {
            return res.status(404).json({
              status: '400',
              message: 'You can only delete your properties',
            });
          } else {
            res.status(201).json({
              status: '201',
              message: 'Property deleted'
            })
          }
        })
      } else {
        res.status(200).json({
          status: '404',
          message: `Property with id ${id} not found`
        })
      }
    })
  }
}
export default propertyController;
