// Cypress examples: https://buttercms.com/blog/how-to-test-nextjs-apps
describe('RB2B Webapp Homepage', () => {
  /*
   * Visits the page before each test
   */
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000`);
    cy.visit('/');
  });
});
