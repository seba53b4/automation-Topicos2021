/// <reference types="cypress" />

const  { MenuVerticalPage }  = require ('../pages/menuVerticalPage');
const { SamplesPage } = require('../pages/samplesPage');
const { LoginPage } = require('../pages/loginPage');

describe('Test on login', () => {
    beforeEach(() => {
      
      cy.visit(Cypress.env('url'));

    })
  

    it('Login', () => {
      const loginPage = new LoginPage(); 
      const menuVerticalPage = new MenuVerticalPage();
      const samplesPage = new SamplesPage();

     loginPage.doLogin('deres@gmail.com','hola1234')

  });
    
    
  });
  