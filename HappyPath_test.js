Feature('Happy path tests');

Scenario('test the login form',  ({ I, functionsPage}) => {
    functionsPage.login('WillOrchard','password')
    I.see('Logged in as: WillOrchard');
});

Scenario('create new entry',  ({ I, functionsPage}) => {
    functionsPage.login('WillOrchard','password');
    functionsPage.create_new('New Entry','New Link','Solirius Resource');
    I.click('.solirius-link');
    I.see('New Entry');
});

Scenario('edit entry',  ({ I, functionsPage}) => {
    functionsPage.login('WillOrchard','password');
    I.click('.solirius-link');
    I.click('Edit');
    I.fillField('Name','Updated Entry');
    I.click('Update Entry');
    I.click('.solirius-link');
    I.see('Updated Entry');
});

Scenario('delete entry',  ({ I, functionsPage}) => {
    functionsPage.login('WillOrchard','password');
    I.click('.solirius-link');
    I.click('Delete');
    I.dontSee('Updated Entry');
});

Scenario('logout button',  ({ I, functionsPage}) => {
    functionsPage.login('WillOrchard','password');
    I.clickLink('Log out');
    I.see('Login');
});