import { defaultColor, changingColor, stackAddBtn, stackDeleteBtn, stackClearBtn, circle } from '../constants/constants';

describe('Тестирование страницы Стек', () => {
  beforeEach(() => {
    cy.visit('stack');
  });

  it('если в инпуте пусто, то кнопка добавления недоступна', () => {
    cy.get('input').should('have.value', '');
    cy.get('button').should('contains.text', 'Добавить').should('be.disabled');
    cy.get('button').should('contains.text', 'Удалить').should('be.disabled');
    cy.get('button').should('contains.text', 'Очистить').should('be.disabled');
  });


  it('правильность добавления элемента в стек', () => {
    cy.get('input').type('6').should('have.value', '6');
    cy.get(stackAddBtn).should('not.be.disabled');
    cy.contains('Добавить').click();
    cy.get(circle).should('have.length', 1)
    cy.get(circle).eq(0).should('have.css', 'border', changingColor).should('have.text', '6')
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '6')
    cy.get(stackDeleteBtn).should('not.be.disabled');
    cy.get(stackClearBtn).should('not.be.disabled');
    cy.get('input').should('have.value', '');
    cy.get(stackAddBtn).should('be.disabled');
  });


  it('правильность удаления элемента  из стека', () => {
    cy.get('input').type('6').should('have.value', '6');
    cy.get(stackAddBtn).should('not.be.disabled');
    cy.contains('Добавить').click();
    cy.get(circle).should('have.length', 1)
    cy.get(circle).eq(0).should('have.css', 'border', changingColor).should('have.text', '6')
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '6')
    cy.get('input').type('7').should('have.value', '7');
    cy.contains('Добавить').click();
    cy.get(circle).should('have.length', 2)
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '6')
    cy.get(circle).eq(1).should('have.css', 'border', changingColor).should('have.text', '7')
    cy.get(circle).eq(1).should('have.css', 'border', defaultColor).should('have.text', '7')
    cy.contains('Удалить').click();
    cy.get(circle).eq(1).should('have.css', 'border', changingColor).should('have.text', '7')
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '6')
    cy.get(circle).should('have.length', 1)
    cy.get('input').should('have.value', '');
    cy.get(stackAddBtn).should('be.disabled');
  });


  it('проверка поведения кнопки «Очистить»', () => {
    cy.get('input').type('8').should('have.value', '8');
    cy.get(stackAddBtn).should('not.be.disabled');
    cy.contains('Добавить').click();
    cy.get(circle).should('have.length', 1)
    cy.get(circle).eq(0).should('have.css', 'border', changingColor).should('have.text', '8')
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '8')
    cy.get('input').type('9').should('have.value', '9');
    cy.contains('Добавить').click();
    cy.get(circle).should('have.length', 2)
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '8')
    cy.get(circle).eq(1).should('have.css', 'border', changingColor).should('have.text', '9')
    cy.get(circle).eq(1).should('have.css', 'border', defaultColor).should('have.text', '9')
    cy.contains('Очистить').click();
    cy.get(circle).should('not.exist')
    cy.get('input').should('have.value', '');
    cy.get(stackAddBtn).should('be.disabled');
    cy.get(stackDeleteBtn).should('be.disabled');
    cy.get(stackClearBtn).should('be.disabled');
  });

});


