# Site da Taisa Tamara

Landing page de página única: cartão de visita digital e agendamento pelo
WhatsApp. Feita para celular em primeiro lugar, que é de onde vem a maior parte
das visitas.

## Rodar

```bash
npm install
npm run dev
```

Para abrir no celular, na mesma rede Wi-Fi: `npm run dev -- --host`

## Publicar

```bash
npm run build
```

A pasta `dist/` é um site estático. Sobe em Netlify, Vercel, GitHub Pages ou
qualquer hospedagem comum, sem servidor nem banco de dados.

## Antes de publicar

Leia **[PREENCHER.md](PREENCHER.md)**. Lista os textos e dados que ainda estão
provisórios e onde trocar cada um.

## Como está organizado

```
index.html              todo o conteúdo e a marcação do site
src/config.ts           número de WhatsApp usado pelo formulário
src/styles/main.css     cores, tipografia e componentes (Tailwind v4)
src/modules/            comportamento: menu, formulário, carrossel, animações
public/imagens/         fotos do site, veja o LEIA-ME de lá
```

## Stack

Vite, TypeScript e Tailwind CSS v4. Sem framework de interface: o HTML é direto,
então mudar um texto não exige saber programar.
