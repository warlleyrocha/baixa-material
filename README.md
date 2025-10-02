# 📦 Sistema de Baixa de Materiais

Um sistema web moderno para gerenciamento e controle de materiais utilizados em serviços, permitindo o registro de baixas e visualização do histórico de consumo.

## 🚀 Funcionalidades

- **Registro de Baixa de Materiais**: Interface intuitiva para registrar materiais consumidos em serviços
- **Visualização de Histórico**: Consulta completa dos materiais utilizados
- **Armazenamento Local**: Dados salvos diretamente no navegador (localStorage)
- **Validação Robusta**: Formulários com validação completa usando Zod
- **Interface Responsiva**: Design adaptável para diferentes dispositivos
- **Experiência do Usuário**: Formulários otimizados com React Hook Form

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19+ com TypeScript 5.8
- **Roteamento**: React Router DOM 7.9
- **Formulários**: React Hook Form 7.6 + Hookform Resolvers
- **Validação**: Zod 4.1
- **Estilização**: Tailwind CSS 4.1 (com Vite Plugin)
- **Ícones**: React Icons 5.5
- **Build Tool**: Vite 7.1 com SWC Plugin
- **Linting**: ESLint 9.3 + TypeScript ESLint
- **Formatação**: Prettier 3.6 (configuração personalizada)

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Recursos estáticos (imagens, ícones)
├── components/       # Componentes reutilizáveis
│   ├── FormMaterial/ # Componentes do formulário de materiais
│   ├── Header/       # Componente de cabeçalho
│   └── View/         # Componentes de visualização
├── types/            # Definições de tipos TypeScript
├── utils/            # Utilitários e helpers
├── App.tsx          # Componente principal
├── index.css        # Estilos globais
└── main.tsx         # Ponto de entrada da aplicação
```

## 🚦 Pré-requisitos

- Node.js 18+ (recomendado para React 19)
- npm ou yarn ou pnpm
- Navegador moderno com suporte a localStorage e ES2022

## ⚙️ Instalação e Configuração

1. **Clone o repositório**

   ```bash
   git clone https://github.com/warlleyrocha/baixa-material.git
   cd baixa-material
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

## 🏃‍♂️ Como Executar

### Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse: `http://localhost:5173`

### Build de Produção

```bash
npm run build
# ou
yarn build
```

### Preview da Build

```bash
npm run preview
# ou
yarn preview
```

## 📋 Como Usar

1. **Registrar Baixa de Material**
   - Acesse a página principal
   - Preencha o formulário com os dados do material
   - Confirme o registro

2. **Visualizar Histórico**
   - Navegue até a seção de visualização
   - Consulte o histórico completo de materiais utilizados

3. **Gerenciar Dados**
   - Os dados são automaticamente salvos no navegador

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Compila TypeScript e gera build de produção
npm run preview      # Preview da build de produção
npm run lint         # Executa o linter ESLint
```

## 📊 Validações de Formulário

O projeto utiliza **Zod 4.1** para validação de schemas, garantindo:

- Validação de tipos em tempo real
- Mensagens de erro personalizadas e internationalizáveis
- Validação tanto no frontend quanto na tipagem TypeScript
- Integração perfeita com React Hook Form via @hookform/resolvers
- Schema inference para máxima type safety

## 🎨 Padrões de Código

- **TypeScript**: Tipagem estrita habilitada
- **ESLint**: Configuração personalizada para React + TypeScript
- **Prettier**: Formatação consistente de código
- **Componentes**: Estrutura modular e reutilizável

## 🌟 Características Técnicas

- **Performance**: Otimizado com Vite 7.1 + SWC para builds ultra-rápidas
- **Roteamento**: Navegação SPA com React Router DOM 7.9
- **Type Safety**: TypeScript 5.8 com tipagem estrita
- **Responsivo**: Tailwind CSS 4.1 com design system moderno
- **Ícones**: Biblioteca completa React Icons para interface rica
- **Offline**: Funciona offline após primeiro carregamento (PWA-ready)
- **Persistência**: LocalStorage para armazenamento de dados do usuário
- **Code Quality**: ESLint + Prettier para código consistente e limpo

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através de [warlleyrocha@icloud.com]

---

⚡ **Desenvolvido com React 19 + TypeScript 5.8 + Vite 7.1**
