import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe('Auth', () => {
  describe('Get all users /', () => {
    // Test to get all students record
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
});
