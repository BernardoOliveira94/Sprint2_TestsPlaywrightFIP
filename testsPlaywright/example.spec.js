// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/FIP/);

  //Insert email
  const email = page.getByRole('textbox', { name: 'Email institucional' });
  await email.fill('b.m.oliveira94@gmail.com');

  //Insert password
  const password = page.getByRole('textbox', { name: 'Senha' });
  await password.fill('Bo*123456');

  //Login action
  const login = page.getByRole('button', { name: 'Entrar' });
  await login.click();

});
