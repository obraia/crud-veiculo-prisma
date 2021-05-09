const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();

const url = 'http://localhost:3001';
const placa = 'GSR-2944';

describe('Teste CRUD Veículo', () => {

  describe('/GET veiculo', () => {
    it('Testando listagem de todos os veículos', (done) => {
      chai.request(url)
        .get('/veiculo')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        })
    })
  });

  describe('/POST veiculo', () => {
    it('Testando adição de um novo veículo', (done) => {

      const veiculo = {
        placa,
        chassi: "5YA 6K72A6 Eg 7d0482",
        renavam: "99858477768",
        modelo: "A6 4.2 Quattro Tiptronic",
        marca: "Audi",
        ano: 2000
      }

      chai.request(url)
        .post('/veiculo')
        .send(veiculo)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        })
    })
  });

  describe('/POST veiculo', () => {
    it('Testando adição de um novo veículo com placa repetida', (done) => {

      const veiculo = {
        placa,
        chassi: "5YA 6K72A6 Eg 7d0482",
        renavam: "99858477768",
        modelo: "A6 4.2 Quattro Tiptronic",
        marca: "Audi",
        ano: 2000
      }

      chai.request(url)
        .post('/veiculo')
        .send(veiculo)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        })
    })
  });

  describe('/PUT veiculo', () => {
    it('Testando edição de um veículo', (done) => {

      const veiculo = {
        placa,
        chassi: "5YA 6K72A6 Eg 7d0482",
        renavam: "99858477768",
        modelo: "A6 4.2 Quattro Tiptronic",
        marca: "Audi",
        ano: 2000
      }

      chai.request(url)
        .put('/veiculo')
        .send(veiculo)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
    })
  });

  describe('/PUT veiculo', () => {
    it('Testando edição de um veículo que não existe', (done) => {

      const veiculo = {
        placa: 'XXX0000',
        chassi: "5YA 6K72A6 Eg 7d0482",
        renavam: "99858477768",
        modelo: "A6 4.2 Quattro Tiptronic",
        marca: "Audi",
        ano: 2000
      }

      chai.request(url)
        .put('/veiculo')
        .send(veiculo)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        })
    })
  });

  describe('/GET/:placa veiculo', () => {
    it('Testando obter veículo por placa', (done) => {

      chai.request(url)
        .get('/veiculo/' + placa)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('id');
          res.body.should.have.property('placa').eql(placa);
          res.body.should.have.property('chassi');
          res.body.should.have.property('renavam');
          res.body.should.have.property('modelo');
          res.body.should.have.property('marca');
          res.body.should.have.property('ano');
          done();
        })
    })
  });

  describe('/GET/:placa veiculo', () => {
    it('Testando obter veículo que não existe por placa', (done) => {

      chai.request(url)
        .get('/veiculo/' + 'XXX0000')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        })
    })
  });

  describe('/DELETE veiculo', () => {
    it('Testando delete de um veículo', (done) => {


      chai.request(url)
        .delete('/veiculo/' + placa)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
    })
  });

  describe('/DELETE veiculo', () => {
    it('Testando delete de um veículo que não existe', (done) => {


      chai.request(url)
        .delete('/veiculo/' + 'XXX0000')
        .end((err, res) => {
          res.should.have.status(400);
          done();
        })
    })
  });
});