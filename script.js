// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.mobile-menu');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const skillsRain1 = document.querySelector('.skills-rain');
const riverFlow2= document.querySelector('.river-flow');
const shootingStarsContainer = document.querySelector('.shooting-stars');
const starsBackground = document.querySelector('.stars-background');
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const cursorTrail = document.querySelector('.cursor-trail');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!mobileMenu.contains(e.target) && !navToggle.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = '';
        }
    }
});

// Handle mobile menu link clicks
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        if (window.innerWidth <= 768) {
            mobileMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = '';
        }
        
        // Add small delay before scrolling to section
        setTimeout(() => {
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    });
});

// Add scroll event listener for navbar background
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = '';
    }
});

// Section Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        
        // Update active states
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Close mobile navigation
        if (window.innerWidth <= 768) {
            mobileMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Skills Animation
document.addEventListener('DOMContentLoaded', function() {
    // Skills data with sub-skills
    const skillsData = [
        {
            name: 'Frontend',
            icon: '💻',
            subSkills: ['React', 'Vue', 'Angular', 'HTML5', 'CSS3', 'JavaScript'],
            color: '#4facfe'
        },
        {
            name: 'Backend',
            icon: '🖥️',
            subSkills: ['Node.js', 'Python', 'Java', 'PHP', 'Express', 'Django'],
            color: '#00f2fe'
        },
        {
            name: 'Database',
            icon: '🗄️',
            subSkills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'GraphQL'],
            color: '#43e97b'
        },
        {
            name: 'DevOps',
            icon: '⚙️',
            subSkills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform', 'Azure'],
            color: '#fa709a'
        }
    ];

    const container = document.querySelector('.skills-section'); // Changed container class
    container.innerHTML = `
        ${skillsData.map(skill => `
            <div class="skill-card" style="--accent-color: ${skill.color}">
                <div class="skill-main">
                    <span class="skill-icon">${skill.icon}</span>
                    <h3>${skill.name}</h3>
                    <div class="skill-arrow">▼</div>
                </div>
                <div class="sub-skills">
                    ${skill.subSkills.map(sub => `
                        <span class="sub-skill">${sub}</span>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    `;

    // Toggle sub-skills on click (mobile friendly)
    const skillCards = container.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        const arrow = card.querySelector('.skill-arrow');
        const subSkills = card.querySelector('.sub-skills');
        
        card.addEventListener('click', function() {
            const isOpen = subSkills.style.display === 'flex';
            subSkills.style.display = isOpen ? 'none' : 'flex';
            arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        });
        
        // Hover effects for desktop
        card.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                subSkills.style.display = 'flex';
                arrow.style.transform = 'rotate(180deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                subSkills.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .skills-section {
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
            justify-content: center;
            max-width: 1200px;
            margin: 3rem auto;
            padding: 0 20px;
        }
        
        .skill-card {
            background: rgba(40, 40, 50, 0.8);
            border-radius: 12px;
            min-width: 220px;
            flex: 1;
            border-left: 5px solid var(--accent-color);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            cursor: pointer;
            overflow: hidden;
        }
        
        .skill-main {
            padding: 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            position: relative;
        }
        
        .skill-icon {
            font-size: 2.5rem;
        }
        
        .skill-card h3 {
            margin: 0;
            color: white;
            font-size: 1.3rem;
            text-align: center;
        }
        
        .skill-arrow {
            color: var(--accent-color);
            font-size: 1.2rem;
            transition: transform 0.3s ease;
        }
        
        .sub-skills {
            display: none;
            flex-wrap: wrap;
            gap: 10px;
            padding: 0 25px 25px;
            justify-content: center;
        }
        
        .sub-skill {
            background: rgba(255,255,255,0.1);
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            color: #e0e0e0;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        
        @media (max-width: 768px) {
            .skills-section {
                flex-direction: column;
                align-items: center;
            }
            
            .skill-card {
                width: 100%;
                max-width: 300px;
            }
        }
    `;
    document.head.appendChild(style);
});
//hearo
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentIndex = 0;
    let autoSlideInterval;
    let isAnimating = false;
    const slideCount = slides.length;
    const animationDuration = 1200; // Match CSS transition duration
    
    // Initialize slider
    function initSlider() {
        updateSliderPosition();
        startAutoSlide();
        
        // Set up event listeners
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                if (isAnimating) return;
                const index = parseInt(this.getAttribute('data-index'));
                goToSlide(index);
            });
        });
        
        arrowLeft.addEventListener('click', () => {
            if (isAnimating) return;
            prevSlide();
        });
        
        arrowRight.addEventListener('click', () => {
            if (isAnimating) return;
            nextSlide();
        });
        
        // Pause autoslide on hover/touch
        slider.addEventListener('mouseenter', pauseAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
        slider.addEventListener('touchstart', pauseAutoSlide);
        slider.addEventListener('touchend', startAutoSlide);
    }
    
    // Update slider position
    function updateSliderPosition() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            
            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === (currentIndex + 1) % slideCount) {
                slide.classList.add('next');
            } else if (index === (currentIndex - 1 + slideCount) % slideCount) {
                slide.classList.add('prev');
            }
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        if (index === currentIndex) return;
        
        isAnimating = true;
        currentIndex = index;
        updateSliderPosition();
        
        setTimeout(() => {
            isAnimating = false;
        }, animationDuration);
        
        resetAutoSlide();
    }
    
    // Next slide
    function nextSlide() {
        isAnimating = true;
        currentIndex = (currentIndex + 1) % slideCount;
        updateSliderPosition();
        
        setTimeout(() => {
            isAnimating = false;
        }, animationDuration);
        
        resetAutoSlide();
    }
    
    // Previous slide
    function prevSlide() {
        isAnimating = true;
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSliderPosition();
        
        setTimeout(() => {
            isAnimating = false;
        }, animationDuration);
        
        resetAutoSlide();
    }
    
    // Auto slide functionality
    function startAutoSlide() {
        if (!autoSlideInterval && slideCount > 1) {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
    }
    
    function pauseAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
    
    function resetAutoSlide() {
        pauseAutoSlide();
        startAutoSlide();
    }
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    slider.addEventListener('touchend', (e) => {
        if (isAnimating) return;
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        const difference = touchEndX - touchStartX;
        
        if (difference < -swipeThreshold) {
            nextSlide();
        } else if (difference > swipeThreshold) {
            prevSlide();
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (isAnimating) return;
        
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // Initialize everything
    initSlider();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Adjust slider height if needed
        const hero = document.querySelector('.hero');
        hero.style.height = window.innerHeight + 'px';
    });
});
//mouse animation

document.addEventListener('DOMContentLoaded', function() {
    // Cursor elements
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    // Only proceed if cursor elements exist
    if (!cursorDot || !cursorOutline || !cursorTrail) return;
    
    // Mouse position
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    let trailX = 0, trailY = 0;
    const delay = 0.1; // Adjust for smoother/faster follow
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Initialize cursor position
    function initCursor() {
        // Hide default cursor
        document.body.style.cursor = 'none';
        
        // Position cursor elements
        positionCursorElements();
        
        // Add event listeners
        document.addEventListener('mousemove', handleMouseMove);
        
        // Interactive elements
        const interactiveElements = [
            'a', 'button', 'input', 'textarea', 'select', 
            '.interactive', '.clickable', 'label', '[role="button"]'
        ];
        
        interactiveElements.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.addEventListener('mouseenter', handleElementHover);
                el.addEventListener('mouseleave', handleElementLeave);
                el.addEventListener('click', handleElementClick);
            });
        });
        
        // Disable on touch devices
        if ('ontouchstart' in window || navigator.maxTouchPoints) {
            document.body.style.cursor = '';
            cursorDot.style.display = 'none';
            cursorOutline.style.display = 'none';
            cursorTrail.style.display = 'none';
            return;
        }
        
        // Animation frame
        if (!prefersReducedMotion) {
            requestAnimationFrame(animateCursor);
        } else {
            // Simplified cursor for reduced motion preference
            cursorOutline.style.display = 'none';
            cursorTrail.style.display = 'none';
        }
    }
    
    // Handle mouse movement
    function handleMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    
    // Position cursor elements
    function positionCursorElements() {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
        
        if (!prefersReducedMotion) {
            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;
            
            cursorTrail.style.left = `${trailX}px`;
            cursorTrail.style.top = `${trailY}px`;
        }
    }
    
    // Animate cursor elements
    function animateCursor() {
        // Dot follows immediately
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        
        if (!prefersReducedMotion) {
            // Outline follows with slight delay
            outlineX += (mouseX - outlineX) * delay;
            outlineY += (mouseY - outlineY) * delay;
            cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
            
            // Trail follows with more delay
            trailX += (mouseX - trailX) * (delay * 0.5);
            trailY += (mouseY - trailY) * (delay * 0.5);
            cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px)`;
        }
        
        requestAnimationFrame(animateCursor);
    }
    
    // Handle hover state
    function handleElementHover(e) {
        const target = e.currentTarget;
        const isClickable = target.tagName === 'A' || target.tagName === 'BUTTON' || 
                          target.getAttribute('role') === 'button';
        
        cursorDot.classList.add('hover');
        if (!prefersReducedMotion) {
            cursorOutline.classList.add('hover');
            cursorTrail.classList.add('hover');
        }
        
        if (isClickable) {
            cursorDot.classList.add('clickable');
            if (!prefersReducedMotion) {
                cursorOutline.classList.add('clickable');
            }
        }
    }
    
    // Handle leave state
    function handleElementLeave() {
        cursorDot.classList.remove('hover', 'clickable');
        if (!prefersReducedMotion) {
            cursorOutline.classList.remove('hover', 'clickable');
            cursorTrail.classList.remove('hover');
        }
    }
    
    // Handle click animation
    function handleElementClick() {
        cursorDot.classList.add('click');
        if (!prefersReducedMotion) {
            cursorOutline.classList.add('click');
        }
        
        setTimeout(() => {
            cursorDot.classList.remove('click');
            if (!prefersReducedMotion) {
                cursorOutline.classList.remove('click');
            }
        }, 300);
    }
    
    // Initialize cursor
    initCursor();
});

