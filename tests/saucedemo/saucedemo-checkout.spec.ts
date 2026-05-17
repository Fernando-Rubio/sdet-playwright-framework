import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/saucedemo/LoginPage';
import { InventoryPage } from '../../pages/saucedemo/InventoryPage';
import { CheckoutPage } from '../../pages/saucedemo/CheckoutPage';

test('user can complete checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addBackpack();
    await inventoryPage.openCart();

    await page.locator('#checkout').click();

    await checkoutPage.fillCheckoutInfo(
        'John',
        'Doe',
        '12345'
    );

    await checkoutPage.continueCheckout();

    await expect(page).toHaveURL(/checkout-step-two/);

    await checkoutPage.finishCheckout();

    await expect(page).toHaveURL(/checkout-complete/);
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
})