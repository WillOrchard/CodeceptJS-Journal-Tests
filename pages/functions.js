const { I } = inject();

module.exports = {
  login(username, password) {
    I.amOnPage('http://127.0.0.1:3000');
    I.fillField('Username', username);
    I.fillField('Password', secret(password));
    I.click('Log In');
  },

  create_new(name, link, category) {
    I.click('New Entry');
    I.fillField('Name', name);
    I.fillField('Link', link);
    I.selectOption('Category:', category);
    I.click('Create Entry');
  }

}
