## Estrutura de Imagens

A pasta `public/images` contém todas as imagens do site, organizadas da seguinte forma:

### /public/images/hero
- Imagens para o banner principal (hero)
- Tamanho recomendado: 1920x1080px
- Formato: JPG/JPEG
- Nome sugerido: `hero-background.jpg`

### /public/images/biography
- Fotos para a seção biografia
- Tamanho recomendado: 800x1200px
- Formato: JPG/JPEG
- Nome sugerido: `bio-photo.jpg`

### /public/images/releases
- Capas dos álbuns e singles
- Tamanho recomendado: 1000x1000px
- Formato: JPG/JPEG
- Estrutura de nomes sugerida:
  - `alma-brasileira-cover.jpg`
  - `essencia-cover.jpg`
  - `raizes-cover.jpg`
- Para vídeos:
  - `alma-brasileira-video1.jpg`
  - `alma-brasileira-video2.jpg`
  etc.

### /public/images/shows
- Fotos de shows e apresentações
- Tamanho recomendado: 1200x800px
- Formato: JPG/JPEG
- Nome sugerido: `show-[local]-[data].jpg`

Após adicionar as imagens, atualize os caminhos no código substituindo as URLs do Unsplash por:

```typescript
// Para imagens do hero
backgroundImage="/images/hero/hero-background.jpg"

// Para imagens de biografia
image="/images/biography/bio-photo.jpg"

// Para capas de álbuns
cover="/images/releases/alma-brasileira-cover.jpg"

// Para thumbnails de vídeos
thumbnail="/images/releases/alma-brasileira-video1.jpg"
```