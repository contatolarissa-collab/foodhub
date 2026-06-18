# 🍽️ FoodHub - Projeto de IHC/UX

## 📋 Informações do Projeto

**Nome:** FoodHub  
**Tipo:** Projeto Acadêmico  
**Disciplina:** Interação Humano-Computador (IHC) e Experiência do Usuário (UX)  
**Semestre:** 1º Semestre  
**Professor:** _(preencher)_

---

## 👥 Integrantes do Grupo

- **Aluno 1:** _(preencher nome)_
- **Aluno 2:** _(preencher nome)_
- **Aluno 3:** _(preencher nome)_
- **Aluno 4:** _(preencher nome)_

---

## 🎯 Objetivo do Projeto

Criar um **aplicativo web de delivery de comida** simples e funcional que demonstre a aplicação prática de conceitos de **Interação Humano-Computador (IHC)** e **Experiência do Usuário (UX)**, com foco em:

- ✅ Usabilidade
- ✅ Interface intuitiva
- ✅ Acessibilidade básica
- ✅ Consistência visual
- ✅ Feedback do usuário

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização e layout responsivo
- **JavaScript** - Interações simples

**Sem frameworks, sem banco de dados, sem APIs externas!**

---

## 📁 Estrutura de Arquivos

```
FoodHub/
├── index.html          # Página inicial com restaurantes
├── cardapio.html       # Página com cardápio dos produtos
├── pagamento.html      # Página de pagamento
├── style.css           # Estilos CSS
├── script.js           # Funções JavaScript
└── README.md           # Este arquivo
```

---

## 📱 Páginas do Projeto

### 1️⃣ **Página Inicial (index.html)**

**Funcionalidades:**
- Logo e nome do aplicativo
- Campo de busca de restaurantes
- 4 categorias de comida (Pizza, Hambúrguer, Asiática, Saudável)
- 4 restaurantes em formato de cards
- Cada restaurante exibe:
  - Imagem ilustrativa (emoji)
  - Nome do restaurante
  - Descrição
  - Avaliação (⭐)
  - Tempo de entrega (⏱️)
  - Taxa de entrega (🚚)
  - Botão "Ver Cardápio"

**Conceitos IHC/UX:**
- Interface clara e intuitiva
- Categorias facilitam a busca
- Cards informativos e atraentes

---

### 2️⃣ **Página de Cardápio (cardapio.html)**

**Funcionalidades:**
- Informações do restaurante selecionado
- Grid com 5 produtos
- Cada produto mostra:
  - Imagem ilustrativa (emoji)
  - Nome
  - Descrição curta
  - Preço
  - Botão "Adicionar"
- Resumo do carrinho com:
  - Subtotal
  - Taxa de entrega
  - Total
- Botões "Prosseguir para Pagamento" e "Limpar Carrinho"

**Conceitos IHC/UX:**
- Organização clara dos produtos
- Resumo sempre visível
- Feedback imediato (mensagem ao adicionar)
- Navegação facilitada (botão voltar)

---

### 3️⃣ **Página de Pagamento (pagamento.html)**

**Funcionalidades:**
- Resumo completo do pedido
- Lista dos itens selecionados
- Cálculo total
- QR Code ilustrativo (emoji 📱)
- Informações da chave PIX
- Botão "Confirmar Pagamento"
- Modal de confirmação com:
  - Mensagem de sucesso "✅ Pedido Confirmado!"
  - "PIX confirmado! Seu pedido está sendo preparado."
  - Tempo estimado de 30 minutos
  - Número do pedido
- Informações de segurança
- Contato de suporte

**Conceitos IHC/UX:**
- Confirmação clara do pedido
- Feedback visual (modal)
- Informações de confiança
- Fluxo de compra completo

---

## 🎨 Conceitos de IHC/UX Aplicados

### **1. Usabilidade**
- Interface simples e fácil de usar
- Navegação clara entre páginas
- Botões grandes e fáceis de clicar
- Linguagem acessível

### **2. Consistência Visual**
- Paleta de cores uniforme (laranja/amarelo)
- Tipografia consistente
- Espaçamentos organizados
- Componentes visuais padrão (cards, botões)

### **3. Feedback do Usuário**
- Mensagens ao adicionar produtos
- Modal de confirmação de pagamento
- Hover nos botões (mudança de cor)
- Estados visuais claros

### **4. Navegação Intuitiva**
- Botão "Voltar" em todas as páginas
- Fluxo natural (Home → Cardápio → Pagamento)
- Links claros
- Estrutura lógica

### **5. Acessibilidade Básica**
- Usar `<label>` em formulários
- Texto alternativo (`alt`) em imagens
- Contraste adequado entre texto e fundo
- Tamanhos de fonte legíveis

---

## 🚀 Como Executar o Projeto

### **Opção 1: Abrir Direto no Navegador (Mais Fácil)**

1. Acesse a pasta `FoodHub`
2. Clique com **botão direito** em `index.html`
3. Selecione **"Abrir com"** e escolha seu navegador
4. ✅ Pronto! O site abrirá

### **Opção 2: Na IntelliJ IDEA**

1. Abra a pasta do projeto na IntelliJ
2. Clique com **botão direito** em `index.html`
3. Selecione **"Open in Browser"** ou **"Run"**
4. ✅ Abrirá no navegador automaticamente

