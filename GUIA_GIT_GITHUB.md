# 📤 GUIA COMPLETO: Git + GitHub para Iniciantes

## ⚠️ ANTES DE COMEÇAR

Verifique se você tem:
- ✅ Conta criada no [github.com](https://github.com)
- ✅ Git instalado no computador
- ✅ Os arquivos do FoodHub na pasta `ProjetoA3_Larissa`

---

## ✅ PASSO 1: Verificar se Git está Instalado

### **No Windows (PowerShell)**

1. **Abra o PowerShell:**
   - Clique no **ícone do Windows** (canto inferior esquerdo)
   - Digite: `PowerShell`
   - Clique para abrir

2. **Digite este comando:**
   ```
   git --version
   ```

3. **Se aparecer algo como `git version 2.42.0...` = ✅ Git instalado**

4. **Se aparecer erro = Git não está instalado:**
   - Baixe em: [git-scm.com](https://git-scm.com)
   - Clique em "Download"
   - Execute o instalador (deixe tudo padrão)
   - Reinicie o PowerShell

---

## ✅ PASSO 2: Configurar Git (Nome e Email)

Você só faz isto **UMA VEZ** no seu computador.

1. **No PowerShell, digite:**
   ```
   git config --global user.name "Seu Nome Completo"
   ```
   Exemplo:
   ```
   git config --global user.name "Larissa Silva"
   ```

2. **Depois, digite:**
   ```
   git config --global user.email "seu.email@example.com"
   ```
   Exemplo:
   ```
   git config --global user.email "larissa@gmail.com"
   ```

3. **Para verificar se foi salvo:**
   ```
   git config --global user.name
   git config --global user.email
   ```
   Devem aparecer o nome e email que você digitou.

---

## ✅ PASSO 3: Navegar até a Pasta do Projeto

1. **No PowerShell, copie e cole isto:**
   ```
   cd "C:\Users\Gusta\OneDrive\Documentos\Larissa\ProjetoA3_Larissa"
   ```

2. **Pressione Enter**

3. **Verifique se funcionou digitando:**
   ```
   ls
   ```
   Devem aparecer os arquivos:
   - index.html
   - cardapio.html
   - pagamento.html
   - style.css
   - script.js
   - README.md
   - GUIA_GIT_GITHUB.md

   Se os arquivos aparecem = ✅ Você está na pasta correta!

---

## ✅ PASSO 4: Criar Repositório Local

**Execute este comando na pasta do projeto:**

```
git init
```

Deve aparecer:
```
Initialized empty Git repository in C:\Users\Gusta\OneDrive\Documentos\Larissa\ProjetoA3_Larissa\.git
```

✅ Pronto! Git agora está rastreando sua pasta.

---

## ✅ PASSO 5: Adicionar Todos os Arquivos

**Execute este comando:**

```
git add .
```

**O que significa:** "Git, adicione TODOS os arquivos para enviar"

---

## ✅ PASSO 6: Criar um "Commit" (Fotografia do Projeto)

**Um commit é como fotografar seu projeto neste momento.**

**Execute este comando:**

```
git commit -m "Initial commit: FoodHub application"
```

Deve aparecer algo como:
```
[main (root-commit) abc1234] Initial commit: FoodHub application
 6 files changed, 1500 insertions(+)
 create mode 100644 index.html
 create mode 100644 cardapio.html
 create mode 100644 pagamento.html
 create mode 100644 style.css
 create mode 100644 script.js
 create mode 100644 README.md
```

✅ Seus arquivos foram "fotografados"!

---

## ✅ PASSO 7: Criar Repositório no GitHub

**Faça isto no navegador (não é no PowerShell):**

1. **Acesse [github.com](https://github.com)** e faça login

2. **Clique no "+" (canto superior direito)**
   
3. **Escolha "New repository"**

4. **Preencha os dados:**
   - **Repository name:** `foodhub` (ou `ProjetoA3-FoodHub`)
   - **Description:** "Projeto acadêmico de IHC/UX - Aplicativo de delivery"
   - **Public** (deixe marcado - importante para compartilhar)
   - **NÃO selecione** "Add a README file" ou ".gitignore"

5. **Clique em "Create repository"**

6. **Você será levado a uma página com instruções**
   - **NÃO feche esta página!** Você vai precisar de um link dela.

---

## ✅ PASSO 8: Conectar seu Computador ao GitHub

**Na página que abriu no Passo 7, procure por linhas de comando parecidas com isto:**

```
git remote add origin https://github.com/SEU_USUARIO/foodhub.git
git branch -M main
git push -u origin main
```

### **Versão COMPLETA (copie e cole no PowerShell):**

```
git remote add origin https://github.com/SEU_USUARIO/foodhub.git
```

⚠️ **IMPORTANTE:** Trocar `SEU_USUARIO` pelo seu username do GitHub!

Exemplo (se seu usuário é "larissa-silva"):
```
git remote add origin https://github.com/larissa-silva/foodhub.git
```

**Depois execute:**
```
git branch -M main
```

---

## ✅ PASSO 9: Enviar Arquivos para o GitHub

**Execute este comando:**

```
git push -u origin main
```

Se pedir a senha:
1. GitHub agora pede **"Personal Access Token"** (não é a senha normal)
2. **Crie um token aqui:** [github.com/settings/tokens](https://github.com/settings/tokens)
3. Clique em "Generate new token"
4. Marque: `repo` (todos os checkboxes dele)
5. Copie o token gerado
6. Cole no PowerShell quando pedir (não vai aparecer o texto, isto é normal)
7. Pressione Enter

---

## ✅ PASSO 10: Verificar se Funcionou

**No navegador:**

1. Vá em [github.com](https://github.com)
2. Clique no seu perfil (canto superior direito)
3. Clique em "Your repositories"
4. Procure por "foodhub"
5. **Se seus arquivos aparecem = ✅ FUNCIONOU!**

---

## ✅ PASSO 11: Ativar GitHub Pages (Para Publicar Online)

**Agora você quer que o site fique acessível na internet:**

1. **No seu repositório no GitHub**, clique em **Settings**

2. **No menu esquerdo**, procure por **Pages**

3. **Em "Source"**, selecione:
   - **Branch:** `main`
   - **Folder:** `/ (root)`

4. **Clique em "Save"**

5. **Aguarde 1-2 minutos**

6. **Aparecerá uma mensagem verde:**
   ```
   Your site is published at: https://seu-usuario.github.io/foodhub/
   ```

7. **Clique no link para abrir seu site online!** 🎉

---

## 📋 RESUMO DOS COMANDOS

```bash
# 1. Configurar (só uma vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# 2. Entrar na pasta
cd "C:\Users\Gusta\OneDrive\Documentos\Larissa\ProjetoA3_Larissa"

# 3. Inicializar repositório local
git init

# 4. Adicionar arquivos
git add .

# 5. Criar commit
git commit -m "Initial commit: FoodHub application"

# 6. Conectar ao GitHub (trocar SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/foodhub.git

# 7. Renomear branch
git branch -M main

# 8. Enviar para GitHub
git push -u origin main
```

---

## 🆘 ERROS COMUNS E SOLUÇÕES

### ❌ "fatal: not a git repository"
**Problema:** Você não está na pasta certa ou não executou `git init`

**Solução:**
1. Verifique se está na pasta certa (comando `ls` deve mostrar seus arquivos)
2. Execute `git init` novamente

---

### ❌ "fatal: destination path already exists"
**Problema:** A pasta já tem um repositório git

**Solução:**
1. Delete a pasta `.git` oculta:
   ```
   Remove-Item -Recurse -Force .git
   ```
2. Execute `git init` de novo

---

### ❌ "error: failed to push some refs"
**Problema:** O repositório remoto tem arquivos diferentes

**Solução:**
1. Se o repositório é novo no GitHub, execute:
   ```
   git push -u origin main --force
   ```
2. **⚠️ Use `--force` apenas em repositórios pessoais!**

---

### ❌ "Please tell me who you are"
**Problema:** Git não sabe seu nome/email

**Solução:**
Execute os comandos de configuração do Passo 2:
```
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

### ❌ Pediu senha e senha não funciona
**Problema:** GitHub exige "Personal Access Token", não senha

**Solução:**
1. Vá em [github.com/settings/tokens](https://github.com/settings/tokens)
2. Gere um novo token
3. Cole o token quando pedir (não mostra caracteres)

---

## 🎯 RESUMO VISUAL

```
┌─────────────────────────────────┐
│ Pasta no seu computador         │
│ (ProjetoA3_Larissa)             │
└──────────────┬──────────────────┘
               │
        git init (PASSO 4)
               │
        git add . (PASSO 5)
               │
    git commit -m "..." (PASSO 6)
               │
        ┌──────▼──────┐
        │  Repositório │
        │   LOCAL      │
        │ (seu PC)     │
        └──────┬──────┘
               │
   git push (PASSO 9)
               │
        ┌──────▼──────┐
        │ Repositório │
        │   REMOTO    │
        │ (GitHub)    │
        └──────┬──────┘
               │
      GitHub Pages
      (seu site online)
```

---

## ✅ CHECKLIST FINAL

- [ ] Git instalado e configurado
- [ ] Repositório criado no GitHub
- [ ] Pasta do projeto inicializada com `git init`
- [ ] Arquivos adicionados com `git add .`
- [ ] Commit criado com `git commit`
- [ ] Repositório remoto conectado com `git remote add origin`
- [ ] Arquivos enviados com `git push`
- [ ] Repositório visível no GitHub
- [ ] GitHub Pages ativado
- [ ] Site acessível em `https://seu-usuario.github.io/foodhub/`

---

## 🎉 PRONTO!

Seu projeto FoodHub agora está:
- ✅ **No seu computador** (local)
- ✅ **No GitHub** (repositório remoto)
- ✅ **Online** (GitHub Pages)

**Compartilhe o link com seus colegas:**
```
https://seu-usuario.github.io/foodhub/
```

---

## 📚 Próximos Passos (Atualizações Futuras)

Se precisar fazer alterações no projeto:

```bash
# 1. Fazer as alterações nos arquivos

# 2. Adicionar novamente
git add .

# 3. Novo commit
git commit -m "Descrição da mudança"

# 4. Enviar para GitHub
git push
```

**Pronto! Seus changes aparecerão no GitHub em segundos!** 🚀

---

**Dúvidas? Consulte este guia ou peça ajuda ao professor!**
