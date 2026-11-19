# O que ainda falta preencher

A maior parte do site já está com os dados reais da Taisa. O que sobrou está
marcado com `[colchetes]` no `index.html`. Procure por `[` com Ctrl+F.

## Já preenchido

- Nome, nome completo e o logo das duas folhas, com o nome em Marcellus
- Fontes da referência: Marcellus nos títulos e DM Sans no texto
- Telefone e WhatsApp: (83) 98884-9429
- Instagram: [@taisatamarafisio_](https://www.instagram.com/taisatamarafisio_/)
- Experiência: o site mostra "15+ anos". A bio do Instagram dela diz 17 anos,
  caso um dia queira trocar
- As cinco áreas de atuação: fisioterapia para atletas, traumato-ortopedia,
  cirurgias faciais, reabilitação funcional e Conceito Mulligan
- Consultório: Avenida Senador Ruy Carneiro, 300, Trade Office Center, sala 401,
  Miramar, João Pessoa/PB, CEP 58032-101, com link do Google Maps
- Seção "Onde dói?" com mapa do corpo, 7 tratamentos e botão de WhatsApp em cada
  um (rascunho, veja "Revisar com a Taisa" abaixo)
- Dúvidas frequentes, com 7 respostas escritas (rascunho, mesma revisão)
- Texto do "Quem é Taisa Tamara" e as etiquetas
- As duas fotos dela, no topo da página e na seção Sobre

O botão "Agendar consulta" já funciona. Ele abre o WhatsApp dela com os dados
do formulário escritos na mensagem.

## Falta

### 1. Horário de sábado e domingo
O rodapé mostra só segunda a sexta (7h30 às 12h e 14h às 18h). Se ela atende no fim de semana, acrescente as linhas.

### 2. Depoimentos
`[Depoimento 1/2/3]`, `[Nome do Paciente]` e `[Tratamento realizado]`.

Peça autorização por escrito antes de publicar o nome de um paciente. E prefira
depoimento específico: "voltei a subir escada em 6 semanas" convence mais que
"excelente profissional". Se ainda não tiver nenhum, me avise. É melhor tirar a
seção do ar do que deixá-la com texto de exemplo.

### 3. Imagem de compartilhamento
`[URL da imagem de compartilhamento, 1200x630px]`. É a miniatura que aparece
quando o link é mandado no WhatsApp ou no Instagram. Sem ela, o link vai sem
imagem nenhuma. Veja [public/imagens/LEIA-ME.md](public/imagens/LEIA-ME.md).

## Revisar com a Taisa

Estes textos foram escritos a partir de um site de referência feito por uma
agência (oDomain), que se apresenta como prévia não oficial. Eu reescrevi com
palavras próprias e de forma conservadora, sem prazo de recuperação nem promessa
de resultado. Mesmo assim ela precisa ler tudo antes de publicar, porque descreve
o que ela faz na prática.

### Formação
Na seção "Quem é Taisa Tamara". Os itens abaixo ainda estão entre colchetes
porque vieram do site de referência e não foram confirmados:

- `[Graduação em Fisioterapia, 2009]`
- `[Capacitação em Conceito Mulligan]`
- `[Capacitação em bandagem funcional]`
- `[Curso de terapia manual]`
- `[Atuação em reumatologia]`

Confirme cada item e apague os colchetes. O que ela não tiver, apague a linha.

Já confirmados e sem colchetes: "Atuação em Traumato-ortopedia e em Fisioterapia
do Esporte desde 2014" e "Atuação na área de Musculação Terapêutica".

### Tratamentos
Sete itens: joelho e LCA, ombro, fraturas, coluna e cervical, idoso e quedas,
musculação terapêutica e esporte. Vale perguntar a ela principalmente:

- Ela atende mesmo idosos e prevenção de quedas? Esse item e o de fraturas não
  aparecem na bio dela, só no site de referência.
- As etapas de cada tratamento descrevem o jeito dela de trabalhar?

Para tirar um tratamento, apague o bloco `<details id="trat-...">` dele, o cartão
numerado correspondente e, se houver, os pontos do corpo com o mesmo `data-trat`.

### Dúvidas frequentes
Oito perguntas. Duas precisam de dado dela:

- `[Duração da primeira consulta.]`
- `[Informar convênios aceitos e formas de pagamento.]`

As respostas sobre exames e sobre a cirurgia de LCA também merecem uma leitura
dela, por serem orientações de saúde.

## Logo

O logo (as duas folhas) foi copiado em SVG do site de referência e fica como um
`<symbol id="folhas">` no começo do `index.html`. Se a Taisa tiver o arquivo
original do logo, vale trocar esse símbolo por ele. O favicon
(`public/favicon.svg`) usa as mesmas folhas.

## Como rodar o site

```bash
npm install
npm run dev
```

Para abrir no celular, na mesma rede Wi-Fi:

```bash
npm run dev -- --host
```

Para gerar a versão final, pronta para publicar:

```bash
npm run build
```

Os arquivos ficam em `dist/`.
