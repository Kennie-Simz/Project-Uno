import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe('Auth', () => {
  describe('Get all users /', () => {
    it('should get all users', (done) => {
      chai
        .request(app)
        .get('/api/v1/auth/signup')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
  describe('Signup a user', () => {
    it('should signup a new user', (done) => {
      let newUser ={
        email: "jondoe@cru.com",
        firstName: "Jason",
        lastName: "Ashu",
        password: "newpassword",
        phoneNumber: "0706958423",
        address: "12th Mpale"
      };
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
  describe('Sign in a user', () => {
    it('should sign in a user', (done) => {
      let newUser ={
        email: "jondoe@cru.com",
        password: "newpassword"
      };
      chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