//all sextions manager
document.addEventListener('DOMContentLoaded', function() {
    // 1. SECTION MANAGEMENT =============================================
    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
            section.classList.remove('active');
        });
        
        // Show requested section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
            
            // Trigger animations for the new section
            triggerSectionAnimations(sectionId);
        }
        
        // Update navigation active states
        updateActiveNav(sectionId);
        
        // Close mobile menu if open
        closeMobileMenu();
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateActiveNav(sectionId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    function closeMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
        }
    }

    function triggerSectionAnimations(sectionId) {
        switch(sectionId) {
            case 'home':
                initHomeAnimations();
                break;
            case 'projects':
                initProjectAnimations();
                break;
            case 'services':
                initServiceAnimations();
                break;
            case 'about':
                initAboutAnimations();
                break;
            case 'contact':
                initContactAnimations();
                break;
        }
    }

    // 2. NAVIGATION SETUP ==============================================
    // Main navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href').substring(1);
            showSection(targetSection);
        });
    });

    // Home section buttons
    document.querySelector('.btn-primary')?.addEventListener('click', function(e) {
        e.preventDefault();
        showSection('projects');
    });

    document.querySelector('.btn-outline')?.addEventListener('click', function(e) {
        e.preventDefault();
        showSection('contact');
    });

    // Mobile menu toggle
    document.querySelector('.nav-toggle')?.addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.toggle('open');
    });

    // 3. HORIZONTAL SCROLLER ===========================================
    const initHorizontalScroller = () => {
        const scroller = document.querySelector('.horizontal-scroller');
        if (!scroller) return;

        const leftArrow = document.querySelector('.nav-arrow.left');
        const rightArrow = document.querySelector('.nav-arrow.right');
        
        // Arrow navigation
        leftArrow?.addEventListener('click', () => {
            scroller.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        rightArrow?.addEventListener('click', () => {
            scroller.scrollBy({ left: 300, behavior: 'smooth' });
        });
        
        // Drag to scroll
        let isDown = false;
        let startX, scrollLeft;
        
        scroller.addEventListener('mousedown', (e) => {
            isDown = true;
            scroller.style.cursor = 'grabbing';
            startX = e.pageX - scroller.offsetLeft;
            scrollLeft = scroller.scrollLeft;
        });
        
        scroller.addEventListener('mouseleave', () => {
            isDown = false;
            scroller.style.cursor = 'grab';
        });
        
        scroller.addEventListener('mouseup', () => {
            isDown = false;
            scroller.style.cursor = 'grab';
        });
        
        scroller.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - scroller.offsetLeft;
            const walk = (x - startX) * 2;
            scroller.scrollLeft = scrollLeft - walk;
        });
        
        // Touch support
        scroller.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - scroller.offsetLeft;
            scrollLeft = scroller.scrollLeft;
        }, { passive: true });
        
        scroller.addEventListener('touchend', () => {
            isDown = false;
        });
        
        scroller.addEventListener('touchmove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - scroller.offsetLeft;
            const walk = (x - startX) * 2;
            scroller.scrollLeft = scrollLeft - walk;
        }, { passive: false });
    };

    // 4. ANIMATION INITIALIZERS ========================================
    function initHomeAnimations() {
        // Typewriter effect
        const typewriter = document.querySelector('.typewriter');
        if (typewriter) {
            const text = typewriter.textContent;
            typewriter.textContent = '';
            let charIndex = 0;
            
            function typeText() {
                if (charIndex < text.length) {
                    typewriter.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeText, 100);
                }
            }
            setTimeout(typeText, 1000);
        }
        
        // Initialize horizontal scroller
        initHorizontalScroller();
        
        // Lazy loading for images
        const lazyLoadImages = () => {
            const lazyImages = document.querySelectorAll('.image-card img[loading="lazy"]');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.getAttribute('src');
                        img.onload = () => {
                            img.parentElement.classList.add('loaded');
                        };
                        observer.unobserve(img);
                    }
                });
            });
            lazyImages.forEach(img => observer.observe(img));
        };
        lazyLoadImages();
    }

    function initProjectAnimations() {
        // Add project card animations
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }

    function initServiceAnimations() {
        // Add service card animations
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 150 * index);
        });
    }

    function initAboutAnimations() {
        // Add about section animations
        const aboutElements = document.querySelectorAll('#about .animate-on-load');
        aboutElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateX(-20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateX(0)';
            }, 100 * index);
        });
    }

    function initContactAnimations() {
        // Add contact form animations
        const formElements = document.querySelectorAll('#contact .form-group');
        formElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }

    // 5. FORM HANDLING =================================================
    document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted successfully!');
        this.reset();
    });

    // 6. INITIAL SETUP =================================================
    // Show home section by default
    showSection('home');
    
    // Initialize any global animations
    // Add any other initialization code here
});
//writeclick disable
document.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Prevent the default right-click menu
   // Show a custom message or menu
});