### **Opção 3: Servidor Local (Python)**

Se tiver Python instalado:

```bash
# Abra PowerShell ou Prompt na pasta do projeto e execute:
python -m http.server 8000

# Depois acesse no navegador:
http://localhost:8000
```

---

## 📖 Explicação do Código

### **HTML**
- Estrutura semântica com `<header>`, `<main>`, `<footer>`
- Div com classe `container` para centralizar conteúdo
- Classes descritivas (ex: `.card`, `.btn-primary`)
- Comentários explicativos

### **CSS**
- Variáveis de cores para fácil manutenção
- Grid layout para produtos
- Media queries para responsividade (mobile/desktop)
- Efeitos hover simples e suave
- Sem animações complexas

### **JavaScript**
- **Apenas 6 funções simples:**
  1. `mostrarConfirmacao()` - Exibe modal
  2. `fecharModal()` - Fecha modal
  3. `voltarHome()` - Volta para home
  4. `irParaCardapio()` - Vai para cardápio
  5. `irParaPagamento()` - Vai para pagamento
  6. Alertas simples com `alert()`

---

## 📱 Responsividade

O projeto funciona em:
- 📱 **Celulares** (320px - 480px)
- 📊 **Tablets** (481px - 768px)
- 💻 **Computadores** (769px+)

---

## ✅ Checklist de Funcionalidades

### Página Inicial
- [x] Logo e slogan
- [x] Campo de busca
- [x] 4 categorias
- [x] 4 restaurantes em cards
- [x] Informações de cada restaurante
- [x] Botão "Ver Cardápio"

### Página de Cardápio
- [x] Informações do restaurante
- [x] 5 produtos em grid
- [x] Botão "Adicionar" em cada produto
- [x] Resumo do carrinho
- [x] Botão "Prosseguir para Pagamento"
- [x] Botão "Limpar Carrinho"

### Página de Pagamento
- [x] Resumo do pedido
- [x] Lista de itens
- [x] Total do pedido
- [x] QR Code ilustrativo
- [x] Informações da chave PIX
- [x] Botão "Confirmar Pagamento"
- [x] Modal com confirmação
- [x] Informações de segurança

---

## 🎓 Como Apresentar o Projeto

### **Pontos Importantes para Explicar:**

1. **Estrutura HTML Simples**
   - Mostrar como as páginas são conectadas
   - Explicar o uso de `<div>` e classes

2. **Estilos CSS**
   - Falar sobre a paleta de cores
   - Mostrar como o grid funciona
   - Explicar responsividade

3. **Interatividade com JavaScript**
   - Funções simples que navegam entre páginas
   - Modal que aparece após "Confirmar Pagamento"

4. **Conceitos de IHC/UX**
   - Usabilidade: "Interface fácil de usar"
   - Consistência: "Cores e estilos iguais em todas as páginas"
   - Feedback: "Usuário recebe resposta das ações"
   - Navegação: "Fluxo natural: Home → Cardápio → Pagamento"

5. **Acessibilidade**
   - Labels nos inputs
   - Contraste de cores
   - Tamanhos de fonte legíveis

---

## 🐛 Possíveis Melhorias Futuras

- Adicionar mais restaurantes
- Carrinho com quantidade de produtos
- Cálculo automático do total
- Validação de formulários
- Animações CSS
- Mais efeitos visuais
- Página de perfil do usuário

---

## 📚 Referências e Inspiração

- Aplicativos reais: 99Food, iFood
- Conceitos de IHC (Nielsen)
- Princípios de UX e Design
- Web Design responsivo

---

## 📄 Documentação do Código

**Todas as funções e classes têm comentários explicativos no código!**

- `script.js` - 6 funções bem simples
- `style.css` - Classes bem nomeadas e organizadas
- `index.html`, `cardapio.html`, `pagamento.html` - HTML semântico

---

## 🤝 Como Colaborar (Para Trabalho em Grupo)

1. Cada membro trabalha em uma parte:
   - Aluno 1: HTML e estrutura
   - Aluno 2: CSS e estilos
   - Aluno 3: JavaScript e interatividade
   - Aluno 4: Documentação e apresentação

2. Usar GitHub para compartilhar código
3. Fazer commits com mensagens claras
4. Testar todas as funcionalidades

---

## ✉️ Dúvidas Frequentes

**P: Posso adicionar frameworks?**  
R: Não, o projeto deve usar HTML, CSS e JavaScript puro.

**P: Preciso de banco de dados?**  
R: Não, este é um projeto front-end apenas.

**P: Como testo no meu celular?**  
R: Use um servidor local e acesse via IP local do computador.

**P: Posso mudar as cores?**  
R: Sim! Altere os valores em `style.css`.

---

## 📝 Notas Finais

Este é um projeto **didático e simples**, feito para aprender os conceitos básicos de:
- Desenvolvimento web (HTML, CSS, JS)
- Interação Humano-Computador
- Experiência do Usuário
- Trabalho em grupo

**O foco é aprender, não fazer algo perfeito!** 🎓

---

**Desenvolvido com ❤️ como projeto acadêmico**

Data: 2025  
Versão: 1.0
