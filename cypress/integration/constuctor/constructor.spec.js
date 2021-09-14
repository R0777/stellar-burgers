describe('constuctor conmonent work correctly', function() {
  before(function() {
    cy.visit('http://localhost:3000');
  });

  it('should dnd element on the page', function() {
    cy.get("figure[class^=burger]").first().as('element');
    cy.get("@element").find('img[draggable=true]').first().as('product');
    cy.get("@product").trigger("dragstart").trigger("dragleave");
    cy.get("li[class^=burger-constructor]").first()
    .trigger("dragenter")
    .trigger("dragover")
    .trigger("drop")
    .trigger("dragend");
    cy.get('@element').find('[class^=counter]').first().as('productCount');
    cy.get('@productCount').should('contain', '1');
  });
});