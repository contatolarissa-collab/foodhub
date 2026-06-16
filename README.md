# 🍽️ FoodHub - Aplicativo de Delivery de Comida

## 📋 Descrição do Projeto

**FoodHub** é um aplicativo web fictício de delivery de comida desenvolvido como trabalho acadêmico para a disciplina de **Interação Humano-Computador (IHC)** e **Experiência do Usuário (UX)** do 1º semestre de faculdade.

O projeto demonstra a aplicação prática de conceitos fundamentais de usabilidade, acessibilidade, design centrado no usuário e boas práticas de interface em uma aplicação web moderna, inspirada em aplicativos reais como 99Food e iFood.

---

## 👥 Integrantes do Grupo

- **Nome do Aluno 1:** _(preencher)_
- **Nome do Aluno 2:** _(preencher)_
- **Nome do Aluno 3:** _(preencher)_
- **Nome do Aluno 4:** _(preencher)_

**Turma:** _(preencher)_  
**Professor:** _(preencher)_  
**Data de Entrega:** _(preencher)_

---

## 🎯 Objetivo Acadêmico

Este projeto foi desenvolvido para:

1. **Aplicar conceitos de IHC** em uma interface real
2. **Praticar design de UX** com foco em usabilidade
3. **Demonstrar compreensão** de acessibilidade web
4. **Utilizar tecnologias web** básicas (HTML, CSS, JavaScript)
5. **Desenvolver habilidades** de trabalho em grupo

---

## 🛠️ Tecnologias Utilizadas

### Obrigatórias (conforme requisitos acadêmicos)
- **HTML5** - Estrutura semântica da aplicação
- **CSS3** - Estilização visual e responsividade
- **JavaScript Vanilla** - Lógica e interatividade

### Características Técnicas
- **localStorage** - Armazenamento local sem banco de dados
- **Design Responsivo** - Compatível com mobile e desktop
- **Acessibilidade (WCAG)** - Labels, alt text, contraste adequado
- **Sem frameworks** - HTML, CSS e JavaScript puro

---

## 📱 Funcionalidades

### 1️⃣ Página Inicial (index.html)

**Objetivo:** Exploração de restaurantes e filtros

**Recursos:**
- ✅ Header com logo e slogan da marca
- ✅ Campo de busca funcional (com label acessível)
- ✅ 4 categorias de comida em chips horizontais
- ✅ 4 restaurantes fictícios em cards
- ✅ Informações por restaurante:
  - Imagem ilustrativa
  - Nome
  - Avaliação (⭐)
  - Tempo estimado de entrega
  - Taxa de entrega
  - Botão "Ver Cardápio"

**Conceitos IHC/UX Aplicados:**
- Navegação intuitiva
- Categorização clara
- Busca eficiente
- Cards informativos

---

### 2️⃣ Página de Cardápio (cardapio.html)

**Objetivo:** Seleção de produtos e montagem do pedido

**Recursos:**
- ✅ Header com botão "Voltar"
- ✅ Informações do restaurante selecionado
- ✅ Grade de produtos em cards
- ✅ Pelo menos 5 produtos por restaurante:
  - Imagem
  - Nome
  - Descrição curta
  - Preço
  - Botão "Adicionar"
- ✅ Carrinho sempre visível (sidebar)
- ✅ Atualização automática do valor total
- ✅ Controle de quantidade (+ / -)
- ✅ Opção de remover itens
- ✅ Botão "Limpar Carrinho"
- ✅ Botão "Prosseguir para Pagamento"

**Conceitos IHC/UX Aplicados:**
- Feedback imediato das ações
- Carrinho persistente via localStorage
- Cálculos automáticos
- Interatividade responsiva

**localStorage Explicado:**
```javascript
// O localStorage permite guardar dados no navegador
// sem precisar de um banco de dados real
localStorage.setItem('carrinho_foodhub', JSON.stringify(carrinho));
// Quando o usuário recarrega a página, os itens permanecem

// Recuperar dados:
const carrinho = JSON.parse(localStorage.getItem('carrinho_foodhub'));
```

---

### 3️⃣ Página de Pagamento (pagamento.html)

**Objetivo:** Confirmação do pedido e simulação de pagamento

**Recursos:**
- ✅ Resumo completo do pedido
- ✅ Lista de itens selecionados
- ✅ Cálculo de subtotal, taxa de entrega e total
- ✅ Número de pedido aleatório
- ✅ QR Code ilustrativo (SVG puro)
- ✅ Informações da chave PIX
- ✅ Botão grande "Confirmar Pagamento"
- ✅ Modal de confirmação com feedback:
  - "✅ Pedido Confirmado!"
  - "PIX confirmado! Seu pedido está sendo preparado."
  - "Tempo estimado: 30 minutos"
- ✅ Informações de segurança (sidebar)
- ✅ Contato para suporte

**Conceitos IHC/UX Aplicados:**
- Resumo visual claro
- Modal com feedback destacado
- Informações de confiança
- Fluxo de conclusão evidente

---

## 🎨 Conceitos de IHC e UX Aplicados

