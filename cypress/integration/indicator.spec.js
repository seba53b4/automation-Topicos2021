/// <reference types="cypress" />

const  { MenuVerticalPage }  = require ('../pages/menuVerticalPage');
const { LoginPage } = require('../pages/loginPage');
const {IndicatorsPage} = require('../pages/indicatorsPage')
const random = require('string-random');

import userDeres from '../fixtures/user-deres.json';


describe('Test on Indicator - Usuario Deres', () => {

    beforeEach(function()  {
      
      cy.visit(Cypress.env('url'));
      const loginPage = new LoginPage();
      loginPage.doLogin(userDeres.email,userDeres.password);

    })
  
    it('Crear indicador Directo', () => {

      const menuVerticalPage = new MenuVerticalPage();
      const indicatorsPage = new IndicatorsPage();

      const indicator = {
        nombre: 'Test Indicator '+ random(4, {specials: false, numbers: true, letters: true}), 
        descripcion: 'Automated', 
        area: 'Entretenimiento',
        unidad: 'L', 
        frecuencia:'3',
        tipo: 'D',

      };
      
      menuVerticalPage.goToIndicator();
      indicatorsPage.addNewIndicatorDirect(indicator);
      indicatorsPage.validationCreated(indicator);

    });

    it('Crear indicador Indirecto', () => {

      const menuVerticalPage = new MenuVerticalPage();
      const indicatorsPage = new IndicatorsPage();
      //cy.intercept('GET', '/indicator').as('getIndicators');

      
      menuVerticalPage.goToIndicator();
      const indicator = {
        nombre: 'Test Indicator Indirecto - '+ random(4, {specials: false, numbers: true, letters: true}), 
        descripcion: 'Automated', 
        area: 'Petroleo', 
        unidad: 'L', 
        frecuencia:'3',
        indicadorOne: 'Consumo de energia',
        operador: '+',
        indicadorTwo: 'Consumo de agua',
        tipo: 'I'
      };

      indicatorsPage.addNewIndicatorInDirect(indicator);

      // cy.wait('@getIndicators');
      // cy.get('@getIndicators').then( xhr =>{
      //   console.log(xhr);
      // });
      indicatorsPage.validationIndicatorCreated(indicator);
    });

    it('Crear indicador Indirecto + Constante', () => {

      const menuVerticalPage = new MenuVerticalPage();
      const indicatorsPage = new IndicatorsPage();
      //cy.intercept('GET', '/indicator').as('getIndicators');

      
      menuVerticalPage.goToIndicator();
      const indicator = {
        nombre: 'Test Indicator Indirecto - '+ random(4, {specials: false, numbers: true, letters: true}), 
        descripcion: 'Automated', 
        area: 'Petroleo', 
        unidad: 'L', 
        frecuencia:'3',
        indicadorOne: 'Consumo de energia',
        operador: '+',
        indicadorTwo: 'Consumo de agua',
        tipo: 'I',
        constante: 20
      };

      indicatorsPage.addNewIndicatorInDirect(indicator,true);

      // cy.wait('@getIndicators');
      // cy.get('@getIndicators').then( xhr =>{
      //   console.log(xhr);
      // });

      indicatorsPage.validationIndicatorCreated(indicator);
    });


    
  });
  