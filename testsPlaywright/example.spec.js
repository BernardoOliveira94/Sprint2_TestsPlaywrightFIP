// @ts-check
import { test, expect } from '@playwright/test';

test('Login valido', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/FIP/);


  //TEST 1 Login

  //Insert email
  const email = page.getByRole('textbox', { name: 'Email institucional' });
  await email.fill('b.m.oliveira94@gmail.com');

  //Insert password
  const password = page.getByRole('textbox', { name: 'Senha' });
  await password.fill('Bo*1234567');

  //Login action
  const login = page.getByRole('button', { name: 'Entrar' });
  await login.click();

  //Wait for the login 1
  await page.waitForTimeout(500);
  



  //TEST 2 Create a PDD ( EM RESOLUCAO ...)

  //Click in dashboard
  const dashboard = page.getByRole('link', { name: 'PDD PDD Dashboard' });
  await dashboard.click();

  //Click in New PDD
  const newPDD = page.getByRole('link', { name: 'Novo PDD PDD' });
  await newPDD.click();

  //Click in Select subject
  const selectSubject = page.getByLabel('Disciplina');
  await selectSubject.click();

  //Wait for the dropdown 2
  await page.waitForTimeout(500);

  //Select the subject by value, label or index
  
  //const clickSubject = page.getByLabel('Disciplina');
  //await clickSubject.selectOption('ONZE'); //value, nao funciona, rever aula com Bruno

  const clickSubject = page.getByLabel('Disciplina');
  await clickSubject.selectOption({ label: '11 - DISCIPLINA ONZE' }); //label

  //const clickSubject = page.getByLabel('Disciplina');
  //await clickSubject.selectOption({ index: 1 }); //index

  //Click next button 1
  const clickNextButton1 = page.getByRole('button', { name: 'Próximo' });
  await clickNextButton1.click();

  //Wait for the next page 3
  await page.waitForTimeout(500);

  //Fill teaching plan - Info and details, in order from menu to complementary references (9 fills)
  const menu1 = page.getByRole('textbox', { name: 'Ementa', exact: true });
  await menu1.fill('Ementa 1');

  const learningObjective = page.getByRole('textbox', { name: 'Objetivos de Aprendizagem' });
  await learningObjective.fill('Objetivos de Aprendizagem 1');

  const skills = page.getByRole('textbox', { name: 'Competências' });
  await skills.fill('Competências 1');

  const programContent = page.getByRole('textbox', { name: 'Conteúdo Programático' });
  await programContent.fill('Conteúdo Programático 1');

  const teachingStrats = page.getByRole('textbox', { name: 'Metodologia Estratégia de' });
  await teachingStrats.fill('Metodologia - Estratégias de Ensino 1');

  const resources = page.getByRole('textbox', { name: 'Metodologia Recursos' });
  await resources.fill('Metodologia - Recursos 1');

  const assessment = page.getByRole('textbox', { name: 'Avaliação' });
  await assessment.fill('Avaliação 1');

  const basicReference = page.getByRole('textbox', { name: 'Referencias Básica' });
  await basicReference.fill('Referências - Básica 1');

  const complementaryReferences = page.getByRole('textbox', { name: 'Referências Complementares' });
  await complementaryReferences.fill('Referências - Complementar 1');

  //Click next button 2
  const clickNextButton2 = page.getByRole('button', { name: 'Próximo' });
  await clickNextButton2.click();

  //Wait for the next page 4
  await page.waitForTimeout(500);

  //Click in new class 1
  const clickNewClass1 = page.getByRole('listitem', { name: 'Nova Aula', exact: true });
  await clickNewClass1.click();

  //Wait for the pop up 5
  await page.waitForTimeout(500);

  //Click learning unit
  const clickLearningUnit = page.getByRole('checkbox', { name: 'Unidade de Aprendizagem (UA)' });
  await clickLearningUnit.click();

  const clickFirstDate = page.getbyTestId(`CalendarIcon`).click();
  await clickFirstDate.click();

/*
  //TEST 3 Delete PDD

  //Select home page
  const goToHome = page.getByRole('navigation').getByRole('link').first();
  await goToHome.click();

  //Click in dashboard 2
  const dashboard2 = page.getByRole('link', { name: 'PDD PDD Dashboard' });
  await dashboard2.click();

  //Wait for the next page 6
  await page.waitForTimeout(500);

  //Click on delete
  const deletePdd1 = page.getByTitle('Deletar');
  await deletePdd1.click();

  //Wait for the next pop up 7
  await page.waitForTimeout(500);

  //Click confirm selector
  const clickConfirm = page.getByRole('checkbox', { name: 'Confirme' });
  await clickConfirm.click();

  //Click Accept button 1
  const clickAcceptButton1 = page.getByRole('button', { name: 'Aceitar' });
  await clickAcceptButton1.click();
*/


/*
  //TEST 4 Password reset

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


  //TEST 5 (a fazer)

});
