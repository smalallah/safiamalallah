document.addEventListener('DOMContentLoaded', () => {
    // Load Navbar
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        fetch('navbar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                navbarContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading navbar:', error);
                navbarContainer.innerHTML = `
<nav class="custom-navbar">
    <ul class="menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="resources.html">Teach Resources</a></li>
        <li><a href="publications.html">Publication</a></li>
        <li><a href="press.html">Press</a></li>
        <li class="logo-container">
            <img src="assets/images/logo.png" alt="Logo" class="menu-logo">
        </li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="programs.html">Degree Programs</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>`;
            });
    }

    // Load Footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="footer">
                <p>© 2024 INNOKIDS Research Lab. All Rights Reserved.</p>
            </footer>
        `;
    }

    // Initialize Particles Background
    if (typeof particlesJS === 'function') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    }
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    } else {
        console.error('particles.js library is not loaded.');
    }
});