### 1. **Usabilidade**
- Interface intuitiva e fácil de entender
- Navegação clara entre as páginas
- Consistência visual em todas as páginas
- Botões e elementos bem identificáveis

### 2. **Acessibilidade**
- ✅ Labels em campos de formulário
- ✅ Texto alternativo (alt) em todas as imagens/emojis
- ✅ Atributos `aria-label` nos botões
- ✅ Contraste adequado entre texto e fundo
- ✅ Skip link para conteúdo principal
- ✅ Semântica HTML correta
- ✅ Foco visível nos elementos interativos

### 3. **Design Centrado no Usuário**
- Fluxo natural: Selecionar → Visualizar → Adicionar → Pagar
- Redução de cliques necessários
- Feedback imediato para cada ação
- Carrinho sempre visível para fácil referência

### 4. **Consistência Visual**
- Paleta de cores inspirada em 99Food (laranja/amarelo)
- Tipografia uniforme
- Espaçamentos consistentes (sistema de grid)
- Sombras e bordas arredondadas em todos os elementos

### 5. **Feedback Imediato**
- Atualização do carrinho em tempo real
- Mensagens de confirmação
- Efeitos hover nos botões
- Modal de sucesso após pagamento

### 6. **Performance e Responsividade**
- Layout mobile-first
- Grid responsivo para diferentes resoluções
- Sem dependências externas (sem lentidão)
- localStorage para armazenamento local

---

## 📊 Estrutura de Arquivos

```
FoodHub/
├── index.html          # Página inicial com restaurantes
├── cardapio.html       # Página com produtos e carrinho
├── pagamento.html      # Página de confirmação e pagamento
├── style.css           # Estilos CSS completos
├── script.js           # Lógica JavaScript comentada
└── README.md           # Este arquivo
```

---

## 🚀 Como Executar o Projeto

### Opção 1: Abrir diretamente no navegador

1. **Localize o arquivo `index.html`** na pasta do projeto
2. **Clique com o botão direito** e selecione **"Abrir com"**
3. **Escolha seu navegador** (Chrome, Firefox, Edge, Safari)
4. A aplicação abrirá em tempo real

### Opção 2: Usar um servidor local (recomendado)

#### **Windows - Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### **Windows - Node.js (se tiver instalado)**
```bash
# Instalar http-server globalmente
npm install -g http-server

# Executar na pasta do projeto
http-server
```

Depois acesse: `http://localhost:8000`

---

## 💡 Como Executar na IntelliJ IDEA

### Passo 1: Abrir o Projeto
1. Abra a IntelliJ IDEA
2. Clique em **File** → **Open**
3. Navegue até a pasta `FoodHub` e clique em **Open**

### Passo 2: Configurar um servidor local
1. Clique em **Run** no menu superior
2. Selecione **Edit Configurations**
3. Clique em **+** e escolha **JavaScript Debug**
4. Configure:
   - **Name:** FoodHub Development
   - **URL:** http://localhost:8000/index.html
   - **Browser:** Chrome (ou seu navegador padrão)

### Passo 3: Usar a ferramenta built-in da IntelliJ
1. Clique com botão direito em **index.html**
2. Selecione **Run 'index.html'** ou **Open in Browser**
3. A página abrirá automaticamente com um servidor local

### Passo 4: Desenvolvendo
- **Salve as alterações** (Ctrl + S)
- **Recarregue o navegador** (F5 ou Ctrl + R)
- **Use DevTools** (F12) para debug

---

## 📤 Como Publicar no GitHub

### Passo 1: Criar um repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **New repository**
3. **Nome:** `foodhub` (ou similar)
4. **Descrição:** "Projeto acadêmico de IHC/UX - Delivery de comida"
5. **Público** (importante para apresentação)
6. Clique em **Create repository**

### Passo 2: Configurar Git localmente

#### **Windows - Git Bash ou PowerShell**

```bash
# Abra o terminal na pasta FoodHub
cd C:\Users\Gusta\OneDrive\Documentos\Larissa\ProjetoA3_Larissa

# Inicialize o repositório git
git init

# Adicione os arquivos
git add .

# Crie o primeiro commit
git commit -m "Initial commit: FoodHub application"

# Adicione o repositório remoto (copie o URL do seu repositório GitHub)
git remote add origin https://github.com/SEU_USUARIO/foodhub.git

# Envie para o GitHub
git branch -M main
git push -u origin main
```

### Passo 3: Configurar GitHub Pages (para disponibilizar online)

1. Vá ao repositório no GitHub
2. Clique em **Settings**
3. Role até **Pages**
4. Em **Source**, selecione **main branch**
5. Clique em **Save**
6. Aguarde alguns minutos (badge verde aparecerá)
7. **Seu site estará em:** `https://SEU_USUARIO.github.io/foodhub/`

### Passo 4: Adicionar colaboradores (para apresentação em grupo)

1. Vá a **Settings** → **Collaborators**
2. Clique em **Add people**
3. Digite o username do colega
4. Envie o convite

---

## 🔧 Tecnologias Detalhes

