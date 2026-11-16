# O que ainda falta preencher

A maior parte do site já está com os dados reais da Taisa. O que sobrou está
marcado com `[colchetes]` no `index.html`. Procure por `[` com Ctrl+F.

## Já preenchido

- Nome, nome completo e o monograma TT da marca
- Telefone e WhatsApp: (83) 98884-9429
- Instagram: [@taisatamarafisio_](https://www.instagram.com/taisatamarafisio_/)
- Experiência: o site mostra "15+ anos". A bio do Instagram dela diz 17 anos,
  caso um dia queira trocar
- As cinco áreas de atuação: fisioterapia para atletas, traumato-ortopedia,
  cirurgias faciais, reabilitação funcional e Conceito Mulligan
- Consultório: Avenida Senador Ruy Carneiro, 300, Trade Office Center, sala 401,
  Miramar, João Pessoa/PB, CEP 58032-101, com link do Google Maps
- Texto do "Quem é Taisa Tamara" e as etiquetas
- As duas fotos dela, no topo da página e na seção Sobre

O botão "Agendar consulta" já funciona. Ele abre o WhatsApp dela com os dados
do formulário escritos na mensagem.

## Falta

### 1. CREFITO
`[CREFITO 00000-F]`, no cabeçalho e no rodapé. É o registro profissional. Num
site de saúde ele pesa bastante na confiança de quem não conhece ela.

### 2. E-mail
`[email@exemplo.com]`, no rodapé.

### 3. Horários de atendimento
`[08h às 18h]`, `[08h às 12h]`, `[Fechado]`. Os valores atuais são chute.

### 4. Depoimentos
`[Depoimento 1/2/3]`, `[Nome do Paciente]` e `[Tratamento realizado]`.

Peça autorização por escrito antes de publicar o nome de um paciente. E prefira
depoimento específico: "voltei a subir escada em 6 semanas" convence mais que
"excelente profissional". Se ainda não tiver nenhum, me avise. É melhor tirar a
seção do ar do que deixá-la com texto de exemplo.

### 5. Imagem de compartilhamento
`[URL da imagem de compartilhamento, 1200x630px]`. É a miniatura que aparece
quando o link é mandado no WhatsApp ou no Instagram. Sem ela, o link vai sem
imagem nenhuma. Veja [public/imagens/LEIA-ME.md](public/imagens/LEIA-ME.md).

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
