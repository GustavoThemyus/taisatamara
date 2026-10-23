# O que preencher antes de publicar

Tudo que está entre `[colchetes]` é provisório. A lista abaixo cobre **todos**
os pontos, na ordem em que aparecem no site.

---

## 1. O único ajuste em código: `src/config.ts`

```ts
export const WHATSAPP = '[55DDDNUMERO]';
```

Troque por **55 + DDD + número, só dígitos** — por exemplo `5511987654321`.

Esse é o passo mais importante: enquanto ele não for feito, o formulário avisa
em vez de abrir o WhatsApp. Depois de preenchido, **todos** os botões de WhatsApp
do site (topo, rodapé e barra fixa do celular) passam a funcionar automaticamente.

---

## 2. Textos em `index.html`

Abra o arquivo e procure pelos colchetes (`Ctrl+F` por `[`).

### Cabeçalho e rodapé
| Placeholder | O que colocar |
|---|---|
| `[Nome da Fisioterapeuta]` | Nome como ela quer ser chamada (aparece em 3 lugares) |
| `[CREFITO 00000-F]` | Número de registro profissional |
| `[Telefone / WhatsApp]` | Telefone visível no topo |
| `[+5500000000000]` | Mesmo telefone em formato de link `tel:` |
| `[email@exemplo.com]` | E-mail de contato (aparece 2 vezes) |

### Topo da página (hero)
| Placeholder | O que colocar |
|---|---|
| `[Subtítulo: ...]` | 1 ou 2 linhas sobre o atendimento |
| `[+1.000 pacientes atendidos]` | Prova social real — ou apague o bloco se ainda não houver |

### Serviços
Os três cards já vêm com Terapia Manual, Reabilitação de Lesões e Alívio da Dor
Crônica. Troque os títulos e as descrições entre colchetes pelos serviços que ela
realmente oferece.

### Sobre
| Placeholder | O que colocar |
|---|---|
| `[X]+` | Anos de experiência |
| `[Parágrafo institucional: ...]` | Quem ela é e como trabalha |
| `[Segundo parágrafo: ...]` | Formação, especializações, quem ela atende |
| `[+1.000]` / `[0X]` | Números dos dois selos |

### Processo
As três etapas já estão escritas. Ajuste as descrições ao jeito dela atender.

### Depoimentos
`[Depoimento 1/2/3]`, `[Nome do Paciente 1/2/3]` e `[Tratamento realizado — Cidade]`.
Peça autorização antes de publicar o nome de um paciente. Depoimentos específicos
("voltei a subir escada em 6 semanas") convencem muito mais que elogios genéricos.

### Rodapé
Endereço completo, `[Link do Google Maps]`, horários de atendimento,
`[Link do Instagram]` e `[Link do Facebook]`.

---

## 3. Dados de compartilhamento (topo do `index.html`)

Ficam dentro do `<head>` e definem o que aparece quando o link é mandado no
WhatsApp ou no Instagram:

- `<title>` e `<meta name="description">`
- `og:title`, `og:description`
- `og:image` — uma imagem de **1200 × 630 px**

---

## 4. Fotos

Veja [public/imagens/LEIA-ME.md](public/imagens/LEIA-ME.md) — lista cada foto,
a proporção certa e como trocar o bloco cinza-verde pela imagem real.

---

## Como rodar o site

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).
A página recarrega sozinha a cada alteração salva.

Para gerar a versão final, pronta para subir em qualquer hospedagem:

```bash
npm run build
```

Os arquivos ficam na pasta `dist/`.
