describe('Тестирование переходов по страницам', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('МБОУ АЛГОСОШ');
    cy.contains('им. Фибоначчи');
    cy.contains('© Сделано в Практикуме.');
    cy.contains("Вдохновлено школами, в которых не учили алгоритмам");
  });

  it('Страница Строка доступна', () => {
    cy.get('[href = "/recursion"]').click();
    cy.contains('МБОУ АЛГОСОШ');
    cy.contains('им. Фибоначчи');
    cy.contains('© Сделано в Практикуме.');
    cy.contains('Строка');
    cy.contains("К оглавлению").click();
  });


  it('Страница Последовательность Фибоначчи доступна', () => {
    cy.get('[href = "/fibonacci"]').click();
    cy.contains('МБОУ АЛГОСОШ');
    cy.contains('им. Фибоначчи');
    cy.contains('© Сделано в Практикуме.');
    cy.contains('Последовательность Фибоначчи');
    cy.contains("К оглавлению").click();
  });


  it('Страница Сортировка массива доступна', () => {
    cy.get('[href = "/sorting"]').click();
    cy.contains('МБОУ АЛГОСОШ');
    cy.contains('им. Фибоначчи');
    cy.contains('© Сделано в Практикуме.');
    cy.contains('Сортировка массива');
    cy.contains("К оглавлению").click();
  });


  it('Страница Стек доступна', () => {
    cy.get('[href = "/stack"]').click();
    cy.contains('МБОУ АЛГОСОШ');
    cy.contains('им. Фибоначчи');
    cy.contains('© Сделано в Практикуме.');
    cy.contains('Стек');
    cy.contains("К оглавлению").click();
  });


  it('Страница Очередь доступна', () => {
    cy.get('[href = "/queue"]').click();
    cy.contains('МБОУ АЛГОСОШ');
    cy.contains('им. Фибоначчи');
    cy.contains('© Сделано в Практикуме.');
    cy.contains('Очередь');
    cy.contains("К оглавлению").click();
  });


  it('Страница Связный список доступна', () => {
    cy.get('[href = "/list"]').click();
    cy.contains('МБОУ АЛГОСОШ');
    cy.contains('им. Фибоначчи');
    cy.contains('© Сделано в Практикуме.');
    cy.contains('Связный список');
    cy.contains("К оглавлению").click();
  });

});

