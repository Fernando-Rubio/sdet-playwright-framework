import { test, expect } from '@playwright/test';

test('GET users API returns 200', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
});

test('GET users API returns correct data structure', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();        
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('id');
    expect(users[0]).toHaveProperty('name');
    expect(users[0]).toHaveProperty('email');
});