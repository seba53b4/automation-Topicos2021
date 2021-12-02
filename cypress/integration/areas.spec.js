/// <reference types="cypress" />

const  { MenuVerticalPage }  = require ('../pages/menuVerticalPage');

const { LoginPage } = require('../pages/loginPage');
const { AreaPage } = require('../pages/areaPage');
const random = require('string-random');
import userDeres from '../fixtures/user-deres.json';

describe('Test on Area', () => {
    beforeEach(() => {
      
      cy.visit(Cypress.env('url'));
      const loginPage = new LoginPage(); 
      loginPage.doLogin(userDeres.email,userDeres.password);
    })
  
    it('Crear nueva Area', () => {
      
      const menuVerticalPage = new MenuVerticalPage();
      const areaPage = new AreaPage();
      const area = {
        nombre: 'Area - '+ random(4, {specials: false, numbers: true, letters: true}),
        descripcion: 'Automation'
      };
     
      menuVerticalPage.goToAreas();
      areaPage.addNewArea(area);
      areaPage.validationAreaCreated(area);

  });
    
    
  });
  