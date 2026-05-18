# 📱 Catálogo Interativo Mobile

Aplicativo mobile desenvolvido em React Native com Expo para exibição de produtos de uma loja virtual separados por categorias masculinas e femininas, utilizando consumo de API REST com Axios.

---

# 👨‍💻 Autor

Guilherme Toneli Loronha

UniFECAF – Análise e Desenvolvimento de Sistemas

---

# 📚 Sobre o Projeto

O projeto consiste em um catálogo mobile responsivo capaz de:

- Realizar login simulado;
- Consumir produtos de uma API REST real;
- Organizar produtos por categorias;
- Navegar entre telas;
- Exibir detalhes completos dos produtos;
- Realizar logout do usuário.

A aplicação foi desenvolvida utilizando React Native com Expo e organizada seguindo boas práticas de desenvolvimento mobile.

---

# 🚀 Tecnologias Utilizadas

- React Native
- Expo
- Axios
- React Navigation
- JavaScript
- DummyJSON API

---

# 📂 Estrutura do Projeto

```txt
catalogo-mobile
│
├── App.js
│
└── src
    ├── components
    │   └── ProductCard.js
    │
    ├── screens
    │   ├── LoginScreen.js
    │   ├── HomeScreen.js
    │   ├── ProductListScreen.js
    │   └── ProductDetailsScreen.js
    │
    └── services
        └── api.js
🔑 Funcionalidades
✅ Tela de Login
Validação de campos;
Simulação de autenticação;
Controle de usuário com useState.
✅ Listagem de Produtos

Produtos organizados em categorias:

Masculino
mens-shirts
mens-shoes
mens-watches
Feminino
womens-bags
womens-dresses
womens-jewellery
womens-shoes
womens-watches
✅ Tela de Detalhes

Exibe:

Imagem;
Nome;
Preço;
Desconto;
Descrição;
Marca;
Avaliação;
Estoque.
✅ Logout
Limpeza dos dados do usuário;
Retorno para tela de login.
🌐 API Utilizada

API pública:

https://dummyjson.com

Exemplo de endpoint:

https://dummyjson.com/products/category/mens-shirts
⚙️ Instalação do Projeto
1. Clone o repositório
git clone URL_DO_REPOSITORIO
2. Entre na pasta
cd catalogo-mobile
3. Instale as dependências
npm install
4. Execute o projeto
Web
npx expo start --web
Mobile
npx expo start
📱 Bibliotecas Instaladas
npm install axios
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npx expo install react-native-screens
npx expo install react-native-safe-area-context
npx expo install react-native-gesture-handler
npx expo install react-native-reanimated
npx expo install react-dom react-native-web
🧠 Conceitos Aplicados
Consumo de API REST;
Navegação Stack;
Navegação Tabs;
Componentização;
Organização de pastas;
React Hooks;
Loading e tratamento de erros;
Responsividade.
📸 Telas do Sistema
Login
Produtos Masculinos
Produtos Femininos
Detalhes do Produto
✅ Resultado

O aplicativo foi desenvolvido com sucesso utilizando React Native e Expo, realizando integração completa com API REST e navegação entre telas.

📖 Referências
https://docs.expo.dev
https://reactnavigation.org
https://axios-http.com
https://dummyjson.com/docs
