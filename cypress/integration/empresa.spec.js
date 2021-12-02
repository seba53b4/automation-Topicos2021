/// <reference types="cypress" />

const  { MenuVerticalPage }  = require ('../pages/menuVerticalPage');
const { LoginPage } = require('../pages/loginPage');
const { EmpresaPage } = require('../pages/empresaPage');
const random = require('string-random');
import userDeres from '../fixtures/user-deres.json';


describe('Test on Empresa - Usuario Deres', () => {
    beforeEach(() => {
      
      cy.visit(Cypress.env('url'));
      const loginPage = new LoginPage();
      loginPage.doLogin(userDeres.email,userDeres.password);
      let empresa = {
        nombre: 'Empresa - '+ random(4, {specials: false, numbers: true, letters: true}),
        RUT: '1234',
        razonSocial: 'Razon social Test',
        rubro: 'Rubro Test'
      };

    })
  
    it('Crear nueva Empresa', () => {
      
      const menuVerticalPage = new MenuVerticalPage();
      const empresaPage = new EmpresaPage();
      const empresa = {
        nombre: 'Empresa - '+ random(4, {specials: false, numbers: true, letters: true}),
        RUT: '1234',
        razonSocial: 'Razon social Test',
        rubro: 'Rubro Test'
      };
      menuVerticalPage.goToEmpresa();
      empresaPage.addNewEnterprise(empresa);
      empresaPage.validationEnterpriseCreated(empresa);


  });
    
    
  });
  
  