/// <reference types="cypress" />

const  { MenuVerticalPage }  = require ('../pages/menuVerticalPage');
const { SamplesPage } = require('../pages/samplesPage');

const { LoginPage } = require('../pages/loginPage');
const { AreaPage } = require('../pages/areaPage');
const random = require('string-random');

describe('Test on Area', () => {
    beforeEach(() => {
      
      cy.visit(Cypress.env('url'));

    })
  
    it('Create new Area', () => {
      const loginPage = new LoginPage(); 
      const menuVerticalPage = new MenuVerticalPage();
      const areaPage = new AreaPage();

     loginPage.doLogin('deres@gmail.com','hola1234');
     menuVerticalPage.goToAreas();
      areaPage.addNewArea({
        nombre: 'Area - '+ random(4, {specials: false, numbers: true, letters: true}),
        descripcion: 'Some descripcion'
      })

  });
    
    
  });
  