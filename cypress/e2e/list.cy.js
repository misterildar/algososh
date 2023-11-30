import { circle, inputText, inputNumber, circleContent, modifiedColor, defaultColor, changingColor } from '../constants/constants';

describe('Тестирование страницы Список', () => {
  beforeEach(() => {
    cy.visit('list');
  });

  it('если в инпуте пусто, то кнопка добавления недоступна', () => {
    cy.get(inputText).should('have.value', '');
    cy.get(inputNumber).should('have.value', '');
    cy.get(circleContent).should('have.length', 4)
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(3).contains('tail')
    cy.get('button').should('contains.text', 'Добавить в head').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить в tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить по индексу').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить по индексу').and('be.disabled');
  });

  it('отрисовки дефолтного списка', () => {
    cy.get(circleContent).should('have.length', 4)
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(3).contains('tail')
    cy.get('button').should('contains.text', 'Добавить в head').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить в tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить по индексу').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить по индексу').and('be.disabled');
    cy.get(circle).each(($el) => {
      cy.wrap($el).should('have.css', 'border', defaultColor).and('not.be.empty')
    })
  });

  it('добавления элемента в head', () => {
    cy.get(inputText).type('1').should('have.value', '1');
    cy.get('button').should('contains.text', 'Удалить из head').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить из tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить по индексу').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить по индексу').and('be.disabled');
    cy.contains('Добавить в head').click();
    cy.get(circleContent).should('have.length', 5)
    cy.get(circle).eq(0).should('have.css', 'border', modifiedColor).and('have.text', '1')
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).and('have.text', '1')
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(4).contains('tail')
  });

  it('добавления элемента в tail', () => {
    cy.get(inputText).type('2').should('have.value', '2');
    cy.get('button').should('contains.text', 'Удалить из head').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить из tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить по индексу').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить по индексу').and('be.disabled');
    cy.contains('Добавить в tail').click();
    cy.get(circleContent).should('have.length', 5)
    cy.get(circle).eq(4).should('have.css', 'border', modifiedColor).and('have.text', '2')
    cy.get(circle).eq(4).should('have.css', 'border', defaultColor).and('have.text', '2')
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(4).contains('tail')
  });

  it('удаления элемента из head', () => {
    cy.get(circleContent).should('have.length', 4)
    cy.get('button').should('contains.text', 'Добавить в head').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить в tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить по индексу').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить по индексу').and('be.disabled');
    cy.contains('Удалить из head').click();
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor).and('have.text', '')
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(2).contains('tail')
    cy.get(circleContent).should('have.length', 3)
  });

  it('удаления элемента из tail', () => {
    cy.get(circleContent).should('have.length', 4)
    cy.get('button').should('contains.text', 'Добавить в head').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить в tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить по индексу').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить по индексу').and('be.disabled');
    cy.contains('Удалить из tail').click();
    cy.get(circle).eq(3).should('have.css', 'border', defaultColor).and('have.text', '')
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(2).contains('tail')
    cy.get(circleContent).should('have.length', 3)
  });

  it('добавления элемента по индексу', () => {
    cy.get(circleContent).should('have.length', 4)
    cy.get(inputText).type('3').should('have.value', '3');
    cy.get(inputNumber).type(1).should('have.value', '1');
    cy.get('button').should('contains.text', 'Добавить в head').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить в tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить из head').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить из tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить по индексу').and('be.disabled');
    cy.contains('Добавить по индексу').click();
    cy.get(circle).eq(1).should('have.css', 'border', modifiedColor).and('have.text', '3')
    cy.get(circle).eq(1).should('have.css', 'border', defaultColor).and('have.text', '3')
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(4).contains('tail')
    cy.get(circleContent).should('have.length', 5)
  });

  it('удаления элемента по индексу', () => {
    cy.get(circleContent).should('have.length', 4)
    cy.get(inputNumber).type(2).should('have.value', '2');
    cy.get('button').should('contains.text', 'Добавить в head').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить в tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить из head').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить из tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить по индексу').and('be.disabled');
    cy.contains('Удалить по индексу').click();
    cy.get(circle).eq(0).should('have.css', 'border', changingColor)
    cy.get(circle).eq(1).should('have.css', 'border', changingColor)
    cy.get(circle).eq(2).should('have.css', 'border', defaultColor).and('have.text', '')
    cy.get(circle).eq(0).should('have.css', 'border', defaultColor)
    cy.get(circle).eq(1).should('have.css', 'border', defaultColor)
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(2).contains('tail')
    cy.get(circleContent).should('have.length', 3)
  });

  it('удаления элемента по несуществующему индексу', () => {
    cy.get(circleContent).should('have.length', 4)
    cy.get(inputNumber).type(5).should('have.value', '5');
    cy.get('button').should('contains.text', 'Добавить в head').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить в tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить из head').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить из tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить по индексу').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить по индексу').and('be.disabled');
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(3).contains('tail')
    cy.get(circleContent).should('have.length', 4)
  });

  it('добавления элемента по несуществующему индексу', () => {
    cy.get(circleContent).should('have.length', 4)
    cy.get(inputText).type('err').should('have.value', 'err');
    cy.get(inputNumber).type(8).should('have.value', '8');
    cy.get('button').should('contains.text', 'Добавить в head').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить в tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить из head').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить из tail').and('be.disabled');
    cy.get('button').should('contains.text', 'Добавить по индексу').and('be.disabled');
    cy.get('button').should('contains.text', 'Удалить по индексу').and('be.disabled');
    cy.get(circleContent).eq(0).contains('head')
    cy.get(circleContent).eq(3).contains('tail')
    cy.get(circleContent).should('have.length', 4)
  });

});


