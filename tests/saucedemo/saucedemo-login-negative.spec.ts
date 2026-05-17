import {  test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/saucedemo/LoginPage';
import { lockedOutUser, invalidPasswordUser } from '../../utils/testData';

test('locked out user cannot login', async ({ page }) => {
    const loginPage = new LoginPage(page);      
    await loginPage.goto();
    await loginPage.login(lockedOutUser.username, lockedOutUser.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');

})

test('inalid password shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);      
    await loginPage.goto();
    await loginPage.login(invalidPasswordUser.username, invalidPasswordUser.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match any user in this service');
})

test('invalid username shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);      
    await loginPage.goto();
    await loginPage.login('wrong_username', 'secret_sauce');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match any user in this service');
})
        