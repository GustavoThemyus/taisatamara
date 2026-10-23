# O que ainda falta preencher

A maior parte do site já está com os dados reais da Taisa. O que sobrou está
marcado com `[colchetes]` no `index.html` — procure por `[` com Ctrl+F.

## Já preenchido ✅

- Nome, nome completo e o monograma TT da marca
- Telefone e WhatsApp: (83) 98884-9429
- Instagram: [@taisatamarafisio_](https://www.instagram.com/taisatamarafisio_/)
- Áreas de atuação: Fisioterapia Esportiva, Reabilitação Funcional,
  Traumato-Ortopédica e Conceito Mulligan
- Texto do "Quem é Taisa Tamara" e as etiquetas (Paraibana, 15+ anos,
  Comunicativa, Pratica musculação)
- As duas fotos dela (topo da página e seção Sobre)

O botão "Agendar consulta" já funciona: abre o WhatsApp dela com os dados
do formulário escritos na mensagem.

## Falta ⬜

### 1. CREFITO — aparece 2 vezes
`[CREFITO 00000-F]`, no cabeçalho e no rodapé. É o registro profissional;
num site de saúde ele pesa bastante na confiança de quem não conhece.

### 2. E-mail
`[email@exemplo.com]`, no rodapé.

### 3. Cidade e endereço do consultório
- `[Cidade/UF]` — aparece no título da aba e no texto de compartilhamento
- `[Rua Exemplo, 000 — Sala 00]`, `[Bairro — Cidade/UF]`, `[CEP 00000-000]`
- `[Link do Google Maps]` — abra o Maps, ache o consultório, Compartilhar → Copiar link

Se ela atende em mais de um lugar, ou só a domicílio, me avise que eu ajusto
a seção — hoje ela pressupõe um endereço fixo.

### 4. Horários de atendimento
`[08h — 18h]`, `[08h — 12h]`, `[Fechado]` — os valores atuais são chute.

### 5. Depoimentos — os 3
`[Depoimento 1/2/3]`, `[Nome do Paciente]` e `[Tratamento realizado]`.

Peça autorização por escrito antes de publicar o nome de um paciente. E prefira
depoimento específico: "voltei a subir escada em 6 semanas" convence muito mais
que "excelente profissional". Se ainda não tiver nenhum, me avise — é melhor
tirar a seção do ar do que deixá-la com texto de exemplo.

### 6. Imagem de compartilhamento
`[URL da imagem de compartilhamento — 1200x630px]` — é a miniatura que aparece
quando o link é mandado no WhatsApp ou no Instagram. Sem ela, o link vai sem
imagem nenhuma. Veja [public/imagens/LEIA-ME.md](public/imagens/LEIA-ME.md).

---

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
