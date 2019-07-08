/* eslint-disable no-undef */
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';

// get content
import content from '../routes/app/app';

describe('true or false', () => {
  it('true is true', () => {
    expect(true).to.eql(true);
  });
  
  it('false is false', () => {
    expect(false).to.eql(false);
  });
});

chai.use(chaiHttp);

describe('users', function () {
        done(err);
      }) 
    });

  context('POST /sign-up', function () {
    beforeEach(function (done) {
      content.User.remove();
      done();
    });
    it('should register & authenticate a user when given required details', function (done) {
      chai
        .request(app)
        .post('/api/v1/users/sign-up')
        .send({
          username: 'abcd',
          email: 'abcd@cru.com',
          password: '123456',
        })
        .end(function (err, res) {
          expect(res).to.have.status(201);
          expect(res.body.data).to.be.a('object');
          expect(res.body.data).to.have.property('token');
          expect(res.body.data.token).to.be.a('string');
          expect(res.body.data.user.username).to.be.equal('foo');
          expect(res.body.data.user.email).to.be.equal('foo@bar.com');
          done(err);
        });
    });

    it('should not sign up a user if username field is not filled', function (done) {
      chai
        .request(app)
        .post('/api/v1/users/sign-up')
        .send({
          // username: 'abcd',
          email: 'abcd@cru.com',
          password: '123456',
        })
        .end(function (err, res) {
          expect(res).to.have.status(400);
          expect(res.body.msg).to.equal('Please fill in all fields.');
          done(err);
        });
    });

    it('should not sign up a user if email field is not filled', function (done) {
      chai
        .request(app)
        .post('/api/v1/users/sign-up')
        .send({
          username: 'abcd',
          // email: 'abcd@cru.com',
          password: '123456',
        })
        .end(function (err, res) {
          expect(res).to.have.status(400);
          expect(res.body.msg).to.equal('Please fill in all fields.');
          done(err);
        });
    });

    it('should not sign up a user if password field is not filled', function (done) {
      chai
        .request(app)
        .post('/api/v1/users/sign-up')
        .send({
          username: 'abcd',
          email: 'abcd@cru.com',
          // password: '123456',
        })
        .end(function (err, res) {
          expect(res).to.have.status(400);
          expect(res.body.msg).to.equal('Please fill in all fields.');
          done(err);
        });
    });


    it('should not sign up a user if password is less than 6 characters long', function (done) {
      chai
        .request(app)
        .post('/api/v1/users/sign-up')
        .send({
          username: 'abcd',
          email: 'abcd@cru.com',
          password: '12345',
        })
        .end(function (err, res) {
          expect(res).to.have.status(400);
          expect(res.body.msg).to.equal('Password should be no less than 6 characters long.');
          done(err);
        });
    });

    it('should not register a user with an account already', function (done) {
      const user = models.User.create({
        username: 'abcd',
        email: 'abcd@cru.com',
        password: '123456',
      });
      chai
        .request(app)
        .post('/api/v1/users/sign-up')
        .send({
          username: 'abcd',
          email: 'abcd@cru.com',
          password: '123456',
        })
        .end(function (err, res) {
          expect(res).to.have.status(400);
          expect(res.body.msg).to.equal('Your email is already registered in the app, you are only allowed to have one account.');
          done(err);
        });
    });

    it('should not register a user who provides an invalid email', function (done) {
      chai
        .request(app)
        .post('/api/v1/users/sign-up')
        .send({
          username: 'abcd',
          email: 'abcd@cru.com',
          password: '123456',
        })
        .end(function (err, res) {
          expect(res).to.have.status(400);
          expect(res.body.msg).to.equal('Enter a valid email.');
          done(err);
        });
    });
  });
});