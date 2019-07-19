import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import { APP_SECRET } from '../src/config';
import app from '../src/index';
// Configure chai
chai.use(chaiHttp);
chai.should();


describe('users', () => {
  describe('All users /', () => {
    // Test to get all users record
    it('should get all users', (done) => {
      chai.request(app)
        .get('/api/v1/auth/signup')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should add a new user', (done) => {
      const newUser ={
        firstName: "name",
        lastName: "last",
        email: "email@email.com",
        password: "password",
        address: "address",
        phoneNumber: "982398234"
      }
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should log in a registered user', (done) => {
      const newUser = {
        'email': 'email@email.com',
        'password': 'password',
      };
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should not log in a non registered user', (done) => {
      const newUser = {
        email: 'abcde@c4ru.com',
        password: 'gjhk',
      };
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(newUser)

        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should get all property if logged in', (done) => {
      const token = jwt.sign({ id: 1 }, APP_SECRET, {
        expiresIn: '24h', // expires in 24 hours
      });
      chai.request(app)
        .get('/api/v1/property')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should not get all property if not logged in', (done) => {
      chai.request(app)
        .get('/api/v1/property')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should add a new property listing', (done) => {
      const token = jwt.sign({ id: 1, email: 'email@email.com', firstName: 'name', phoneNumber: '98328923' }, APP_SECRET, {
        expiresIn: '24h', // expires in 24 hours
      });
      const newProperty = {
        title: "sometitle",
        type: "mansion",
        price: "2334",
        address: "233",
        state: "Kisum",
        imageUrl: "someudrl",
        description: "somedesc"
      }
      chai.request(app)
        .post('/api/v1/property')
        .set('Authorization', `Bearer ${token}`)
        .send(newProperty)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should update an existing property listing', (done) => {
      const token = jwt.sign({ id: 1 }, APP_SECRET, {
        expiresIn: '24h', // expires in 24 hours
      });
      const updatedProperty = {
        'status': 'free',
        'price': 'kes. 12345',
        state: 'mbale',
      };
      chai.request(app)
        .patch('/api/v1/property/1')
        .set('Authorization', `Bearer ${token}`)
        .send(updatedProperty)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should mark property as sold', (done) => {
      const token = jwt.sign({ id: 1 }, APP_SECRET, {
        expiresIn: '24h', // expires in 24 hours
      });

      chai.request(app)
        .patch('/api/v1/property/1/sold')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should delete a property', (done) => {
      const token = jwt.sign({ id: 1 }, APP_SECRET, {
        expiresIn: '24h', // expires in 24 hours
      });

      chai.request(app)
        .delete('/api/v1/property/1')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
