document.addEventListener('DOMContentLoaded', () => {
    // Inizializza icone Lucide
    lucide.createIcons();

    // Effetto scroll per l'header
    const header = document.querySelector('#header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });
    /* --- THREE.JS HERO ANIMATION --- */
function initThreeJS() {
    const container = document.getElementById('three-canvas-container');
    if (!container) return;

    const scene = new THREE.Scene();
    // Colore di sfondo leggermente visibile dentro il frame
    scene.background = new THREE.Color(0x0a0a0a); 

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Creazione della geometria (Icosaedro Wireframe)
    const geometry = new THREE.IcosahedronGeometry(2, 1); // Raggio 2, Dettaglio 1
    const material = new THREE.MeshBasicMaterial({ 
        color: 0xc4ff00, // Colore primario (Neon Lime)
        wireframe: true,
        transparent: true,
        opacity: 0.8
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Variabili per l'interazione col mouse
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = container.clientWidth / 2;
    const windowHalfY = container.clientHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Funzione di animazione
    function animate() {
        requestAnimationFrame(animate);

        // Rotazione base costante
        cube.rotation.x += 0.002;
        cube.rotation.y += 0.003;

        // Rotazione influenzata dal mouse (con easing)
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;
        
        cube.rotation.y += 0.05 * (targetX - cube.rotation.y);
        cube.rotation.x += 0.05 * (targetY - cube.rotation.x);

        renderer.render(scene, camera);
    }

    animate();

    // Gestione del resize della finestra
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
}

// Avvia Three.js quando il DOM è pronto
    document.addEventListener('DOMContentLoaded', initThreeJS);
    // Внутри document.addEventListener('DOMContentLoaded', () => { ...
AOS.init({
    duration: 800,
    once: true,
    offset: 50
});
});