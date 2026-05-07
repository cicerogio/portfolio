---
title: "CW Design System"
description: "Reconstrução do design system com IA — 23 componentes refatorados em um único fim de semana."
date: 2024-05-03
tags: ["Design System", "IA"]
cover: "/portfolio/images/ds-cover.png"
metric: "23 componentes em 8 horas"
client: "Cardápio Web"
role: "Lead Product Designer"
duration: "1 fim de semana"
year: 2024
---

## Contexto

Após o projeto Totem, o design system do Cardápio Web mostrava sinais claros de desgaste: mais de 200 componentes sem camada de tokens, sem suporte a dark mode, convenções de nomenclatura inconsistentes e uma biblioteca Figma que havia divergido do código de produção há 6 meses.

Uma auditoria tradicional de design system levaria 2 a 3 meses. Tínhamos uma sprint de produto começando em 10 dias. Decidi rodar um sprint de reconstrução com IA no lugar.

## Problema

O sistema tinha 3 problemas centrais:

1. **Sem camada de tokens semânticos.** Cores eram hardcoded por componente. Mudar uma cor de marca significava atualizar mais de 200 frames manualmente.
2. **Divergência código/design.** A engenharia havia evoluído componentes sem atualizar o Figma. Designers estavam especificando componentes que não existiam no código.
3. **Sem processo de contribuição.** Novos componentes eram criados ad-hoc, sem convenção de nomenclatura, cobertura de variantes ou documentação.

## Processo

### Auditoria com IA

Exportei o inventário completo de componentes do Figma usando um plugin e processei com o Claude, usando um prompt estruturado pedindo: inconsistências de nomenclatura, estados ausentes, variantes de dark mode faltantes e lacunas de acessibilidade.

Em 45 minutos, tinha uma lista priorizada de 47 problemas que teriam levado 2 dias para compilar manualmente.

### Arquitetura de Tokens

Desenhei um sistema de tokens em 3 camadas: **Primitivos** (cores brutas, espaçamentos, raios) → **Semânticos** (background, foreground, border, accent) → **Componente** (button-primary-bg, input-border, etc.).

Usei o Claude para gerar o manifesto de tokens a partir dos padrões de uso de cor existentes, depois validei e editei manualmente. A camada semântica foi a mais difícil — exigiu julgamento real de design que a IA não conseguia substituir.

### Reconstrução dos Componentes

Com os tokens definidos, usei Claude Code para montar os stories do Storybook e a estrutura de variáveis CSS de cada componente. Direcionei a atenção de design para as decisões mais difíceis: estados de interação, comportamento responsivo e acessibilidade.

23 componentes core reconstruídos em 8 horas de trabalho focado, com dark mode completo e conformidade WCAG AA.

## Solução

Um design system token-first com 23 componentes refatorados, documentação completa no Storybook, dark mode desde o primeiro dia e um template de contribuição que exige conformidade com a convenção de nomenclatura antes de abrir um PR.

## Impacto

**30 dias pós-lançamento (dados mockados):**

- Tempo para especificar uma nova feature: 3h → 45 min em média
- Inconsistências design/código reportadas em QA: queda de 91%
- Cobertura de dark mode: 0% → 100%
- Novos componentes adicionados por outros designers: 4 (sem nenhuma violação de nomenclatura)

## Aprendizados

A métrica de 8 horas é real, mas enganosa. Funcionou porque: 3 anos de contexto no produto, uma arquitetura de tokens clara definida antes de tocar em qualquer componente e o Claude cuidando do scaffolding e boilerplate que eu faria manualmente.

**IA amplifica preparação. Não a substitui.**
