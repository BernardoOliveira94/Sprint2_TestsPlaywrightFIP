READ ME
...
..
. 
  
Bootcamp turma 3 2025  
  
Bernardo Oliveira 3 tests playwright  
  
Estas notas indicam como proceder para começar a testar em playwright.  
  
Passos para dependencias e testes:  
1 - Verificar que o NODE.JS e o NPM estão instalados pondo o comando "node -v" e "npm -v" no terminal em modo administrador, e verificar se aparecem versões, se não, instalar ambos.  
2 - Criar pasta nova no windows.  
3 - Abrir a pasta no VSCODE.  
4 - Abrir terminal.  
5 - Iniciar um projeto com o comando "npm init" no terminal, para criar package.json.  
6 - Inserir no terminal o comando "npm init playwright@latest" para instalar o playwright neste projeto, escolher Javascript, escolher pasta dos testes, adicionar GitHub Actions, e instalar os browsers, esperar pela mensagem happy hacking.  
7 - Inserir no terminal o comando "npx playwright test --ui" para abrir este projeto no plawywright.  
8 - No vs code, alterar o URL, dentro da pasta escolhida (no meu caso testsPlaywright -> example.spec.js) para o URL do site da FIP = https://pddtestev2.gerenciatiunifip.opalstacked.com/login/ .  
9 - Usar o github desktop para criar repositorio, escolher pasta, fazer o 1º commit, e push para ficar acessível no github.  
10 - Inserir codigo no VS CODE, gravando, e dando start no Playwright para testar e ver os resultados se passaram ou não.  
11 - Continuar até ter pelo menos 3 testes completos.  
  
PS: Caso necessário é preciso descomentar (retirar coments) de algum código comentado a verde para o código funcionar corretamente ou num todo.
