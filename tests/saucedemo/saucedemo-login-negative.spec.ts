import {  test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/saucedemo/LoginPage';

test('locked out user cannot login', async ({ page }) => {
    const loginPage = new LoginPage(page);      
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');

})

test('inalid password shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);      
    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');
    
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
        