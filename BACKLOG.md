# Backlog do Finance Manager

Este backlog está organizado em **épicos** e **issues prontas para GitHub**, com prioridade, estimativa e critérios de aceite.

## Convenções

- **Prioridade**: P0 (crítico), P1 (alto), P2 (médio), P3 (baixo)
- **Estimativa**: em pontos (1, 2, 3, 5, 8)
- **Labels sugeridas**: `epic`, `feature`, `tech-debt`, `testing`, `documentation`, `frontend`, `mvp`

---

## Epic 1 — Fundação técnica

### Issue 1 — Corrigir suíte de testes inicial
- **Título:** `test: substituir teste legado HelloWorld por testes reais`
- **Prioridade:** P0
- **Estimativa:** 3
- **Labels:** `testing`, `tech-debt`, `frontend`, `mvp`
- **Descrição:**
  - Remover dependência do teste legado que referencia `HelloWorld.vue`.
  - Criar testes unitários básicos para componentes existentes (ex.: navegação/rotas).
- **Checklist:**
  - [ ] Remover ou adaptar `tests/unit/example.spec.ts`
  - [ ] Criar teste para renderização do menu
  - [ ] Garantir execução limpa de `yarn test:unit`
- **Critérios de aceite:**
  - [ ] Testes unitários passam localmente
  - [ ] Não existe referência a componentes inexistentes

### Issue 2 — Atualizar documentação e identidade do projeto
- **Título:** `docs: atualizar README e nome do projeto`
- **Prioridade:** P1
- **Estimativa:** 2
- **Labels:** `documentation`, `mvp`
- **Descrição:**
  - Atualizar o README com objetivo do produto, arquitetura, setup e roadmap.
  - Ajustar metadados do projeto (nome e descrição coerentes).
- **Checklist:**
  - [ ] Reescrever README em contexto de finanças pessoais
  - [ ] Incluir seção de arquitetura por módulos
  - [ ] Atualizar `package.json` com nome final do projeto
- **Critérios de aceite:**
  - [ ] Um novo dev entende o projeto em menos de 10 minutos

### Issue 3 — Definir arquitetura modular
- **Título:** `refactor: organizar estrutura por módulos de domínio`
- **Prioridade:** P1
- **Estimativa:** 5
- **Labels:** `tech-debt`, `frontend`, `mvp`
- **Descrição:**
  - Estruturar pastas por domínio: dashboard, transações, categorias, configurações.
  - Definir convenções de import, nomenclatura e testes.
- **Checklist:**
  - [ ] Criar estrutura base em `src/modules/*`
  - [ ] Documentar padrão de organização
  - [ ] Adequar imports para novo padrão
- **Critérios de aceite:**
  - [ ] Nova feature pode ser implementada sem ambiguidade de estrutura

---

## Epic 2 — Domínio e persistência (MVP)

### Issue 4 — Modelar entidades financeiras
- **Título:** `feat(domain): criar tipos de Transaction, Category e Account`
- **Prioridade:** P0
- **Estimativa:** 3
- **Labels:** `feature`, `frontend`, `mvp`
- **Descrição:**
  - Criar tipos/interfaces centrais para domínio financeiro.
  - Incluir validações utilitárias mínimas.
- **Checklist:**
  - [ ] Definir tipo `Transaction`
  - [ ] Definir tipo `Category`
  - [ ] Definir tipo `Account`
  - [ ] Criar funções utilitárias de validação
- **Critérios de aceite:**
  - [ ] Formulários e listagens usam tipos sem `any`

### Issue 5 — Implementar store global e persistência local
- **Título:** `feat(state): adicionar gerenciamento de estado e LocalStorage`
- **Prioridade:** P0
- **Estimativa:** 5
- **Labels:** `feature`, `frontend`, `mvp`
- **Descrição:**
  - Introduzir store (Pinia recomendado) para transações e categorias.
  - Persistir dados localmente para manter estado entre recarregamentos.
- **Checklist:**
  - [ ] Criar store de categorias
  - [ ] Criar store de transações
  - [ ] Persistência/hidratação via LocalStorage
- **Critérios de aceite:**
  - [ ] Dados persistem após refresh

---

## Epic 3 — Funcionalidades principais

### Issue 6 — CRUD de categorias
- **Título:** `feat(categories): implementar CRUD completo`
- **Prioridade:** P0
- **Estimativa:** 5
- **Labels:** `feature`, `frontend`, `mvp`
- **Descrição:**
  - Criar listagem, criação, edição e exclusão de categorias.
