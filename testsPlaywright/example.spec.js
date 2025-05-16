// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/FIP/);


  //TEST 1 Login

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
  

/*
  //TEST 2 Create a PDD

  //Click in dashboard
  const dashboard = page.getByRole('link', { name: 'PDD PDD Dashboard' });
  await dashboard.click();

  //Click in New PDD
  const newPDD = page.getByRole('link', { name: 'Novo PDD PDD' });
  await newPDD.click();

  //Click in Select subject
  const selectSubject = page.getByLabel('Disciplina');
  await selectSubject.click();

  //Wait for the dropdown
  await page.waitForTimeout(1000);

  //Select the subject by value, label or index
  //await page.selectOption('#Disciplina', '11'); // value
  //await page.selectOption('#Disciplina', { label: '11 - DISCIPLINA ONZE' }); //label
  //await page.selectOption('#Disciplina', { index: 0 }); //index
*/

/*
  //TEST 3 Password reset

  //Select profile name
  const clickProfileName = page.getByRole('link', { name: 'Profile BERNARDO' });
  await clickProfileName.click();

  //Select profile option
  const clickProfileOption = page.getByRole('link', { name: ' Perfil' });
  await clickProfileOption.click();

  //Wait for the next page
  await page.waitForTimeout(1000);

  //Click on password edit
  const clickPassEdit = page.getByRole('link', { name: 'Editar Senha' });
  await clickPassEdit.click();

  //Fill new password
  const newPassword1 = page.getByRole('textbox', { name: 'Nova senha' });
  await newPassword1.fill('Bo*1234567');

  //Repeat fill new password
  const newPassword2 = page.getByRole('textbox', { name: 'Repita a senha' });
  await newPassword2.fill('Bo*1234567');

  //Select reset password
  const clickResetPassword = page.getByRole('button', { name: 'Redefinir Senha' });
  await clickResetPassword.click();
*/

  //TEST 4

});
