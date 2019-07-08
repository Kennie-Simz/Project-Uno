/* eslint-disable radix */
const express = require('express');
const uuid = require('uuid');

const router = express.Router();
const users = require('../user');


// Gets All Users
router.get('/', (req, res) => {
  res.json(users);
});

// Get single User
router.get('/:id', (req, res) => {
  // eslint-disable-next-line radix
  const found = users.some(user => user.id === parseInt(req.params.id));

  if (found) {
    res.json(users.filter(user => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ mssg: `User id ${req.params.id} not found!` });
  }
});

// create User

router.post('/', (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  };

  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ mssg: 'Name and email required' });
  }

  users.push(newUser);
  res.json(users);
});


// Update User
router.put('/:id', (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id));

  if (found) {
    const updUser = req.body;
    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        users.name = updUser.name ? updUser.name : user.name;
        users.email = updUser.email ? updUser.email : user.email;

        res.json({ mssg: 'User is up to date!', user });
      }
    });
  } else {
    res.status(400).json({ mssg: `User id ${req.params.id} not found!` });
  }
});

// Delete User
router.delete('/:id', (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id));

  if (found) {
    res.json({
      mssg: 'User deleted',
      users: users.filter(user => user.id !== parseInt(req.params.id)),
    });
  } else {
    res.status(400).json({ mssg: `User id ${req.params.id} not found!` });
  }
});


module.exports = router;
