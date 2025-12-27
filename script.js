// NakamaMesh Website JavaScript

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.problem-card, .earn-card, .community-card, .roadmap-phase').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Copy contract address to clipboard
document.addEventListener('DOMContentLoaded', () => {
    const contractAddress = document.querySelector('.token-address code');
    if (contractAddress) {
        contractAddress.style.cursor = 'pointer';
        contractAddress.addEventListener('click', () => {
            navigator.clipboard.writeText(contractAddress.textContent);
            
            // Visual feedback
            const originalText = contractAddress.textContent;
            contractAddress.textContent = 'Copied!';
            contractAddress.style.color = '#00D9FF';
            
            setTimeout(() => {
                contractAddress.textContent = originalText;
                contractAddress.style.color = '';
            }, 2000);
        });
    }
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add active class to roadmap phases on scroll
const roadmapPhases = document.querySelectorAll('.roadmap-phase');
const roadmapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active from all
            roadmapPhases.forEach(phase => phase.classList.remove('active'));
            // Add to current
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

roadmapPhases.forEach(phase => roadmapObserver.observe(phase));

// Animated counter for token supply (if visible)
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Trigger counter animation when tokenomics section is visible
const tokenValue = document.querySelector('.token-value');
if (tokenValue && tokenValue.textContent.includes('Billion')) {
    const tokenObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Already displays "100 Billion" - just add emphasis
                entry.target.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    entry.target.style.transform = 'scale(1)';
                }, 500);
                tokenObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    tokenObserver.observe(tokenValue);
}

console.log('🚀 NakamaMesh - Unstoppable Communication');
console.log('📱 Download: https://nakamamesh.network');
console.log('💬 Community: https://t.me/nakamamesh');
console.log('💻 GitHub: https://github.com/nakamamesh');
