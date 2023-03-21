Feature('Unhappy path tests');

Scenario('invalid login',  ({ I, functionsPage}) => {
    functionsPage.login('WillOrchard','passwor');
    I.see('Invalid username or password.');
});

Scenario('create blank entry',  ({ I, functionsPage}) => {
    functionsPage.login('WillOrchard','password');
    I.click('New Entry');
    I.click('Create Entry');
    I.see('Error - \'Name\' field cannot be empty');
});