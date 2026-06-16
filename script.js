/* ============================================
   PROJETO: FoodHub - Delivery de Comida
   ARQUIVO: script.js
   DESCRIÇÃO: Lógica principal do aplicativo
   ============================================ */

/* ========== DADOS FICTÍCIOS DO APLICATIVO ========== */

// Dados dos restaurantes disponíveis
const restaurantes = [
    {
        id: 1,
        nome: "Sabor Express",
        categoria: "pizza",
        descricao: "Pizzeria tradicional com receitas clássicas",
        avaliacao: 4.8,
        tempoEntrega: "30-45 min",
        taxaEntrega: 3.50,
        imagem: "🍕",
        endereco: "Rua A, 123 - Centro",
        produtos: [
            {
                id: 1,
                nome: "Pizza Margherita",
                descricao: "Tomate fresco, mozzarella e manjericão",
                preco: 35.90,
                imagem: "🍕"
            },
            {
                id: 2,
                nome: "Pizza Pepperoni",
                descricao: "Mozzarella e pepperoni crocante",
                preco: 38.90,
                imagem: "🍕"
            },
            {
                id: 3,
                nome: "Pizza Vegetariana",
                descricao: "Brócolis, cenoura, pimentão e cebola",
                preco: 32.90,
                imagem: "🍕"
            },
            {
                id: 4,
                nome: "Pizza 4 Queijos",
                descricao: "Mozzarella, cheddar, provolone e gorgonzola",
                preco: 42.90,
                imagem: "🍕"
            },
            {
                id: 5,
                nome: "Refrigerante Lata",
                descricao: "Bebida gelada 350ml",
                preco: 5.90,
                imagem: "🥤"
            }
        ]
    },
    {
        id: 2,
        nome: "Burger House",
        categoria: "burger",
        descricao: "Hambúrgueres artesanais de qualidade",
        avaliacao: 4.6,
        tempoEntrega: "25-35 min",
        taxaEntrega: 2.50,
        imagem: "🍔",
        endereco: "Avenida B, 456 - Zona Sul",
        produtos: [
            {
                id: 6,
                nome: "Burger Clássico",
                descricao: "Pão, carne, alface, tomate e maionese",
                preco: 28.90,
                imagem: "🍔"
            },
            {
                id: 7,
                nome: "Burger Deluxe",
                descricao: "Dois hambúrgueres, queijo derretido, bacon",
                preco: 39.90,
                imagem: "🍔"
            },
            {
                id: 8,
                nome: "Burger Vegano",
                descricao: "Burger de proteína vegetal com alface",
                preco: 32.90,
                imagem: "🍔"
            },
            {
                id: 9,
                nome: "Batata Frita Média",
                descricao: "Batata crocante com sal",
                preco: 12.90,
                imagem: "🍟"
            },
            {
                id: 10,
                nome: "Milk Shake",
                descricao: "Chocolate, morango ou baunilha",
                preco: 15.90,
                imagem: "🥛"
            }
        ]
    },
    {
        id: 3,
        nome: "Sabor Asiático",
        categoria: "asiatica",
        descricao: "Pratos orientais autênticos e saborosos",
        avaliacao: 4.7,
        tempoEntrega: "35-50 min",
        taxaEntrega: 4.00,
        imagem: "🍜",
        endereco: "Rua C, 789 - Bairro Novo",
        produtos: [
            {
                id: 11,
                nome: "Sushi Variado",
                descricao: "6 peças de sushi fresco com gengibre",
                preco: 36.90,
                imagem: "🍣"
            },
            {
                id: 12,
                nome: "Ramen Tonkotsu",
                descricao: "Macarrão em caldo rico de osso de porco",
                preco: 38.90,
                imagem: "🍜"
            },
            {
                id: 13,
                nome: "Temaki",
                descricao: "3 unidades de cone de alga com salmão",
                preco: 29.90,
                imagem: "🍣"
            },
            {
                id: 14,
                nome: "Gyoza",
                descricao: "8 unidades de pastel asiático crocante",
                preco: 22.90,
                imagem: "🥟"
            },
            {
                id: 15,
                nome: "Chá Gelado",
                descricao: "Chá verde gelado refrescante",
                preco: 6.90,
                imagem: "🍵"
            }
        ]
    },
    {
        id: 4,
        nome: "Verde & Saúde",
        categoria: "saudavel",
        descricao: "Refeições saudáveis e balanceadas",
        avaliacao: 4.9,
        tempoEntrega: "20-30 min",
        taxaEntrega: 2.00,
        imagem: "🥗",
        endereco: "Praça D, 321 - Zona Norte",
        produtos: [
            {
                id: 16,
                nome: "Salada Grega",
                descricao: "Tomate, pepino, feta, azeitona e azeite",
                preco: 32.90,
                imagem: "🥗"
            },
            {
                id: 17,
                nome: "Poke Bowl Salmão",
                descricao: "Arroz, salmão, abacate e vegetais frescos",
                preco: 41.90,
                imagem: "🥙"
            },
            {
                id: 18,
                nome: "Tigela Açaí",
                descricao: "Açaí com granola, mel e frutas",
                preco: 24.90,
                imagem: "🍓"
            },
            {
                id: 19,
                nome: "Suco Natural",
                descricao: "Laranja, melancia ou cenoura fresca",
                preco: 10.90,
                imagem: "🧃"
            },
            {
                id: 20,
                nome: "Wrap Fit",
                descricao: "Tortilla integral com frango e legumes",
                preco: 28.90,
                imagem: "🌯"
            }
        ]
    }
];

