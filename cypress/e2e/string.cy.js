import { changingColor, modifiedColor, defaultColor, circle } from '../constants/constants';

describe('Тестирование страницы Строка', () => {
  beforeEach(() => {
    cy.visit('recursion');
  });

  it('если в инпуте пусто, то кнопка добавления недоступна', () => {
    cy.get('input').should('have.value', '');
    cy.get('button').should('contains.text', 'Развернуть').and('be.disabled');
  });


  it('строка разворачивается корректно с чётным количеством символов', () => {
    cy.get('input').type('1234').should('have.value', '1234');
    cy.get('button').should('contains.text', 'Развернуть').should('not.be.disabled');
    cy.contains('Развернуть').click();
    cy.get('input').should('have.value', '');
    cy.get(circle).should('have.length', 4)

    cy.get(circle).eq(0).should('have.css', 'border', changingColor).and('have.text', '1')
    cy.get(circle).eq(1).should('have.css', 'border', defaultColor).and('have.text', '2')
    cy.get(circle).eq(2).should('have.css', 'border', defaultColor).and('have.text', '3')
    cy.get(circle).eq(3).should('have.css', 'border', changingColor).and('have.text', '4')

    cy.get(circle).eq(0).should('have.css', 'border', modifiedColor).and('have.text', '4')
    cy.get(circle).eq(1).should('have.css', 'border', changingColor).and('have.text', '2')
    cy.get(circle).eq(2).should('have.css', 'border', changingColor).and('have.text', '3')
    cy.get(circle).eq(3).should('have.css', 'border', modifiedColor).and('have.text', '1')

    cy.get(circle).eq(0).should('have.css', 'border', modifiedColor).and('have.text', '4')
    cy.get(circle).eq(1).should('have.css', 'border', modifiedColor).and('have.text', '3')
    cy.get(circle).eq(2).should('have.css', 'border', modifiedColor).and('have.text', '2')
    cy.get(circle).eq(3).should('have.css', 'border', modifiedColor).and('have.text', '1')
  });



  it('строка разворачивается корректно с нечетным количеством символов', () => {
    cy.get('input').type('123').should('have.value', '123');
    cy.get('button').should('contains.text', 'Развернуть').should('not.be.disabled');
    cy.contains('Развернуть').click();
    cy.get('input').should('have.value', '');
    cy.get('div[class*="circle_circle"]').as('circles').should('have.length', 3)

    cy.get(circle).eq(0).should('have.css', 'border', changingColor).and('have.text', '1')
    cy.get(circle).eq(1).should('have.css', 'border', defaultColor).and('have.text', '2')
    cy.get(circle).eq(2).should('have.css', 'border', changingColor).and('have.text', '3')

    cy.get(circle).eq(0).should('have.css', 'border', modifiedColor).and('have.text', '3')
    cy.get(circle).eq(1).should('have.css', 'border', changingColor).and('have.text', '2')
    cy.get(circle).eq(2).should('have.css', 'border', modifiedColor).and('have.text', '1')

    cy.get(circle).eq(0).should('have.css', 'border', modifiedColor).and('have.text', '3')
    cy.get(circle).eq(1).should('have.css', 'border', modifiedColor).and('have.text', '2')
    cy.get(circle).eq(2).should('have.css', 'border', modifiedColor).and('have.text', '1')
  });


  it('строка разворачивается корректно с одним символов', () => {
    cy.get('input').type('1').should('have.value', '1');
    cy.get('button').should('contains.text', 'Развернуть').and('not.be.disabled');
    cy.contains('Развернуть').click();
    cy.get('input').should('have.value', '');
    cy.get(circle).should('have.length', 1)
    cy.get(circle).eq(0).should('have.css', 'border', changingColor).and('have.text', '1')
    cy.get(circle).eq(0).should('have.css', 'border', modifiedColor).and('have.text', '1')
  });


  it('строка разворачивает корректно пустую строку', () => {
    cy.get('input').type(' ').should('have.value', '');
    cy.get('button').should('contains.text', 'Развернуть').and('be.disabled');
  });


  it('проверка на ошибки', () => {
    cy.get('input').type('1234').should('have.value', '1234');
    cy.get('button').should('contains.text', 'Развернуть').should('not.be.disabled');
    cy.contains('Развернуть').click();
    cy.get(circle).should('have.length', 4)
    cy.get('input').should('not.have.value', '1234');
    cy.get(circle).eq(0).should('not.have.text', '1')
    cy.get(circle).eq(0).should('not.have.text', '')
    cy.get(circle).each(($el) => {
      cy.wrap($el).should('have.css', 'border', modifiedColor).and('not.be.empty')
    })
  });

});

