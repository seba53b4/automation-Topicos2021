/// <reference types="cypress" />

const  { MenuVerticalPage }  = require ('../pages/menuVerticalPage');
const { SamplesPage } = require('../pages/samplesPage');
const { LoginPage } = require('../pages/loginPage');
const {IndicatorsPage} = require('../pages/indicatorsPage')
const random = require('string-random');

describe('Test on Indicator - Usuario Deres', () => {
    beforeEach(() => {
      
      cy.visit(Cypress.env('url'));

    })
  
    it('Crear indicador Directo', () => {

      const loginPage = new LoginPage();
      const menuVerticalPage = new MenuVerticalPage();
      const indicatorsPage = new IndicatorsPage();

      loginPage.doLogin('deres@gmail.com','hola1234');
      menuVerticalPage.goToIndicator();
      indicatorsPage.addNewIndicatorDirect({
        nombre: 'Test Indicator', 
        descripcion: 'Some content', 
        area: 'Petroleo', 
        unidad: 'L', 
        frecuencia:'3'});
      
    });

    it('Crear indicador Indirecto', () => {

      const loginPage = new LoginPage();
      const menuVerticalPage = new MenuVerticalPage();
      const indicatorsPage = new IndicatorsPage();

      loginPage.doLogin('deres@gmail.com','hola1234');
      menuVerticalPage.goToIndicator();
      indicatorsPage.addNewIndicatorInDirect({
        nombre: 'Test Indicator Indirecto - '+ random(4, {specials: false, numbers: true, letters: true}), 
        descripcion: 'Some content', 
        area: 'Petroleo', 
        unidad: 'L', 
        frecuencia:'3',
        indicadorOne: 'Consumo de energia',
        operador: '+',
        indicadorTwo: 'Consumo de agua'
      });
      
    });
    
  });
  