/* ========== FUNÇÕES DE ARMAZENAMENTO NO LOCALSTORAGE ========== */

/**
 * Função: obterCarrinho()
 * Descrição: Recupera o carrinho do localStorage
 * localStorage permite salvar dados no navegador do usuário sem banco de dados
 * Retorno: Array com itens do carrinho ou array vazio se não existir
 */
function obterCarrinho() {
    const carrinho = localStorage.getItem('carrinho_foodhub');
    return carrinho ? JSON.parse(carrinho) : [];
}

/**
 * Função: salvarCarrinho()
 * Descrição: Salva o carrinho no localStorage (sem precisar de banco de dados)
 * Parâmetro: carrinho = array com os itens
 */
function salvarCarrinho(carrinho) {
    localStorage.setItem('carrinho_foodhub', JSON.stringify(carrinho));
}

/**
 * Função: obterRestauranteSelecionado()
 * Descrição: Recupera o restaurante que o usuário selecionou
 * Retorno: ID do restaurante ou null
 */
function obterRestauranteSelecionado() {
    return localStorage.getItem('restaurante_id');
}

/**
 * Função: salvarRestauranteSelecionado()
 * Descrição: Salva qual restaurante foi escolhido
 * Parâmetro: restauranteId = ID do restaurante
 */
function salvarRestauranteSelecionado(restauranteId) {
    localStorage.setItem('restaurante_id', restauranteId);
}

/* ========== PÁGINA INICIAL (index.html) ========== */

/**
 * Função: carregarRestaurantes()
 * Descrição: Exibe todos os restaurantes na página inicial
 * Cria cards com informações e botão para acessar o cardápio
 */
