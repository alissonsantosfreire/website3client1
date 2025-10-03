// Array de imagens da galeria
const galleryImages = [];
for (let i = 1; i <= 21; i++) {
    galleryImages.push(`Fotos das obras (${i}).webp`);
}

let currentImageIndex = 0;
let currentZoom = 1;
let touchStartX = 0;
let touchEndX = 0;

// Variáveis para arrastar imagem
let isDragging = false;
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;
let currentTranslateX = 0;
let currentTranslateY = 0;

// Função para abrir o lightbox
function openLightbox(imageSrc) {
    currentImageIndex = galleryImages.indexOf(imageSrc);
    if (currentImageIndex === -1) currentImageIndex = 0;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');
    
    updateLightboxImage();
    lightbox.style.display = 'block';
    
    // Prevenir scroll do body quando lightbox está aberto
    document.body.style.overflow = 'hidden';
    
    // Reset zoom
    currentZoom = 1;
    lightboxImg.style.transform = `scale(${currentZoom})`;
}

// Atualizar imagem do lightbox
function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');
    
    lightboxImg.src = galleryImages[currentImageIndex];
    counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    
    // Reset zoom e posição ao trocar de imagem
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    currentTranslateX = 0;
    currentTranslateY = 0;
    lightboxImg.style.transform = `translate(0px, 0px) scale(${currentZoom})`;
    lightboxImg.style.cursor = 'default';
}

// Navegar para próxima imagem
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
}

// Navegar para imagem anterior
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

// Zoom In
function zoomIn() {
    if (currentZoom < 3) {
        currentZoom += 0.5;
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
        lightboxImg.style.cursor = currentZoom > 1 ? 'grab' : 'default';
    }
}

// Zoom Out
function zoomOut() {
    if (currentZoom > 1) {
        currentZoom -= 0.5;
        const lightboxImg = document.getElementById('lightbox-img');
        
        // Ajustar posição proporcionalmente ao diminuir zoom
        translateX = translateX * 0.7;
        translateY = translateY * 0.7;
        currentTranslateX = translateX;
        currentTranslateY = translateY;
        
        lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
        lightboxImg.style.cursor = currentZoom > 1 ? 'grab' : 'default';
    }
}

// Função para fechar o lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    
    // Restaurar scroll do body
    document.body.style.overflow = 'auto';
    
    // Reset zoom e posição
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    currentTranslateX = 0;
    currentTranslateY = 0;
}

// Eventos de teclado
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'block') {
        switch(event.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                nextImage();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case '+':
            case '=':
                zoomIn();
                break;
            case '-':
            case '_':
                zoomOut();
                break;
        }
    }
});

// Gestos touch para mobile
function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
    
    // Se tiver zoom, permitir arrastar
    if (currentZoom > 1) {
        isDragging = true;
        startX = e.changedTouches[0].clientX - translateX;
        startY = e.changedTouches[0].clientY - translateY;
        e.preventDefault();
    }
}

function handleTouchMove(e) {
    if (!isDragging || currentZoom <= 1) return;
    
    e.preventDefault();
    const currentX = e.changedTouches[0].clientX;
    const currentY = e.changedTouches[0].clientY;
    
    translateX = currentX - startX;
    translateY = currentY - startY;
    
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    
    if (isDragging) {
        isDragging = false;
        currentTranslateX = translateX;
        currentTranslateY = translateY;
    } else if (currentZoom <= 1) {
        // Apenas navegar entre imagens se não tiver zoom
        handleSwipe();
    }
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - próxima imagem
            nextImage();
        } else {
            // Swipe right - imagem anterior
            prevImage();
        }
    }
}

// Funções para arrastar com mouse (Desktop)
function handleMouseDown(e) {
    if (currentZoom > 1) {
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.style.cursor = 'grabbing';
        e.preventDefault();
    }
}

function handleMouseMove(e) {
    if (!isDragging || currentZoom <= 1) return;
    
    e.preventDefault();
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
}

function handleMouseUp(e) {
    if (isDragging) {
        isDragging = false;
        currentTranslateX = translateX;
        currentTranslateY = translateY;
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.style.cursor = currentZoom > 1 ? 'grab' : 'default';
    }
}

function handleMouseLeave(e) {
    if (isDragging) {
        isDragging = false;
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.style.cursor = currentZoom > 1 ? 'grab' : 'default';
    }
}

// Criar animação de 13 tijolos (Hero Section)
function createBricksAnimation() {
    const bricksContainer = document.getElementById('bricks-container');
    if (bricksContainer) {
        // Criar 13 mini tijolos com delay escalonado
        for (let i = 0; i < 13; i++) {
            const brick = document.createElement('div');
            brick.className = 'mini-brick';
            brick.style.animationDelay = `${i * 0.05}s`;
            bricksContainer.appendChild(brick);
        }
    }
}

// Criar animação de 13 tijolos (Seção Sobre)
function createBricksAnimationSobre() {
    const bricksContainer = document.getElementById('bricks-container-sobre');
    if (bricksContainer) {
        // Criar 13 mini tijolos com delay escalonado
        for (let i = 0; i < 13; i++) {
            const brick = document.createElement('div');
            brick.className = 'mini-brick-sobre';
            brick.style.animationDelay = `${i * 0.05}s`;
            bricksContainer.appendChild(brick);
        }
    }
}

// Prevenir que o clique na imagem feche o lightbox
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animações de tijolos
    createBricksAnimation(); // Hero section
    createBricksAnimationSobre(); // Seção Sobre
    
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightboxImg) {
        lightboxImg.addEventListener('click', function(event) {
            event.stopPropagation();
        });
        
        // Eventos de touch para mobile (swipe e arrastar)
        lightboxImg.addEventListener('touchstart', handleTouchStart, { passive: false });
        lightboxImg.addEventListener('touchmove', handleTouchMove, { passive: false });
        lightboxImg.addEventListener('touchend', handleTouchEnd, false);
        
        // Eventos de mouse para desktop (arrastar)
        lightboxImg.addEventListener('mousedown', handleMouseDown);
        lightboxImg.addEventListener('mousemove', handleMouseMove);
        lightboxImg.addEventListener('mouseup', handleMouseUp);
        lightboxImg.addEventListener('mouseleave', handleMouseLeave);
    }

    // Menu Mobile Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            hamburgerIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    // Fechar menu mobile ao clicar em um link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Adicionar classe ao scroll para mudar aparência do header
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('shadow-xl');
        } else {
            header.classList.remove('shadow-xl');
        }
        
        lastScroll = currentScroll;
    });
});

(function(){
    function c(){
        var b=a.contentDocument||a.contentWindow.document;
        if(b){
            var d=b.createElement('script');
            d.innerHTML="window.__CF$cv$params={r:'98849f97237ecaee',t:'MTc1OTQxMjU1MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d)
        }
    }
    if(document.body){
        var a=document.createElement('iframe');
        a.height=1;
        a.width=1;
        a.style.position='absolute';
        a.style.top=0;
        a.style.left=0;
        a.style.border='none';
        a.style.visibility='hidden';
        document.body.appendChild(a);
        if('loading'!==document.readyState)c();
        else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);
        else{
            var e=document.onreadystatechange||function(){};
            document.onreadystatechange=function(b){
                e(b);
                'loading'!==document.readyState&&(document.onreadystatechange=e,c())
            }
        }
    }
})();
