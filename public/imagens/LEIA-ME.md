# Fotos do site

Enquanto não houver fotos reais, cada espaço mostra um bloco verde claro com a
descrição da foto que vai ali. São **9 espaços** no total.

## Lista das fotos

| Onde | Sugestão de nome | Proporção | Tamanho mínimo |
|---|---|---|---|
| Topo da página | `hero.jpg` | 21:9 (bem horizontal) | 1600 px de largura |
| Serviço 1 — Terapia Manual | `servico-1.jpg` | 4:3 | 800 px |
| Serviço 2 — Reabilitação | `servico-2.jpg` | 4:3 | 800 px |
| Serviço 3 — Dor Crônica | `servico-3.jpg` | 4:3 | 800 px |
| Sobre — retrato | `sobre.jpg` | 4:3 | 1000 px |
| Passo 01 — Avaliação | `passo-1.jpg` | 4:3 | 800 px |
| Passo 02 — Plano | `passo-2.jpg` | 4:3 | 800 px |
| Passo 03 — Acompanhamento | `passo-3.jpg` | 4:3 | 800 px |
| Compartilhamento (link) | `compartilhar.jpg` | 1200 × 630 px exatos | — |

## Como trocar um bloco por uma foto

1. Salve a imagem nesta pasta (`public/imagens/`).
2. No `index.html`, ache o bloco correspondente:

```html
<div class="photo-slot aspect-[4/3]">
  <p class="photo-slot__label">[Foto: sessão de terapia manual]</p>
</div>
```

3. Troque o conteúdo por uma `<img>`, mantendo a `div` de fora:

```html
<div class="photo-slot aspect-[4/3]">
  <img src="/imagens/servico-1.jpg" alt="Fisioterapeuta aplicando terapia manual no ombro de uma paciente"
       class="h-full w-full object-cover" loading="lazy" width="800" height="600" />
</div>
```

O `alt` descreve a foto para quem usa leitor de tela e para o Google — escreva
uma frase de verdade, não "foto 1".

## Antes de subir as fotos

- **Comprima.** Foto direto do celular tem 4–6 MB e trava o site no 4G.
  Use [squoosh.app](https://squoosh.app) e deixe cada uma abaixo de 300 KB.
- **Autorização.** Foto com rosto de paciente só vai ao ar com autorização por
  escrito. Na dúvida, prefira fotos em que o paciente não seja identificável.
