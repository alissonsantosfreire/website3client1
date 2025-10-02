// Função para abrir o lightbox
function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightbox.style.display = 'block';
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = caption;
    
    // Prevenir scroll do body quando lightbox está aberto
    document.body.style.overflow = 'hidden';
}

// Função para fechar o lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    
    // Restaurar scroll do body
    document.body.style.overflow = 'auto';
}

// Fechar lightbox com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

// Criar animação de 22 tijolos (Hero Section)
function createBricksAnimation() {
    const bricksContainer = document.getElementById('bricks-container');
    if (bricksContainer) {
        // Criar 22 mini tijolos com delay escalonado
        for (let i = 0; i < 22; i++) {
            const brick = document.createElement('div');
            brick.className = 'mini-brick';
            brick.style.animationDelay = `${i * 0.05}s`;
            bricksContainer.appendChild(brick);
        }
    }
}

// Criar animação de 22 tijolos (Seção Sobre)
function createBricksAnimationSobre() {
    const bricksContainer = document.getElementById('bricks-container-sobre');
    if (bricksContainer) {
        // Criar 22 mini tijolos com delay escalonado
        for (let i = 0; i < 22; i++) {
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
