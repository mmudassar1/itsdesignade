// Main JS - handling navigation, scroll effects, and general interactions.

document.addEventListener('DOMContentLoaded', () => {
    // Lenis Smooth Scroll
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }

    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.top = e.clientY + 'px';
        cursor.style.left = e.clientX + 'px';
    });

    // Add hover effect to interactive elements
    const updateHoverTargets = () => {
        const hoverElements = document.querySelectorAll('a, button, .project-list-item, .portfolio-item-link');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });
    };
    updateHoverTargets();

    // Mobile Navigation
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu a');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isOpened = mobileMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpened);
            document.body.style.overflow = isOpened ? 'hidden' : ''; // Prevent scrolling when menu is open

            // Animate links
            menuLinks.forEach((link, index) => {
                if (isOpened) {
                    link.style.transitionDelay = `${0.1 + (index * 0.1)}s`;
                } else {
                    link.style.transitionDelay = '0s';
                }
            });
        });
    }

    // Close menu when link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Page Transition Logic
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';

    // Fade in on load
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);

    // Fade out on link click
    const internalLinks = document.querySelectorAll('a[href^="./"], a[href^="/"], a[href^="."]:not([href="#"])');
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = link.getAttribute('href');
            // Check if it's an anchor link or same page
            if (!target || target.startsWith('#') || target === '#' || link.getAttribute('target') === '_blank') return;

            e.preventDefault();
            document.body.style.opacity = '0';

            setTimeout(() => {
                window.location.href = target;
            }, 600);
        });
    });

    // Sticky Header Hide/Show on Scroll
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.site-header');

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50) {
                header.style.background = 'rgba(10, 10, 10, 0.9)';
                header.style.backdropFilter = 'blur(10px)';

                // If white theme page, override background
                if (document.body.classList.contains('portfolio-page')) {
                    header.style.background = 'rgba(255, 255, 255, 0.9)';
                }
            } else {
                header.style.background = 'transparent';
                header.style.backdropFilter = 'none';
            }

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }

            lastScrollY = currentScrollY;
        });
    }

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Footer Hero Scroll Animation
    const footerHero = document.querySelector('.footer-hero');
    if (footerHero) {
        window.addEventListener('scroll', () => {
            const footer = document.querySelector('.site-footer');
            if (!footer) return;

            const rect = footer.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate visibility. When top of footer enters viewport, scale starts.
            // We want it to be MAX at the very bottom of the page.

            const distanceToBottom = rect.bottom - viewportHeight;
            // distanceToBottom is 0 when we are at the very end (if footer is at bottom)

            // Let's define the range of effect which is the footer's own height roughly, or window height.
            // As we scroll down, rect.top becomes smaller.

            const startTrigger = viewportHeight; // When footer top is at viewport bottom
            const endTrigger = 0; // When footer bottom is at viewport bottom (roughly) but rect.top is a better metric

            // Let's measure how much of the footer is visible or how close we are to page bottom
            const docHeight = document.documentElement.scrollHeight;
            const scrollPos = window.scrollY + window.innerHeight;
            const distFromBottom = docHeight - scrollPos;

            // Range: 0 (at bottom) to 500 (500px away from bottom)
            const maxMsgDist = 800; // Pixel distance to start animation
            const scaleMin = 0.5;
            const scaleMax = 1.0;

            let progress = 1 - Math.min(distFromBottom / maxMsgDist, 1);
            // progress goes 0 -> 1 as we approach bottom

            // Cubic ease out for nicer feel
            // progress = 1 - Math.pow(1 - progress, 3);

            const scale = scaleMin + ((scaleMax - scaleMin) * progress);

            footerHero.style.transform = `scale(${scale})`;
            footerHero.style.opacity = `${0.5 + (0.5 * progress)}`; // Also fade it in slightly
        }, { passive: true });
    }

    // Hero Title Scroll Animation (Parallax/Zoom)
    const heroTitle = document.querySelector('.hero-title-large');
    if (heroTitle) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            // Only animate if near top
            if (scrollY < window.innerHeight) {
                // Scale DOWN as we scroll down, or UP?
                // "Like footer" (footer scales UP as it appears).
                // Since hero is disappearing, maybe it should scale DOWN/Fade out?
                // Or Zoom IN (luxury feel). Let's Zoom IN and Fade Out.
                const scale = 1 + (scrollY * 0.001); // Subtle zoom in
                const opacity = 1 - (scrollY / 600); // Fade out

                heroTitle.style.transform = `scale(${scale})`;
                heroTitle.style.opacity = Math.max(0, opacity);
            }
        }, { passive: true });
    }
});
