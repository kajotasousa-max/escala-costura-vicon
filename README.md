# Escala da Costura — Vicon

App web (um único arquivo HTML) para a líder organizar a produção do dia na fábrica de costura.

## O que faz

- **Presença do dia**: presente, parcial (chegou tarde ou saiu cedo, com horário), falta ou falta justificada.
- **Plano por produto e horário**: cada modelo com início, fim e quantidade; a escala muda quando a linha troca de produto.
- **Escala automática**: a partir da Matriz de Versatilidade (níveis 0/25/50/75/100), do posto habitual de cada pessoa e do roteiro de cada produto.
- **Orientação de substituição**: para cada falta ou atraso, quem assume e por quê, com sugestões aplicáveis em um toque e plano B quando ninguém pode cobrir.
- **Gestão diária (aba GD)**: quadro das 4 linhas e das áreas de apoio no formato do quadro A3 da fábrica (produção por linha com farol, hora a hora, pessoas e cobertura automáticas, qualidade e disponibilidade, áreas de apoio, restrições, plano de ação que passa de um dia para o outro e acompanhamento semanal), modo reunião de 10 minutos e impressão do quadro em A3.
- **Produtividade para o RA do Brasil Mais Produtivo (aba GD, bloco 09)**: peças por homem-hora por linha, no dia e na semana, com as horas trabalhadas calculadas sozinhas a partir da presença e da escala; linha de base (digitada ou calculada pelo histórico), ganho sobre a base com destaque quando passa de 20%, lançamento da fita em caixas e exportação da semana em Excel como evidência do RA.
- **Ritmo e gargalo do dia**: takt, Yamazumi com as pessoas realmente escaladas, gargalo, capacidade em peças contra o pedido e eficiência do balanceamento.
- **Takt e balanceamento (Produtos)**: simulação de demanda com o número de pessoas necessárias por posto, comparado às pessoas aptas na matriz.
- **Saúde da matriz**: verificação automática de postos sem pessoa apta, postos que dependem de uma só pessoa, posto habitual incompatível com a matriz e produtos sem tempo padrão.
- **Ranking de assiduidade**, **relatório por e-mail**, **texto para WhatsApp**, impressão e importação da MV em Excel.

Funciona no celular (navegação inferior, telas em cartões) e no computador.

## Guia de uso

O arquivo `manual.html` é o guia interativo do app, com quadros de treino, solução de problemas e teste rápido. No app, abra em **Ajustes → Guia de uso**. Pelo GitHub Pages: `https://kajotasousa-max.github.io/escala-costura-vicon/manual.html`.

## Como usar

1. Abra `index.html` no navegador (Chrome, Edge ou Safari) ou pelo link do GitHub Pages.
2. O app abre vazio. Em **Ajustes → Importar matriz (Excel)**, carregue a planilha da MV (modelo 3×3×3, aba MV), ou restaure um backup `.json`.
3. Defina o posto habitual de cada pessoa na aba **Matriz** e cadastre os roteiros e tempos padrão (min/peça) em **Produtos**.

Os dados ficam salvos **somente no navegador do aparelho** onde foram lançados. Nenhum dado da equipe fica neste repositório. Baixe um backup toda semana em **Ajustes → Backup**.

## Publicar com GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
Em 1 a 2 minutos o app fica em `https://kajotasousa-max.github.io/escala-costura-vicon/`.
No celular, use "Adicionar à tela inicial" para virar um ícone.

## Envio automático de e-mail (opcional)

Veja as instruções no topo de [`apps-script/envio_email.gs`](apps-script/envio_email.gs).

## Estrutura

```
index.html                 app completo (HTML + CSS + JS)
manual.html                guia de uso interativo
apps-script/envio_email.gs serviço opcional de envio automático de e-mail
```

Desenvolvido na consultoria Lean Manufacturing — Programa Brasil Mais Produtivo (SENAI MG).
