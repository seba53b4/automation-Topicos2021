/// <reference types="cypress" />

const  { MenuVerticalPage }  = require ('../pages/menuVerticalPage');
const { LoginPage } = require('../pages/loginPage');
const { EmpresaPage } = require('../pages/empresaPage');
const random = require('string-random');

describe('Test on Empresa - Usuario Deres', () => {
    beforeEach(() => {
      
      cy.visit(Cypress.env('url'));

    })
  
    it('Crear nueva Empresa', () => {
      const loginPage = new LoginPage(); 
      const menuVerticalPage = new MenuVerticalPage();
      const empresaPage = new EmpresaPage();

     loginPage.doLogin('deres@gmail.com','hola1234');
     menuVerticalPage.goToEmpresa();
     empresaPage.addNewEnterprise({
        nombre: 'Empresa - '+ random(4, {specials: false, numbers: true, letters: true}),
        RUT: '1234',
        razonSocial: 'Razon social Test',
        rubro: 'Rubro Test'
     });


  });
    
    
  });
  
  