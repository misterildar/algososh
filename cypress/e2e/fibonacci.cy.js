import { defaultColor, circle } from '../constants/constants';

describe('Тестирование страницы Фибоначчи', () => {
  beforeEach(() => {
    cy.visit('fibonacci');
  });

  it('если в инпуте пусто, то кнопка добавления недоступна', () => {
    cy.get('input').should('have.value', '');
    cy.get('button').should('contains.text', 'Рассчитать').should('be.disabled');
  });

  it('числа генерируются корректно', () => {
    cy.get('input').type('6').should('have.value', '6');
    cy.get('button').should('contains.text', 'Рассчитать').should('not.be.disabled');
    cy.contains('Рассчитать').click();
    cy.get(circle).should('have.length', 7)
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '1')
    cy.get(circle).eq(1).should('have.css', 'border', defaultColor).should('have.text', '1')
    cy.get(circle).eq(2).should('have.css', 'border', defaultColor).should('have.text', '2')
    cy.get(circle).eq(3).should('have.css', 'border', defaultColor).should('have.text', '3')
    cy.get(circle).eq(4).should('have.css', 'border', defaultColor).should('have.text', '5')
    cy.get(circle).eq(5).should('have.css', 'border', defaultColor).should('have.text', '8')
    cy.get(circle).eq(6).should('have.css', 'border', defaultColor).should('have.text', '13')
    cy.get('input').should('have.value', '');
  });

});