### HTML5 - Estrutura Semântica
- `<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`
- Atributos `role` e `aria-*` para acessibilidade
- Meta tags para responsividade
- Labels explícitos em formulários

### CSS3 - Estilização Moderna
- **Variáveis CSS** (`:root`) para paleta de cores
- **Grid Layout** para restaurantes e produtos
- **Flexbox** para navegação e itens
- **Media Queries** para responsividade
- **Animações** (fadeIn, slideUp) suaves
- **Shadows e Transforms** para profundidade visual

### JavaScript Vanilla - Lógica Interativa
- **localStorage** para persistência de dados
- **Event Listeners** para interatividade
- **Funções organizadas** e comentadas
- **Manipulação do DOM** com `getElementById`, `innerHTML`
- **Cálculos dinâmicos** de valores totais
- **Detecção de página atual** para inicialização

---

## 🧪 Como Testar o Projeto

### Teste 1: Fluxo Completo
1. Abra `index.html`
2. Selecione um restaurante
3. Adicione produtos ao carrinho
4. Proceda para pagamento
5. Confirme o PIX
6. Verifique se a mensagem de sucesso aparece

### Teste 2: localStorage Funcionando
1. Adicione itens ao carrinho
2. **Recarregue a página** (F5)
3. Os itens devem **continuar no carrinho**
4. Isso prova que o localStorage está salvando os dados

### Teste 3: Responsividade
1. Abra DevTools (F12)
2. Clique em **Toggle Device Toolbar** (ou Ctrl + Shift + M)
3. Teste em diferentes resoluções:
   - Mobile: 375px (iPhone)
   - Tablet: 768px (iPad)
   - Desktop: 1024px+

### Teste 4: Acessibilidade
1. Use **Tab** para navegar entre elementos
2. Verifique se **todos os botões são focáveis**
3. Leia os **aria-labels** em leitores de tela
4. Verifique **contraste de cores** com ferramentas online

### Teste 5: Navegadores
Teste em:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari (se tiver Mac)

---

## 📝 Pontos Importantes para a Apresentação

### O que o professor espera ver:

1. **Interface Moderna**
   - Sem parecer um exercício de aula
   - Inspirado em aplicativos reais

2. **Funcionalidade Completa**
   - Todas as 3 páginas funcionando
   - localStorage persistindo dados
   - Cálculos corretos

3. **Código Bem Estruturado**
   - Comentários explicativos
   - Variáveis com nomes claros
   - Sem código duplicado

4. **Conceitos de IHC/UX**
   - Demonstrar entendimento dos conceitos
   - Explicar escolhas de design
   - Acessibilidade implementada

5. **Documentação (este README)**
   - Instruções claras de execução
   - Explicação de conceitos
   - Commits bem organizados no GitHub

---

## 🎓 Conceitos Teóricos Aplicados

### **Usabilidade (Nielsen)**
- ✅ Visibilidade do status do sistema (carrinho atualiza)
- ✅ Correspondência entre sistema e mundo real (nomes claros)
- ✅ Controle e liberdade do usuário (botão voltar)
- ✅ Prevenção de problemas (confirmação antes de limpar)

### **Design Centrado no Usuário**
- ✅ Personas: Pessoa com fome que quer pedir comida rapidamente
- ✅ Jornada do usuário: Selecionar → Adicionar → Pagar
- ✅ Redução de fricção: Mínimo de cliques

### **Acessibilidade (WCAG 2.1)**
- ✅ Nível A: Labels, alt text, contraste
- ✅ Navegação por teclado
- ✅ Semântica HTML

### **Design Responsivo**
- ✅ Mobile-first approach
- ✅ Breakpoints para diferentes dispositivos
- ✅ Teste em DevTools

---

## 🐛 Solução de Problemas

### Problema: Carrinho não salva
**Solução:** Verifique se o localStorage está ativado no navegador
```javascript
// No console (F12), teste:
localStorage.setItem('teste', 'funcionando');
localStorage.getItem('teste');
```

### Problema: Estilos CSS não carregam
**Solução:** Verifique se o arquivo `style.css` está na mesma pasta que `index.html`

### Problema: JavaScript não funciona
**Solução:** Verifique se o arquivo `script.js` está na mesma pasta e se não há erros no console (F12)

### Problema: Página em branco
**Solução:** 
1. Verifique erros no console (F12 → Console)
2. Certifique-se de abrir via servidor local, não com `file://`

---

## 📚 Referências e Inspirações

- **99Food** - Inspiração visual e UX
- **iFood** - Referência de funcionalidades
- **Material Design** - Princípios de design
- **Web.dev** - Boas práticas web
- **MDN Web Docs** - Documentação técnica

---

## 📄 Licença

Este é um projeto acadêmico para fins educacionais.

---

## ✉️ Contato

Para dúvidas sobre o projeto, entre em contato com o professor ou consulte a documentação comentada no código.

---

**Desenvolvido com ❤️ como projeto acadêmico de IHC/UX**

**Data de criação:** 2025  
**Última atualização:** 2025-06-15
