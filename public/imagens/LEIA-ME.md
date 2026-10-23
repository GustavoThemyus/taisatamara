# Fotos do site

## O que já está aqui

| Arquivo | Onde aparece | Tamanho original |
|---|---|---|
| `taisa-hero.webp` | Topo da página, ao lado do formulário | 412 × 541 |
| `taisa-sobre.webp` | Seção "Quem é Taisa Tamara" | 609 × 584 |

As duas vieram das fotos enviadas, convertidas para WebP (9 KB e 13 KB) e
exibidas no tamanho original, sem ampliar, para não perder nitidez.

## O que ainda falta

**Imagem de compartilhamento, 1200 × 630 px.** É a miniatura que aparece quando
o link do site é mandado no WhatsApp ou no Instagram. Precisa ser horizontal.
As fotos atuais são verticais e ficariam cortadas na altura do pescoço. O ideal
é uma foto horizontal dela, ou uma arte com o nome e a especialidade.

Depois de salvá-la aqui como `compartilhar.jpg`, troque no `index.html`:

```html
<meta property="og:image" content="/imagens/compartilhar.jpg" />
```

## Se quiser trocar alguma foto

1. Salve o arquivo nesta pasta.
2. No `index.html`, ache a `<img>` correspondente e ajuste `src`, `width`,
   `height` e `alt`.
3. Mantenha `width` e `height` com as dimensões reais do arquivo. É o que
   impede a página de pular enquanto a imagem carrega.

Duas regras que valem sempre:

- **Comprima antes.** Foto direto do celular tem 4 a 6 MB e trava o site no 4G.
  Use [squoosh.app](https://squoosh.app) e deixe cada uma abaixo de 300 KB.
- **O `alt` é uma frase de verdade**, descrevendo a foto para quem usa leitor de
  tela e para o Google. Não "foto 1".
