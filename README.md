## Introdução:
Para esse teste técnico, vamos supor uma situação cotidiana de uma empresa de e-commerce, em que o layout visual de uma página de carrinho de compras está quebrado e precisa ser corrigido, além de não ter a funcionalidade de exibição dos valores dinâmicos dos produtos no carrinho.
Foi passado à você a tarefa de realizar a correção dessa página com o layout pensado e definido no [Figma](https://www.figma.com/design/HEhq70vAmliaFCcBoFaopa/Untitled?m=dev&node-id=1-2&t=K7TOZr7LNNokIXlR-1).
Você então deve levar em consideração às regras de negócio propostas abaixo e alcançar os objetivos propostos, tentando ser o mais fiel possível em relação ao layout.
O desafio já se inicia ao clonar o repositório para o seu ambiente de desenvolvimento e serão avaliados conceitos como: uso do GIT, nomenclatura de variáveis, organização do código e algoritmo utilizado.

Ao finalizar o desafio, por favor faça um `.zip` da pasta do projeto no seu ambiente e encaminhe ao email `contato@devee.com.br`.
Você terá até o dia `03/06/2024` para enviar a sua solução.

### [Figma da página de carrinho](https://www.figma.com/design/HEhq70vAmliaFCcBoFaopa/Untitled?m=dev&node-id=1-2&t=K7TOZr7LNNokIXlR-1)

## Regras de negócio:

- O subtotal de um item é calculado pelo seu preço multiplicado pela quantidade
- O valor do subtotal do pedido é definido pelo subtotal de todos os itens
- O valor do frete do pedido é referente ao maior valor entre todos os produtos
- O valor do total do pedido é definido pelo calculo do seu subtotal + frete

## Objetivos:

- Criar uma branch específica para a correção, com o nome `hotfix/correcao-do-carrinho-de-compras`
- Realizar o desenvolvimento do CSS apropriado para os items do pedido de compras conforme o layout do figma
- Calcular de forma adequada o frete que será utilizado para TODOS os produtos do pedido
- Utilizar Javascript para interagir com a DOM (Document Object Model) e atribuir os campos de Quantidade total de produtos no pedido
- Utilizar Javascript para interagir com a DOM (Document Object Model) e atribuir os campos de Frete do pedido
- Utilizar Javascript para interagir com a DOM (Document Object Model) e atribuir os campos de Valor total do pedido
- Utilizar Javascript para interagir com a DOM (Document Object Model) e atribuir os campos de Subtotal do pedido
- Realizar o commit para a branch criada
