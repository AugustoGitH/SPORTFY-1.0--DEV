<img src="https://i.imgur.com/KEH9CAJ.png"/>

# Sportfy - Projeto de E-commerce

O Sportfy é um projeto de e-commerce que visa fornecer uma plataforma para compra e venda de produtos esportivos. Ele é desenvolvido utilizando tecnologias modernas tanto no front-end quanto no back-end.

## Tecnologias Utilizadas

### Front-end:

- [React.js](https://reactjs.org/): Uma biblioteca JavaScript para construção de interfaces de usuário.
- [React Router DOM](https://reactrouter.com/): Um roteador para aplicativos React que permite a navegação entre diferentes componentes.
- [React Hook Form](https://react-hook-form.com/): Uma biblioteca para gerenciamento de formulários em React, oferecendo uma API simples e eficiente.
- [Yup](https://github.com/jquense/yup): Uma biblioteca para validação de esquemas de objetos JavaScript.
- [Context API](https://reactjs.org/docs/context.html): A Context API do React é usada para compartilhar estado entre componentes sem precisar passar props manualmente.

### Back-end:

- [Node.js](https://nodejs.org/): Um ambiente de execução JavaScript no servidor.
- [Express.js](https://expressjs.com/): Um framework web para Node.js que simplifica o desenvolvimento de APIs RESTful.
- [JWT](https://jwt.io/): JSON Web Tokens são utilizados para autenticação e autorização seguras.
- Bcrypt: Uma biblioteca de hashing de senhas usada para armazenar senhas de forma segura.
- [Hapi Joi](https://hapi.dev/module/joi/): Uma biblioteca para validação de dados em Node.js.

## Funcionalidades Principais

- Registro e autenticação de usuários usando JWT para autenticação segura.
- Listagem de produtos disponíveis para compra.
- Adição de produtos ao carrinho de compras.
- Finalização de compra e processamento de pagamentos.
- Painel de administração para gerenciar produtos, pedidos e usuários.

<img src="https://i.imgur.com/z5raQ3m.png"/>

## Página do Produto

A página do produto no Sportfy apresenta informações detalhadas sobre um produto específico disponível para compra. Ela fornece aos usuários uma visão completa das características, especificações técnicas e descrição do produto.

### Preview de Imagens

Na página do produto, são exibidos previews de imagens do produto, permitindo que os usuários visualizem o produto em diferentes ângulos e detalhes. Isso ajuda os usuários a terem uma ideia clara do produto antes de efetuar a compra.

### Informações Técnicas

As informações técnicas do produto são apresentadas de forma organizada e detalhada na página do produto. Isso inclui características específicas do produto, como tamanho, cor, material, capacidade, entre outros. Essas informações auxiliam os usuários a compreenderem as especificações do produto antes de tomar uma decisão de compra.

### Descrição do Produto

A descrição do produto fornece uma visão geral detalhada sobre suas características, funcionalidades e benefícios. Essa seção permite aos usuários entenderem completamente o que estão adquirindo e como o produto pode atender às suas necessidades.

<img src="https://i.imgur.com/MKGA9jO.png"/>

## Página do Carrinho

A página do carrinho no Sportfy permite aos usuários revisarem os produtos selecionados antes de finalizar a compra. Ela oferece funcionalidades relacionadas ao pagamento, como definir a quantidade de cada produto, calcular o total da compra e encontrar o endereço de entrega pelo CEP.

### Informações de Pagamento

Na página do carrinho, os usuários encontram informações relacionadas ao pagamento, como preço unitário de cada produto, subtotal (preço unitário x quantidade) e o total da compra. Essas informações ajudam os usuários a entenderem o custo total dos produtos selecionados.

### Quantidade de Produtos

Os usuários podem ajustar a quantidade de cada produto no carrinho, permitindo que adicionem ou removam unidades conforme desejado. Essa funcionalidade oferece flexibilidade aos usuários para controlarem a quantidade de cada produto antes de finalizar a compra.

### Localização de Endereço pelo CEP

A página do carrinho permite aos usuários encontrar o endereço de entrega com base no CEP fornecido. Isso simplifica o processo de preenchimento do formulário de entrega, agilizando o processo de compra.

<img src="https://i.imgur.com/tgMm9p0.png"/>

## Página de Listagem de Produtos em Estoque (Painel Administrativo)

A página de listagem de produtos em estoque no painel administrativo do Sportfy permite aos administradores visualizarem todos os produtos disponíveis para venda. Ela oferece recursos de pesquisa por nome do produto, fornecendo uma maneira conveniente de localizar produtos específicos. Cada card de produto exibe informações relevantes, como visualizações, quantidade em estoque e avaliação.

### Pesquisa por Nome do Produto

A página de listagem de produtos possui uma barra de pesquisa que permite aos administradores pesquisarem produtos com base em seus nomes. Essa funcionalidade auxilia na localização rápida e eficiente de produtos específicos, especialmente quando há uma grande variedade de produtos em estoque.

### Card de Produto

Cada produto é representado por um card na página de listagem. O card exibe informações importantes sobre o produto, incluindo:

- **Visualizações**: Indica a quantidade de vezes que o produto foi visualizado por usuários.
- **Quantidade em Estoque**: Mostra a quantidade atual do produto disponível para venda.
- **Avaliação**: Exibe a avaliação média do produto, com base nos feedbacks dos clientes.

Essas informações fornecem aos administradores uma visão geral do desempenho de cada produto e auxiliam na tomada de decisões relacionadas ao estoque e às promoções.

<img src="https://i.imgur.com/HAdiCgx.png"/>
<img src="https://i.imgur.com/lBqOBRl.png"/>

## Página de Criação de Produto (Painel Administrativo)

A página de criação de produto no painel administrativo do Sportfy permite aos administradores adicionar novos produtos ao catálogo da loja. Ela oferece uma prévia em tempo real do card do produto, que exibe informações como imagem, título, artigo esportivo, frete, valor anterior, valor atual, parcelas, descrição do produto, tags, imagens extras, tamanhos de calçado e tamanhos de roupa.

### Prévia do Card do Produto

Durante a criação do produto, os administradores têm a visualização em tempo real do card do produto conforme inserem as informações relevantes. O card do produto exibe:

- **Imagem**: Uma imagem representativa do produto.
- **Título**: O título descritivo do produto.
- **Artigo Esportivo**: O tipo de artigo esportivo ao qual o produto pertence.
- **Frete**: Informações sobre o frete do produto.
- **Valor Anterior**: O valor anterior do produto, quando aplicável.
- **Valor Atual**: O valor atual do produto.
- **Parcelas**: Opções de parcelamento do valor do produto.
- **Descrição do Produto**: Uma descrição detalhada das características e benefícios do produto.
- **Tags**: Palavras-chave para facilitar a busca e categorização do produto.
- **Imagens Extras**: Imagens adicionais para fornecer mais detalhes sobre o produto.
- **Tamanhos de Calçado**: Opções de tamanhos disponíveis para calçados.
- **Tamanhos de Roupa**: Opções de tamanhos disponíveis para roupas.
- **Cores**: Cores disponíveis para o produto.

Essa prévia em tempo real permite aos administradores visualizarem como o produto será apresentado aos usuários antes de finalizarem a criação.
