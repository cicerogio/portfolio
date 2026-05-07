---
title: "Gupy ATS Redesign"
description: "Redesign completo do sistema de rastreamento de candidatos da maior plataforma de RH do Brasil."
date: 2021-08-01
tags: ["Produto", "B2B SaaS"]
cover: "/portfolio/images/gupy-cover.png"
metric: "Ganho expressivo em conversão e tempo de contratação"
client: "Gupy"
role: "Senior Product Designer"
duration: "6 meses"
year: 2021
---

## Contexto

Em 2021, a Gupy era o ATS de crescimento mais rápido do Brasil, processando milhões de candidaturas por mês para clientes enterprise. A interface central do ATS — a ferramenta que recrutadores usavam de 6 a 8 horas por dia — não havia sido redesenhada substancialmente desde 2018.

Com uma Série B concluída e vendas enterprise acelerando, o produto precisava subir de mercado. Compradores enterprise esperavam um nível de polimento e configurabilidade que o produto atual não conseguia entregar.

## Problema

Três problemas distintos, reportados por segmentos diferentes:

**Recrutadores** (usuários primários): kanban com mais de 200 cards por coluna era inutilizável. Sem filtros, sem ações em lote, sem como ver o progresso do candidato sem abrir cada card individualmente.

**Gestores de contratação** (usuários secundários): não conseguiam ter uma visão consolidada das suas vagas sem solicitar um relatório ao RH.

**Diretores de RH** (compradores): sem analytics vinculados à performance dos recrutadores ou ao tempo de contratação por departamento.

## Processo

### Pesquisa

Fiquei 2 semanas embedded com a equipe de customer success, participando de calls de onboarding e ouvindo escalações de suporte. Realizei 14 entrevistas com usuários em 3 tamanhos de empresa (50, 500, 5.000+ funcionários).

Descoberta mais importante: **recrutadores haviam construído gambiarras elaboradas** — boards coloridos no Notion, grupos no WhatsApp por vaga, convenções de nomenclatura customizadas nos nomes de candidatos. O produto não estava atendendo a eles. Eles estavam se adaptando ao produto.

### Arquitetura de Informação

Realizei um card sort com 18 recrutadores para entender como eles organizam mentalmente seu trabalho. O resultado contradisse a IA existente, que era organizada em torno de "vagas" em vez de "pessoas."

Recrutadores pensam em pipelines e pessoas, não em publicações de vagas.

### Design e Testes

Prototipei 3 direções principais de IA, testadas com 6 usuários avançados em sessões moderadas. Iteramos por 4 grandes rodadas de design ao longo de 3 meses antes da entrega para a engenharia.

A decisão mais controversa: remover completamente o kanban como experiência padrão, substituindo por lista + painel de detalhes. 40% dos usuários resistiram inicialmente. 100% preferiram após 2 semanas de uso.

## Solução

Um ATS redesenhado com navegação em lista, painel deslizante de detalhes do candidato (sem recarregamentos de página completos), ações em lote em seleções, filtros salvos por recrutador e uma nova visão para gestores de contratação com métricas agregadas.

Dashboard de analytics entregue 2 meses após o redesign principal.

## Impacto

**6 meses pós-lançamento (dados internos mockados):**

- Tempo do recrutador para decisão no pipeline: -38%
- Taxa de renovação enterprise: mantida em 94% (vs. 91% pré-lançamento)
- NPS do segmento de recrutadores: +22 pontos
- Tickets de suporte relacionados ao fluxo do ATS: -54%

## Aprendizados

A decisão de design mais difícil — remover o kanban como padrão — foi também a mais impactante. Exigiu 3 meses de dados, um rollout controlado e aprovação executiva significativa para executar.

Bom design às vezes significa tirar algo. O desafio é acumular evidências suficientes de que a remoção é claramente melhor antes que a organização deixe você fazer isso.
