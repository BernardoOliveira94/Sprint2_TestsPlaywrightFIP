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

  //Wait for the login
  await page.waitForTimeout(1000);

  //Click in dashboard
  const dashboard = page.getByRole('link', { name: 'PDD PDD Dashboard' });
  await dashboard.click();

  //Click in New PDD
  const newPDD = page.getByRole('link', { name: 'Novo PDD PDD' });
  await newPDD.click();

  //Click in Select subject
  const selectOption1 = page.getByLabel('Disciplina');
  await selectOption1.click();

  //Select the subject by value, label or index
  await page.selectOption('#Disciplina', '11'); // value
  //await page.selectOption('#Disciplina', { label: '11' }); //label
  //await page.selectOption('#Disciplina', { index: 0 }); //index



});