- **Checklist:**
  - [ ] Tela de listagem de categorias
  - [ ] Formulário de criação/edição
  - [ ] Confirmação de exclusão
  - [ ] Validação básica de dados
- **Critérios de aceite:**
  - [ ] Usuário consegue manter categorias de receita/despesa

### Issue 7 — CRUD de transações com filtros
- **Título:** `feat(transactions): implementar CRUD + filtros por período/categoria/tipo`
- **Prioridade:** P0
- **Estimativa:** 8
- **Labels:** `feature`, `frontend`, `mvp`
- **Descrição:**
  - Implementar fluxo principal de registro e consulta de receitas/despesas.
- **Checklist:**
  - [ ] Formulário de transação
  - [ ] Listagem de transações
  - [ ] Edição e exclusão
  - [ ] Filtros por data, tipo e categoria
- **Critérios de aceite:**
  - [ ] Fluxo completo de transações operacional

### Issue 8 — Dashboard com KPIs financeiros
- **Título:** `feat(dashboard): cards de saldo, receitas, despesas e visão mensal`
- **Prioridade:** P1
- **Estimativa:** 5
- **Labels:** `feature`, `frontend`, `mvp`
- **Descrição:**
  - Exibir indicadores principais com base nas transações cadastradas.
- **Checklist:**
  - [ ] Card de saldo atual
  - [ ] Card de receitas do período
  - [ ] Card de despesas do período
  - [ ] Resumo mensal
- **Critérios de aceite:**
  - [ ] Dashboard atualiza em tempo real ao alterar transações

---

## Epic 4 — Configuração e experiência

### Issue 9 — Preferências do usuário
- **Título:** `feat(settings): moeda, locale e preferências da aplicação`
- **Prioridade:** P2
- **Estimativa:** 3
- **Labels:** `feature`, `frontend`
- **Descrição:**
  - Implementar configurações básicas de personalização.
- **Checklist:**
  - [ ] Configurar moeda
  - [ ] Configurar locale
  - [ ] Persistir preferências
- **Critérios de aceite:**
  - [ ] Preferências aplicadas e persistidas

### Issue 10 — Melhorias de UX e acessibilidade
- **Título:** `ux: adicionar estados vazios, feedbacks e melhorias de acessibilidade`
- **Prioridade:** P2
- **Estimativa:** 5
- **Labels:** `frontend`, `feature`
- **Descrição:**
  - Melhorar clareza do produto em estados de sucesso/erro/vazio.
- **Checklist:**
  - [ ] Mensagens para estado vazio
  - [ ] Feedback visual de sucesso/erro
  - [ ] Revisão de navegação por teclado
- **Critérios de aceite:**
  - [ ] Fluxo de uso sem “silêncio” em ações críticas

---

## Epic 5 — Qualidade contínua

### Issue 11 — Estratégia de testes por camada
- **Título:** `test: ampliar cobertura para domínio, componentes e fluxo principal`
- **Prioridade:** P1
- **Estimativa:** 5
- **Labels:** `testing`, `frontend`
- **Descrição:**
  - Expandir testes para cálculos financeiros, componentes críticos e fluxos básicos.
- **Checklist:**
  - [ ] Testes de cálculos (saldo/totalizações)
  - [ ] Testes de componentes de formulário/lista
  - [ ] Smoke tests de rotas
- **Critérios de aceite:**
  - [ ] Cobertura mínima inicial definida e atendida

### Issue 12 — Pipeline de qualidade (lint/test/build)
- **Título:** `ci: padronizar checks automáticos de qualidade`
- **Prioridade:** P1
- **Estimativa:** 3
- **Labels:** `tech-debt`, `testing`
- **Descrição:**
  - Garantir padrão de qualidade com execução automática de validações.
- **Checklist:**
  - [ ] `lint` no pipeline
  - [ ] `test:unit` no pipeline
  - [ ] `build` no pipeline
- **Critérios de aceite:**
  - [ ] PR só é considerado pronto com checks verdes

---

## Roadmap sugerido (2 sprints)

### Sprint 1
- Issues: #1, #2, #4, #5, #6
- **Meta:** base sólida + categorias operacionais + persistência local

### Sprint 2
- Issues: #7, #8, #9, #10
- **Meta:** núcleo de transações + dashboard útil + melhorias de UX

### Trilha contínua (paralela)
- Issues: #11, #12
- **Meta:** elevar qualidade e previsibilidade de entrega
