# Site — [Nome da Fisioterapeuta]

Landing page de página única: cartão de visita digital + agendamento pelo WhatsApp.
Feita para celular em primeiro lugar, que é de onde virá a maior parte das visitas.

## Rodar

```bash
npm install
npm run dev
```

## Publicar

```bash
npm run build
```

A pasta `dist/` é um site estático — sobe em Netlify, Vercel, GitHub Pages ou
qualquer hospedagem comum, sem servidor nem banco de dados.

## Antes de publicar

Leia **[PREENCHER.md](PREENCHER.md)**: lista todos os textos, telefones e fotos
provisórios e onde trocar cada um.

## Como está organizado

```
index.html              todo o conteúdo e a marcação do site
src/config.ts           número de WhatsApp (o único ajuste em código)
src/styles/main.css     cores, tipografia e componentes (Tailwind v4)
src/modules/            comportamento: menu, formulário, carrossel, animações
public/imagens/         fotos do site — veja o LEIA-ME de lá
```

## Stack

Vite + TypeScript + Tailwind CSS v4. Sem framework de interface: o HTML é direto,
então mudar um texto não exige saber programar.
