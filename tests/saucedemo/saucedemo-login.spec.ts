import { test, expect } from '@playwright/test';
import { LoginPage  } from '../../pages/saucedemo/LoginPage';
import { InventoryPage } from '../../pages/saucedemo/InventoryPage';
import { validUser } from '../../utils/testData';


test('user can login to Saucedemo', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);

    await expect(page).toHaveURL(/inventory/);
    await expect(inventoryPage.inventoryList).toBeVisible();
});