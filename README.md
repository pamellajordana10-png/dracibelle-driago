# Site — Dra. Cibelle Aleixo & Dr. Iago Gonzaga

Protótipo de site institucional (HTML, CSS e JavaScript puros, sem build). Abra `index.html` no navegador ou publique a pasta em qualquer hospedagem estática.

## Estrutura
- `index.html` — marcação e SEO (título, meta, Open Graph, JSON-LD)
- `styles.css` — identidade visual (tokens de cor no `:root`)
- `config.js` — **contatos, unidades, tratamentos e profissionais** (edite aqui)
- `main.js` — renderização, seletor de unidade, menu mobile, animações
- `assets/` — `photo.jpg` (foto oficial da dupla) e recortes `cibelle.jpg` / `iago.jpg`
- `robots.txt` e `sitemap.xml` — troque `SEU-DOMINIO.com.br` pelo domínio definitivo

## Pendências antes de publicar
- Confirmar o funcionamento dos números no WhatsApp e o endereço exato de Sumé
- Substituir os recortes por retratos individuais autorizados (`assets/cibelle.jpg`, `assets/iago.jpg`)
- Inserir CRO, formação e títulos confirmados (cards de profissionais e rodapé)
- Substituir os placeholders de avaliações por avaliações reais verificadas
- Adicionar fotos reais das unidades (galeria ainda não incluída)
- Revisar os textos conforme as normas de publicidade do CFO e a LGPD
- Ajustar o domínio em `robots.txt` e `sitemap.xml`, e adicionar `canonical` e `og:url`

## Enviar ao GitHub
```bash
git init && git add . && git commit -m "Site institucional - versão inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```
Para publicar: Vercel (importar o repositório) ou GitHub Pages (Settings → Pages → branch `main`).
