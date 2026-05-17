import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryList: Locator;
    readonly addBackpackButton: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryList = page.locator('.inventory_list');
        this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartLink = page.locator('.shopping_cart_link');

    }

    async addBackpack() {
        await this.addBackpackButton.click();

    }

    async openCart() {
        await this.cartLink.click();
    }
}