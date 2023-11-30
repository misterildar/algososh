import { defaultColor, changingColor, queueAddBtn, queueDeleteBtn, queueClearBtn, circle, circleContent } from '../constants/constants';

describe('Тестирование страницы Очередь', () => {
  beforeEach(() => {
    cy.visit('queue');
  });

  it('если в инпуте пусто, то кнопка добавления недоступна', () => {
    cy.get('input').should('have.value', '');
    cy.get(circle).should('have.length', 7)
    cy.get('button').should('contains.text', 'Добавить').should('be.disabled');
    cy.get('button').should('contains.text', 'Удалить').should('be.disabled');
    cy.get('button').should('contains.text', 'Очистить').should('be.disabled');
  });


  it('правильность добавления элемента в очередь', () => {
    cy.get('input').type('1').should('have.value', '1');
    cy.get(queueAddBtn).should('not.be.disabled');
    cy.contains('Добавить').click();
    cy.get(circle).eq(0).should('have.css', 'border', changingColor).should('have.text', '')
    cy.get(circle).eq(0).should('have.css', 'border', changingColor).should('have.text', '1')
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '1')
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(0).contains('tail')
    cy.get('input').should('have.value', '');
    cy.get(queueAddBtn).should('be.disabled');
    cy.get(queueDeleteBtn).should('not.be.disabled');
    cy.get(queueClearBtn).should('not.be.disabled');
    cy.get('input').type('2').should('have.value', '2');
    cy.get(queueAddBtn).should('not.be.disabled');
    cy.contains('Добавить').click();
    cy.get(circle).eq(1).should('have.css', 'border', changingColor).should('have.text', '')
    cy.get(circle).eq(1).should('have.css', 'border', changingColor).should('have.text', '2')
    cy.get(circle).eq(1).should('have.css', 'border', defaultColor).should('have.text', '2')
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(1).contains('tail')
  });



  it('правильность удаления элемента из очереди', () => {
    cy.get('input').type('1').should('have.value', '1');
    cy.get(queueAddBtn).should('not.be.disabled');
    cy.contains('Добавить').click();
    cy.get(circle).eq(0).should('have.css', 'border', changingColor).should('have.text', '')
    cy.get(circle).eq(0).should('have.css', 'border', changingColor).should('have.text', '1')
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '1')
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(0).contains('tail')
    cy.get('input').should('have.value', '');
    cy.get(queueAddBtn).should('be.disabled');
    cy.get(queueDeleteBtn).should('not.be.disabled');
    cy.get(queueClearBtn).should('not.be.disabled');
    cy.get('input').type('2').should('have.value', '2');
    cy.get(queueAddBtn).should('not.be.disabled');
    cy.contains('Добавить').click();
    cy.get(circle).eq(1).should('have.css', 'border', changingColor).should('have.text', '')
    cy.get(circle).eq(1).should('have.css', 'border', changingColor).should('have.text', '2')
    cy.get(circle).eq(1).should('have.css', 'border', defaultColor).should('have.text', '2')
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(1).contains('tail')
    cy.contains('Удалить').click();
    cy.get(circle).eq(0).should('have.css', 'border', changingColor).should('have.text', '1')
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '')
    cy.get(circleContent).eq(1).contains('head')
    cy.get(circleContent).eq(1).contains('tail')
  });


  it('проверка поведения кнопки «Очистить»', () => {
    cy.get('input').type('1').should('have.value', '1');
    cy.get(queueAddBtn).should('not.be.disabled');
    cy.contains('Добавить').click();
    cy.get(circle).eq(0).should('have.css', 'border', changingColor).should('have.text', '')
    cy.get(circle).eq(0).should('have.css', 'border', changingColor).should('have.text', '1')
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '1')
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(0).contains('tail')
    cy.get('input').should('have.value', '');
    cy.get(queueAddBtn).should('be.disabled');
    cy.get(queueDeleteBtn).should('not.be.disabled');
    cy.get(queueClearBtn).should('not.be.disabled');
    cy.get('input').type('2').should('have.value', '2');
    cy.get(queueAddBtn).should('not.be.disabled');
    cy.contains('Добавить').click();
    cy.get(circle).eq(1).should('have.css', 'border', changingColor).should('have.text', '')
    cy.get(circle).eq(1).should('have.css', 'border', changingColor).should('have.text', '2')
    cy.get(circle).eq(1).should('have.css', 'border', defaultColor).should('have.text', '2')
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(1).contains('tail')
    cy.contains('Очистить').click();
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).should('have.text', '')
    cy.get(circle).eq(1).should('have.css', 'border', defaultColor).should('have.text', '')
    cy.get(circle).eq(2).should('have.css', 'border', defaultColor).should('have.text', '')
    cy.get(circleContent).eq(0).contains('head')
    cy.get('input').should('have.value', '');
    cy.get(queueAddBtn).should('be.disabled');
    cy.get(queueDeleteBtn).should('be.disabled');
    cy.get(queueClearBtn).should('be.disabled');
  });

});