function carregarRestaurantes(filtro = null) {
    const container = document.getElementById('lista-restaurantes');

    if (!container) return; // Verifica se está na página correta

    container.innerHTML = ''; // Limpa restaurantes anteriores

    // Filtra restaurantes se um filtro foi selecionado
    let restaurantesFiltrados = restaurantes;
    if (filtro) {
        restaurantesFiltrados = restaurantes.filter(r => r.categoria === filtro);
    }

    // Cria um card para cada restaurante
    restaurantesFiltrados.forEach(restaurante => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <div class="restaurant-image" role="img" aria-label="Imagem do restaurante ${restaurante.nome}">
                ${restaurante.imagem}
            </div>
            <div class="restaurant-content">
                <h3 class="restaurant-name">${restaurante.nome}</h3>
                <p class="restaurant-category">${restaurante.descricao}</p>
                <div class="restaurant-stats">
                    <div class="stat">⭐ ${restaurante.avaliacao}</div>
                    <div class="stat">⏱️ ${restaurante.tempoEntrega}</div>
                    <div class="stat">🚚 R$ ${restaurante.taxaEntrega.toFixed(2)}</div>
                </div>
                <button
                    class="restaurant-button"
                    onclick="irParaCardapio(${restaurante.id})"
                    aria-label="Ver cardápio do ${restaurante.nome}"
                >
                    Ver Cardápio
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * Função: filtrarPorCategoria()
 * Descrição: Filtra restaurantes pela categoria selecionada
 * Parâmetro: categoria = nome da categoria (pizza, burger, etc)
 */
function filtrarPorCategoria(categoria) {
    // Atualiza o estilo do botão ativo
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.category-btn').classList.add('active');

    // Carrega restaurantes da categoria
    carregarRestaurantes(categoria);
}

/**
 * Função: buscarRestaurante()
 * Descrição: Busca um restaurante pelo nome digitado no campo de busca
 */
function buscarRestaurante() {
    const busca = document.getElementById('busca-restaurante').value.toLowerCase();
    const container = document.getElementById('lista-restaurantes');

    if (!busca) {
        carregarRestaurantes();
        return;
    }

    const resultados = restaurantes.filter(r =>
        r.nome.toLowerCase().includes(busca)
    );

    container.innerHTML = '';

    if (resultados.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">Nenhum restaurante encontrado</p>';
        return;
    }

    resultados.forEach(restaurante => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <div class="restaurant-image" role="img" aria-label="Imagem do restaurante ${restaurante.nome}">
                ${restaurante.imagem}
            </div>
            <div class="restaurant-content">
                <h3 class="restaurant-name">${restaurante.nome}</h3>
                <p class="restaurant-category">${restaurante.descricao}</p>
                <div class="restaurant-stats">
                    <div class="stat">⭐ ${restaurante.avaliacao}</div>
                    <div class="stat">⏱️ ${restaurante.tempoEntrega}</div>
                    <div class="stat">🚚 R$ ${restaurante.taxaEntrega.toFixed(2)}</div>
                </div>
                <button
                    class="restaurant-button"
                    onclick="irParaCardapio(${restaurante.id})"
                    aria-label="Ver cardápio do ${restaurante.nome}"
                >
                    Ver Cardápio
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * Função: irParaCardapio()
 * Descrição: Navega para a página de cardápio do restaurante selecionado
 * Parâmetro: restauranteId = ID do restaurante
 * CONCEITO IHC: Navegação clara e intuitiva
 */
function irParaCardapio(restauranteId) {
    // Salva qual restaurante foi selecionado no localStorage
    salvarRestauranteSelecionado(restauranteId);

    // Redireciona para a página de cardápio
    window.location.href = 'cardapio.html';
}

/* ========== PÁGINA DE CARDÁPIO (cardapio.html) ========== */

/**
 * Função: inicializarCardapio()
 * Descrição: Carrega as informações do restaurante e seus produtos
 * Executada quando cardapio.html é carregado
 */
function inicializarCardapio() {
    const restauranteId = obterRestauranteSelecionado();

    if (!restauranteId) {
        // Se não há restaurante selecionado, volta para home
        window.location.href = 'index.html';
        return;
    }

    // Encontra o restaurante pelo ID
    const restaurante = restaurantes.find(r => r.id == restauranteId);

    if (!restaurante) {
        window.location.href = 'index.html';
        return;
    }

    // Preenche as informações do restaurante
    document.getElementById('restaurant-name').textContent = restaurante.nome;
    document.getElementById('restaurant-description').textContent = restaurante.descricao;
    document.getElementById('delivery-time').textContent = `⏱️ ${restaurante.tempoEntrega}`;
    document.getElementById('delivery-fee').textContent = `🚚 R$ ${restaurante.taxaEntrega.toFixed(2)}`;
    document.getElementById('rating').textContent = `⭐ ${restaurante.avaliacao}`;
    document.getElementById('delivery-fee-cart').textContent = `R$ ${restaurante.taxaEntrega.toFixed(2)}`;

    // Carrega os produtos do restaurante
    carregarProdutos(restaurante.produtos);

    // Atualiza a exibição do carrinho
    atualizarCarrinho();
}

/**
 * Função: carregarProdutos()
 * Descrição: Exibe todos os produtos do restaurante em cards
 * Parâmetro: produtos = array com os produtos
 * CONCEITO UX: Grid responsivo com cards bem apresentados
 */
function carregarProdutos(produtos) {
    const container = document.getElementById('lista-produtos');
    container.innerHTML = '';

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image" role="img" aria-label="Imagem do produto ${produto.nome}">
                ${produto.imagem}
            </div>
            <h4 class="product-name">${produto.nome}</h4>
            <p class="product-description">${produto.descricao}</p>
            <p class="product-price">R$ ${produto.preco.toFixed(2)}</p>
            <button
                class="product-button"
                onclick="adicionarAoCarrinho(${produto.id}, '${produto.nome}', ${produto.preco})"
                aria-label="Adicionar ${produto.nome} ao carrinho"
            >
                + Adicionar
            </button>
        `;
        container.appendChild(card);
    });
}

/**
 * Função: adicionarAoCarrinho()
 * Descrição: Adiciona um produto ao carrinho
 * Parâmetros: produtoId, nome, preco
 * CONCEITO IHC: Feedback imediato (atualiza carrinho automaticamente)
 */
function adicionarAoCarrinho(produtoId, nome, preco) {
    let carrinho = obterCarrinho();

    // Procura se o produto já está no carrinho
    const itemExistente = carrinho.find(item => item.id === produtoId);

    if (itemExistente) {
        // Se existe, aumenta a quantidade
        itemExistente.quantidade++;
    } else {
        // Se não existe, adiciona com quantidade 1
        carrinho.push({
            id: produtoId,
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }

    // Salva no localStorage
    salvarCarrinho(carrinho);

    // Atualiza a exibição do carrinho
    atualizarCarrinho();

    // Feedback visual (opcional: poderia adicionar animação)
    console.log(`${nome} adicionado ao carrinho!`);
}

/**
 * Função: atualizarCarrinho()
 * Descrição: Atualiza a exibição do carrinho na tela
 * CONCEITO IHC: Atualização em tempo real (sem recarregar a página)
 * CONCEITO localStorage: Mostra como os dados persistem
 */
function atualizarCarrinho() {
    const carrinho = obterCarrinho();
    const containerItens = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Se carrinho vazio
    if (carrinho.length === 0) {
        containerItens.innerHTML = '<p class="empty-cart">Carrinho vazio</p>';
        checkoutBtn.disabled = true;
        document.getElementById('subtotal').textContent = 'R$ 0,00';
        document.getElementById('total').textContent = 'R$ 0,00';
        return;
    }

    // Limpa o container
    containerItens.innerHTML = '';
    let subtotal = 0;

    // Cria um elemento para cada item do carrinho
    carrinho.forEach(item => {
        const total_item = item.preco * item.quantidade;
        subtotal += total_item;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nome}</div>
                <div class="cart-item-price">R$ ${total_item.toFixed(2)}</div>
                <div class="cart-item-qty">
                    <button
                        class="qty-btn"
                        onclick="diminuirQuantidade(${item.id})"
                        aria-label="Diminuir quantidade de ${item.nome}"
                    >-</button>
                    <span class="qty-display">${item.quantidade}</span>
                    <button
                        class="qty-btn"
                        onclick="aumentarQuantidade(${item.id})"
                        aria-label="Aumentar quantidade de ${item.nome}"
                    >+</button>
                    <button
                        class="remove-btn"
                        onclick="removerDoCarrinho(${item.id})"
                        aria-label="Remover ${item.nome} do carrinho"
                    >Remover</button>
                </div>
            </div>
        `;
        containerItens.appendChild(itemDiv);
    });

    // Calcula o total com taxa de entrega
    const taxaEntrega = parseFloat(document.getElementById('delivery-fee-cart').textContent.replace('R$ ', ''));
    const total = subtotal + taxaEntrega;

    // Atualiza os valores
    document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;

    // Habilita o botão de checkout
    checkoutBtn.disabled = false;
}

/**
 * Função: aumentarQuantidade()
 * Descrição: Aumenta a quantidade de um item do carrinho
 * Parâmetro: produtoId = ID do produto
 */
function aumentarQuantidade(produtoId) {
    let carrinho = obterCarrinho();
    const item = carrinho.find(i => i.id === produtoId);
    if (item) {
        item.quantidade++;
        salvarCarrinho(carrinho);
        atualizarCarrinho();
    }
}

/**
 * Função: diminuirQuantidade()
 * Descrição: Diminui a quantidade de um item do carrinho
 * Parâmetro: produtoId = ID do produto
 */
function diminuirQuantidade(produtoId) {
    let carrinho = obterCarrinho();
    const item = carrinho.find(i => i.id === produtoId);
    if (item && item.quantidade > 1) {
        item.quantidade--;
        salvarCarrinho(carrinho);
        atualizarCarrinho();
    }
}

/**
 * Função: removerDoCarrinho()
 * Descrição: Remove um item completamente do carrinho
 * Parâmetro: produtoId = ID do produto
 */
function removerDoCarrinho(produtoId) {
    let carrinho = obterCarrinho();
    carrinho = carrinho.filter(item => item.id !== produtoId);
    salvarCarrinho(carrinho);
    atualizarCarrinho();
}

/**
 * Função: limparCarrinho()
 * Descrição: Remove todos os itens do carrinho
 * CONCEITO IHC: Ação destrutiva com confirmação visual
 */
function limparCarrinho() {
    if (confirm('Tem certeza que deseja limpar o carrinho?')) {
        localStorage.removeItem('carrinho_foodhub');
        atualizarCarrinho();
    }
}

/**
 * Função: irParaPagamento()
 * Descrição: Navega para a página de pagamento
 * CONCEITO IHC: Navegação clara entre as etapas do fluxo
 */
function irParaPagamento() {
    const carrinho = obterCarrinho();
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    window.location.href = 'pagamento.html';
}

/* ========== PÁGINA DE PAGAMENTO (pagamento.html) ========== */

/**
 * Função: inicializarPagamento()
 * Descrição: Carrega o resumo do pedido na página de pagamento
 * Executada quando pagamento.html é carregado
 */
function inicializarPagamento() {
    const restauranteId = obterRestauranteSelecionado();
    const carrinho = obterCarrinho();

    if (!restauranteId || carrinho.length === 0) {
        window.location.href = 'index.html';
        return;
    }

    const restaurante = restaurantes.find(r => r.id == restauranteId);

    // Preenche informações do restaurante
    document.getElementById('restaurant-name-payment').textContent = restaurante.nome;
    document.getElementById('restaurant-address').textContent = restaurante.endereco;

    // Gera número de pedido aleatório
    const numeroPedido = Math.floor(Math.random() * 900000) + 100000;
    document.getElementById('order-id').textContent = `#${numeroPedido}`;

    // Preenche os itens do pedido
    const listaPedidos = document.getElementById('order-items-list');
    listaPedidos.innerHTML = '';
    let subtotal = 0;

    carrinho.forEach(item => {
        const totalItem = item.preco * item.quantidade;
        subtotal += totalItem;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.nome} (x${item.quantidade})</span>
            <span>R$ ${totalItem.toFixed(2)}</span>
        `;
        listaPedidos.appendChild(li);
    });

    // Calcula o total
    const taxaEntrega = restaurante.taxaEntrega;
    const total = subtotal + taxaEntrega;

    // Atualiza os totalizadores
    document.getElementById('payment-subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('payment-delivery-fee').textContent = `R$ ${taxaEntrega.toFixed(2)}`;
    document.getElementById('payment-total').textContent = `R$ ${total.toFixed(2)}`;
    document.getElementById('pix-amount').textContent = `R$ ${total.toFixed(2)}`;
}

/**
 * Função: confirmarPagamento()
 * Descrição: Simula a confirmação do pagamento PIX
 * CONCEITO IHC: Feedback visual clara de sucesso
 * CONCEITO UX: Modal com mensagem destacada
 */
function confirmarPagamento() {
    // Exibe o modal de confirmação
    const modal = document.getElementById('confirmation-modal');
    modal.style.display = 'flex';

    // Limpa o carrinho após confirmação
    localStorage.removeItem('carrinho_foodhub');
}

/**
 * Função: voltarParaInicio()
 * Descrição: Volta para a página inicial após confirmação do pagamento
 * Limpa os dados da sessão
 */
function voltarParaInicio() {
    localStorage.removeItem('restaurante_id');
    localStorage.removeItem('carrinho_foodhub');
    window.location.href = 'index.html';
}

/* ========== INICIALIZAÇÃO ========== */

// Detecta qual página está sendo carregada e inicializa
document.addEventListener('DOMContentLoaded', function() {
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

    if (paginaAtual === 'index.html' || paginaAtual === '') {
        carregarRestaurantes();
    } else if (paginaAtual === 'cardapio.html') {
        inicializarCardapio();
    } else if (paginaAtual === 'pagamento.html') {
        inicializarPagamento();
    }
});
