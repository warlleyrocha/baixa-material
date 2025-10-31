# 📦 Oficiais de Rede

Um sistema web moderno para gerenciamento e controle de materiais utilizado por oficiais de rede em serviços de campo, permitindo o registro de baixas, requisições de materiais e visualização do histórico de consumo.

## 🚀 Funcionalidades

- **Registro de Baixa de Materiais**: Interface intuitiva para registrar materiais consumidos em serviços, incluindo dados dos técnicos, localização e atividades realizadas
- **Requisição de Materiais**: Sistema para solicitar novos materiais com informações detalhadas
- **Visualização de Histórico**: Consulta completa dos materiais utilizados com interface expansível e detalhada
- **Integração WhatsApp**: Exportação automática de mensagens formatadas para WhatsApp (copiadas para área de transferência)
- **Armazenamento Local**: Dados salvos diretamente no navegador (localStorage) com serviço dedicado
- **Validação Robusta**: Formulários com validação completa usando Zod
- **Interface Responsiva**: Design adaptável para diferentes dispositivos com componentes UI modernos
- **Experiência do Usuário**: Formulários otimizados com React Hook Form e feedback visual

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19+ com TypeScript 5.8
- **Roteamento**: React Router DOM 7.9
- **Formulários**: React Hook Form 7.6 + Hookform Resolvers
- **Validação**: Zod 4.1
- **Estilização**: Tailwind CSS 4.1 (com Vite Plugin)
- **Ícones**: React Icons 5.5 + Lucide React
- **UI Components**: Radix UI (Collapsible) + shadcn/ui
- **Utilitários**: Tailwind Merge, clsx, Class Variance Authority
- **Build Tool**: Vite 7.1 com SWC Plugin
- **Linting**: ESLint 9.3 + TypeScript ESLint
- **Formatação**: Prettier 3.6 (configuração personalizada)
- **PWA**: Service Worker + Web Manifest para funcionalidade offline

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Recursos estáticos (imagens, ícones)
├── components/           # Componentes reutilizáveis
│   ├── BaseForm/        # Componente base para formulários
│   ├── FormMaterial/    # Componentes do formulário de materiais
│   │   ├── DataLocation.tsx    # Formulário de localização
│   │   ├── DataMaterials.tsx   # Formulário de materiais
│   │   ├── DataOfficer.tsx     # Formulário de dados dos técnicos
│   │   ├── DataService.tsx     # Formulário de serviço/atividade
│   │   ├── FormField.tsx       # Campo de formulário reutilizável
│   │   └── SelectField.tsx     # Campo de seleção reutilizável
│   ├── Header/          # Componente de cabeçalho
│   ├── SuccessFeedback/ # Componente de feedback de sucesso
│   └── ui/              # Componentes UI (shadcn/ui)
│       └── collapsible.tsx
├── lib/                 # Bibliotecas e utilitários (utils.ts)
├── pages/               # Páginas da aplicação
│   ├── Home/           # Página inicial com navegação
│   ├── MaterialRegister/      # Página de registro de baixa
│   ├── MaterialRequisition/   # Página de requisição de materiais
│   └── MaterialHistory/       # Página de histórico
├── services/            # Serviços e lógica de negócio
│   └── storage/        # Serviço de armazenamento (localStorage)
│       └── launchStorage.ts
├── types/              # Definições de tipos TypeScript
│   ├── formMaterial.ts
│   └── requestMaterial.ts
├── utils/              # Utilitários e helpers
│   ├── formatDate.ts           # Formatação de datas
│   ├── statesUtils.ts          # Utilitários de estados brasileiros
│   ├── textUtils.ts            # Utilitários de texto
│   ├── validationFormMaterial.ts # Validações
│   └── whatsapp/               # Geração de textos para WhatsApp
│       └── generateWhatsAppText.ts
├── App.tsx             # Componente principal
├── index.css           # Estilos globais
└── main.tsx            # Ponto de entrada da aplicação
```

## 🚦 Pré-requisitos

- Node.js 18+ (recomendado para React 19)
- npm ou yarn ou pnpm
- Navegador moderno com suporte a localStorage e ES2022

## ⚙️ Instalação e Configuração

1. **Clone o repositório**

   ```bash
   git clone https://github.com/warlleyrocha/oficiais-de-rede.git
   cd oficiais-de-rede
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

### 1. Página Inicial
   - Acesse a aplicação e visualize as três opções principais:
     - **Baixa de Material**: Registrar materiais utilizados
     - **Requisição de Material**: Solicitar novos materiais
     - **Histórico de Baixas**: Consultar registros anteriores

### 2. Registrar Baixa de Material
   - Selecione "Baixa de Material" na página inicial
   - Preencha os dados dos técnicos (nome, matrícula, cidade, estado, endereço)
   - Informe a atividade realizada
   - Adicione os materiais utilizados (nome, código, quantidade, unidade)
   - Clique em "Exportar Mensagem"
   - A mensagem formatada será copiada para a área de transferência
   - Os dados são automaticamente salvos no histórico

### 3. Requisição de Material
   - Selecione "Requisição de Material" na página inicial
   - Preencha os dados dos técnicos
   - Adicione os materiais solicitados
   - Clique em "Exportar Mensagem"
   - A mensagem formatada será copiada para enviar via WhatsApp
   - Os dados são automaticamente salvos no histórico (EM DESENVOLVIMENTO)

### 4. Visualizar Histórico
   - Selecione "Histórico de Baixas" na página inicial
   - Consulte todos os registros de baixa organizados por data
   - Clique em cada card para expandir e ver detalhes completos
   - Visualize técnicos, localização, atividade e materiais utilizados

### 5. Gerenciar Dados
   - Todos os dados são automaticamente salvos no navegador (localStorage)
   - Os dados persistem entre sessões
   - Não há necessidade de configuração adicional

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
- **Roteamento**: Navegação SPA com React Router DOM 7.9 e rotas dinâmicas
- **Type Safety**: TypeScript 5.8 com tipagem estrita e schemas Zod integrados
- **Responsivo**: Tailwind CSS 4.1 com design system moderno e componentes UI acessíveis
- **Ícones**: Biblioteca completa React Icons + Lucide React para interface rica
- **PWA**: Funciona offline após primeiro carregamento com Service Worker
- **Persistência**: LocalStorage com serviço dedicado para gerenciamento de dados
- **Integração WhatsApp**: Geração automática de mensagens formatadas prontas para envio
- **Componentes Modulares**: Arquitetura baseada em componentes reutilizáveis
- **Validação em Tempo Real**: Validação de formulários com feedback visual imediato
- **Code Quality**: ESLint + Prettier para código consistente e limpo
- **Arquitetura**: Separação clara entre páginas, componentes, serviços e utilitários

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

**Oficiais de Rede** - Sistema de gestão de materiais para equipes de campo
