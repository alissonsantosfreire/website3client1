# Tetriz Blocos de EPS - Website

## 📋 Arquivos de Imagem Necessários

Para o funcionamento completo do site e otimização de SEO, certifique-se de que os seguintes arquivos de imagem estejam na pasta raiz do site:

### 🎨 Favicon e Ícones
- **Favicon.png** (192x192px ou maior)
  - Ícone que aparece na aba do navegador
  - Usado também como ícone de aplicativo PWA
  - Formato: PNG com fundo transparente ou sólido
  - Recomendação: Logo Tetriz simplificado em azul (#1e40af)

### 🖼️ Thumbnail / Open Graph
- **Thumbnail.png** (1200x630px)
  - Imagem de compartilhamento em redes sociais
  - Aparece quando o link é compartilhado no Facebook, WhatsApp, LinkedIn, etc.
  - Formato: PNG ou JPG
  - Conteúdo sugerido: Logo + texto "Blocos de EPS Tetriz - Nº1 do Nordeste"
  - Fundo: Azul gradiente da marca

### 📸 Fotos de Produtos
- **Foto do bloco (2).webp** - Seção "Por que escolher os Blocos Tetriz?"
- **Foto do bloco (3).webp** - Seção "O que são os Blocos de EPS?"
- **Foto do bloco (4).webp** - Seção "Especificações Técnicas"

### 🏗️ Fotos da Galeria
- **Fotos das obras (1).webp** até **Fotos das obras (21).webp**
  - 21 fotos de obras realizadas
  - Formato: WebP (otimizado para web)
  - Dimensões recomendadas: 1200x800px

---

## 🚀 Otimizações de SEO Implementadas

### Meta Tags
✅ Title e Description otimizados
✅ Keywords relevantes para busca
✅ Open Graph (Facebook, WhatsApp)
✅ Twitter Cards
✅ Geo Tags (localização Cariri/CE)
✅ Meta tags de idioma e robots

### Structured Data (Schema.org)
✅ LocalBusiness - Dados da empresa
✅ Product - Informações do produto
✅ WebSite - Estrutura do site

### Arquivos de SEO
✅ **robots.txt** - Instrui bots de busca
✅ **sitemap.xml** - Mapa do site para Google
✅ **.htaccess** - Otimização de performance e segurança
✅ **manifest.json** - PWA (Progressive Web App)

### Performance
✅ Compressão GZIP ativada
✅ Cache do navegador configurado
✅ Preconnect para recursos externos
✅ Lazy loading implícito em imagens WebP

### Segurança
✅ HTTPS redirect
✅ Headers de segurança (X-Frame-Options, XSS Protection)
✅ Proteção contra listagem de diretórios

---

## 📱 Checklist Pós-Publicação

Após publicar o site, execute as seguintes ações:

1. **Google Search Console**
   - Adicione o site: https://search.google.com/search-console
   - Envie o sitemap.xml
   - Solicite indexação da página principal

2. **Google My Business**
   - Crie ou atualize o perfil da empresa
   - Adicione fotos, horário de funcionamento, localização

3. **Google Analytics** (opcional)
   - Configure para monitorar visitantes

4. **Teste de Performance**
   - PageSpeed Insights: https://pagespeed.web.dev/
   - GTmetrix: https://gtmetrix.com/

5. **Teste de Rich Results**
   - https://search.google.com/test/rich-results
   - Verifique se os dados estruturados estão corretos

6. **Teste Mobile-Friendly**
   - https://search.google.com/test/mobile-friendly

7. **Validação de SEO**
   - https://www.seobility.net/
   - Verifique erros e oportunidades de melhoria

---

## 🔧 Configuração do Servidor

### Apache
O arquivo `.htaccess` já está configurado com:
- Redirecionamento HTTPS
- Compressão GZIP
- Cache do navegador
- Headers de segurança

### Nginx
Se usar Nginx, adicione ao arquivo de configuração:

```nginx
# Compressão GZIP
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;

# Cache
location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Redirect HTTP para HTTPS
server {
    listen 80;
    server_name tetrizeps.com.br;
    return 301 https://$server_name$request_uri;
}
```

---

## 📞 Contato

**WhatsApp:** +55 88 99326-9216  
**Localização:** Cariri, Ceará  
**Website:** https://tetrizeps.com.br

---

## 🎯 Palavras-chave de Foco

- Blocos EPS
- Blocos de fechamento
- Isolamento térmico
- Isolamento acústico
- Construção civil Cariri
- Blocos Juazeiro do Norte
- Blocos EPS Ceará
- Parede pronta
- Construção rápida
- Economia na construção

---

**Desenvolvido com foco em SEO e Performance** 🚀
