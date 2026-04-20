import { connect } from "cloudflare:sockets";

const scriptConfig = {
  ROOT_DOMAIN: "jak.biz.id",
  SERVICE_NAME: "joss",
  API_KEY: "6666",
  API_EMAIL: "desalekong24@gmail.com",
  ACCOUNT_ID: "6666",
  ZONE_ID: "6666",
  OWNER_PASSWORD: "7",
  CLOUDFLARE_API_TOKEN: "6666",
};

const proxyListURL = 'https://raw.githubusercontent.com/paoandest/botak/refs/heads/main/cek/proxyList.txt';
const namaWeb = 'GEO PROJECT'
const telegrambot = 'https://t.me/VLTRSSbot'
const channelku = 'https://t.me/testikuy_mang'
const telegramku = 'https://geoproject.biz.id/circle-flags/telegram.png'
const whatsappku = 'https://geoproject.biz.id/circle-flags/whatsapp.png'
const ope = 'https://geoproject.biz.id/circle-flags/options.png'

// Bootstrap dan CSS yang dipercantik
const BOOTSTRAP_STYLES = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

<style>
    :root {
        --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        --success-gradient: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
        --danger-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        --warning-gradient: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        --dark-bg: #0f0f1a;
        --card-bg: rgba(255, 255, 255, 0.05);
        --border-glow: rgba(102, 126, 234, 0.3);
    }

    * {
        font-family: 'Inter', sans-serif;
    }

    body {
        background: var(--dark-bg);
        color: #ffffff;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
    }

    canvas.webgl {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    /* Animated Background */
    .animated-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        background: linear-gradient(125deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%);
    }

    .animated-bg::before {
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
        animation: rotate 20s linear infinite;
    }

    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    /* Floating particles */
    .particles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
    }

    .particle {
        position: absolute;
        background: rgba(102, 126, 234, 0.3);
        border-radius: 50%;
        animation: float 15s infinite ease-in-out;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 0.5; }
        90% { opacity: 0.5; }
        100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
    }

    /* Glassmorphism Card */
    .glass-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }

    .glass-card:hover {
        transform: translateY(-5px);
        border-color: rgba(102, 126, 234, 0.5);
        box-shadow: 0 10px 40px rgba(102, 126, 234, 0.2);
    }

    /* Gradient Buttons */
    .btn-gradient {
        background: var(--primary-gradient);
        border: none;
        padding: 12px 30px;
        border-radius: 50px;
        font-weight: 600;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .btn-gradient:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
    }

    .btn-gradient::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
    }

    .btn-gradient:hover::before {
        width: 300px;
        height: 300px;
    }

    /* Form Controls */
    .form-control-glow {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 12px 20px;
        color: white;
        transition: all 0.3s ease;
    }

    .form-control-glow:focus {
        background: rgba(255, 255, 255, 0.1);
        border-color: #667eea;
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
        color: white;
        outline: none;
    }

    .form-control-glow::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }

    /* Table Styling */
    .table-glow {
        background: rgba(255, 255, 255, 0.03);
        border-radius: 16px;
        overflow: hidden;
    }

    .table-glow thead th {
        background: rgba(102, 126, 234, 0.2);
        border-bottom: 1px solid rgba(102, 126, 234, 0.3);
        padding: 15px;
        font-weight: 600;
    }

    .table-glow tbody tr {
        transition: all 0.3s ease;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .table-glow tbody tr:hover {
        background: rgba(102, 126, 234, 0.1);
        transform: scale(1.01);
    }

    .table-glow td {
        padding: 12px 15px;
        vertical-align: middle;
    }

    /* Badge Styles */
    .badge-glow {
        background: linear-gradient(135deg, #667eea, #764ba2);
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .badge-success {
        background: linear-gradient(135deg, #11998e, #38ef7d);
    }

    .badge-danger {
        background: linear-gradient(135deg, #f093fb, #f5576c);
    }

    /* Pagination */
    .pagination-glow .page-item .page-link {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: white;
        margin: 0 5px;
        border-radius: 10px;
        transition: all 0.3s ease;
    }

    .pagination-glow .page-item.active .page-link {
        background: var(--primary-gradient);
        border-color: #667eea;
    }

    .pagination-glow .page-item .page-link:hover {
        background: rgba(102, 126, 234, 0.3);
        transform: translateY(-2px);
    }

    /* Loading Spinner */
    .spinner-glow {
        width: 3rem;
        height: 3rem;
        border: 0.25em solid rgba(102, 126, 234, 0.2);
        border-right-color: #667eea;
        border-radius: 50%;
        animation: spinner 0.75s linear infinite;
    }

    @keyframes spinner {
        to { transform: rotate(360deg); }
    }

    /* Scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 10px;
    }

    /* Animations */
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Status Badge */
    .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .status-active {
        background: rgba(56, 239, 125, 0.2);
        color: #38ef7d;
        border: 1px solid rgba(56, 239, 125, 0.3);
    }

    .status-dead {
        background: rgba(245, 87, 108, 0.2);
        color: #f5576c;
        border: 1px solid rgba(245, 87, 108, 0.3);
    }

    .delay-badge {
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.6);
        margin-left: 5px;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .glass-card {
            margin: 10px;
            padding: 15px;
        }

        .table-glow {
            font-size: 0.8rem;
        }

        .table-glow td, .table-glow th {
            padding: 8px 10px;
        }
    }

    /* Container utama */
    .main-container {
        position: relative;
        z-index: 1;
        min-height: 100vh;
    }

    /* Toggle Switch */
    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 24px;
    }

    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 24px;
    }

    .toggle-slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }

    input:checked + .toggle-slider {
        background: linear-gradient(135deg, #667eea, #764ba2);
    }

    input:checked + .toggle-slider:before {
        transform: translateX(26px);
    }
</style>
`;

const GALAXY_ANIMATION_COMPONENT = `
${BOOTSTRAP_STYLES}

<div class="animated-bg"></div>
<div class="particles" id="particles"></div>

<script>
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = 10 + Math.random() * 10 + 's';
            particlesContainer.appendChild(particle);
        }
    }
    document.addEventListener('DOMContentLoaded', createParticles);
</script>

<div class="control-button glass-card" id="controlButton" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;">
    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
        <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
    </svg>
</div>

<div class="color-controls glass-card" id="colorControls" style="position: fixed; bottom: 80px; right: 20px; width: 340px; max-height: 80vh; overflow-y: auto; z-index: 999; display: none; padding: 20px;">
    <h3 style="margin-bottom: 20px; font-size: 1.2rem; font-weight: 600;">Galaxy Controls</h3>

    <div class="control-section" style="margin-bottom: 20px;">
        <div class="section-title" style="margin-bottom: 10px; font-weight: 600; font-size: 0.9rem;">🎨 Colors</div>

        <div class="control-group" style="margin-bottom: 12px;">
            <label style="display: block; margin-bottom: 5px; font-size: 0.85rem;">Inside Color</label>
            <div style="display: flex; gap: 10px;">
                <input type="color" id="insideColor" value="#ff6030" style="width: 50px; height: 35px; border-radius: 8px; border: none; cursor: pointer;">
                <input type="text" id="insideColorText" value="#ff6030" class="form-control form-control-sm" style="flex: 1; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; padding: 5px 10px; color: white;">
            </div>
        </div>

        <div class="control-group" style="margin-bottom: 12px;">
            <label style="display: block; margin-bottom: 5px; font-size: 0.85rem;">Outside Color</label>
            <div style="display: flex; gap: 10px;">
                <input type="color" id="outsideColor" value="#0949f0" style="width: 50px; height: 35px; border-radius: 8px; border: none; cursor: pointer;">
                <input type="text" id="outsideColorText" value="#0949f0" class="form-control form-control-sm" style="flex: 1; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; padding: 5px 10px; color: white;">
            </div>
        </div>
    </div>

    <div class="control-section" style="margin-bottom: 20px;">
        <div class="section-title" style="margin-bottom: 10px; font-weight: 600; font-size: 0.9rem;">✨ Particles</div>

        <div class="control-group" style="margin-bottom: 12px;">
            <label style="display: block; margin-bottom: 5px; font-size: 0.85rem;">Particle Size: <span id="sizeValue" style="color: #667eea;">0.01</span></label>
            <input type="range" id="particleSize" min="0.001" max="0.05" step="0.001" value="0.01" class="form-range" style="width: 100%;">
        </div>

        <div class="control-group" style="margin-bottom: 12px;">
            <label style="display: block; margin-bottom: 5px; font-size: 0.85rem;">Particle Count: <span id="countValue" style="color: #667eea;">100000</span></label>
            <input type="range" id="particleCount" min="10000" max="500000" step="10000" value="100000" class="form-range" style="width: 100%;">
        </div>
    </div>

    <div class="control-section" style="margin-bottom: 20px;">
        <div class="section-title" style="margin-bottom: 10px; font-weight: 600; font-size: 0.9rem;">🌀 Animation</div>

        <div class="control-group" style="margin-bottom: 12px;">
            <label style="display: block; margin-bottom: 5px; font-size: 0.85rem;">Spin Factor: <span id="spinValue" style="color: #667eea;">3</span></label>
            <input type="range" id="spinFactor" min="0.1" max="10" step="0.1" value="3" class="form-range" style="width: 100%;">
        </div>

        <div class="control-group" style="margin-bottom: 12px;">
            <label style="display: block; margin-bottom: 5px; font-size: 0.85rem;">Branches: <span id="branchesValue" style="color: #667eea;">3</span></label>
            <input type="range" id="branches" min="1" max="8" step="1" value="3" class="form-range" style="width: 100%;">
        </div>

        <div class="control-group" style="margin-bottom: 12px;">
            <label style="display: block; margin-bottom: 5px; font-size: 0.85rem;">Randomness: <span id="randomnessValue" style="color: #667eea;">5</span></label>
            <input type="range" id="randomness" min="0.1" max="10" step="0.1" value="5" class="form-range" style="width: 100%;">
        </div>
    </div>

    <div class="control-section" style="margin-bottom: 20px;">
        <div class="section-title" style="margin-bottom: 10px; font-weight: 600; font-size: 0.9rem;">⚙️ Controls</div>

        <div class="control-group" style="margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <label style="font-size: 0.85rem;">Auto Rotation</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="autoRotate" checked>
                    <span class="toggle-slider"></span>
                </label>
            </div>
        </div>

        <div class="control-group" style="margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <label style="font-size: 0.85rem;">Orbit Controls</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="orbitControls">
                    <span class="toggle-slider"></span>
                </label>
            </div>
        </div>
    </div>

    <div class="control-section" style="margin-bottom: 20px;">
        <div class="section-title" style="margin-bottom: 10px; font-weight: 600; font-size: 0.9rem;">🎯 Presets</div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
            <button class="preset-btn btn btn-sm" data-preset="fire" style="background: linear-gradient(135deg, #ff3300, #ff9900); border: none; color: white; padding: 6px 12px; border-radius: 8px;">Fire Galaxy</button>
            <button class="preset-btn btn btn-sm" data-preset="ice" style="background: linear-gradient(135deg, #00ccff, #0066ff); border: none; color: white; padding: 6px 12px; border-radius: 8px;">Ice Galaxy</button>
            <button class="preset-btn btn btn-sm" data-preset="nebula" style="background: linear-gradient(135deg, #9900ff, #ff00cc); border: none; color: white; padding: 6px 12px; border-radius: 8px;">Nebula</button>
            <button class="preset-btn btn btn-sm" data-preset="sunset" style="background: linear-gradient(135deg, #ff6600, #ff0066); border: none; color: white; padding: 6px 12px; border-radius: 8px;">Sunset</button>
            <button class="preset-btn btn btn-sm" data-preset="ocean" style="background: linear-gradient(135deg, #00ffff, #0066cc); border: none; color: white; padding: 6px 12px; border-radius: 8px;">Ocean</button>
            <button class="preset-btn btn btn-sm" data-preset="forest" style="background: linear-gradient(135deg, #00ff99, #009933); border: none; color: white; padding: 6px 12px; border-radius: 8px;">Forest</button>
        </div>
    </div>

    <button class="reset-btn btn btn-danger w-100" id="resetBtn" style="border-radius: 10px; padding: 10px;">Reset to Default</button>
</div>

<script type="module">
    const setVH = () => {
        const vh = (window.visualViewport ? window.visualViewport.height : window.innerHeight) * 0.01;
        document.documentElement.style.setProperty('--app-vh', vh + 'px');
    };
    setVH();
    addEventListener('resize', setVH, { passive: true });
    addEventListener('orientationchange', setVH, { passive: true });
    window.visualViewport && window.visualViewport.addEventListener('resize', setVH, { passive: true });

    import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
    import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

    let canvas = document.querySelector('canvas.webgl');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.className = 'webgl';
        document.body.appendChild(canvas);
    }

    const scene = new THREE.Scene();

    const defaultParameters = {
        count: 100000,
        size: 0.01,
        radius: 2.15,
        branches: 3,
        spin: 3,
        randomness: 5,
        randomnessPower: 4,
        insideColor: '#ff6030',
        outsideColor: '#0949f0',
        autoRotate: true,
        orbitControls: false
    };

    let parameters = JSON.parse(localStorage.getItem('galaxyParameters')) || {...defaultParameters};

    let material, geometry, points;
    function generateGalaxy() {
        if (points) { geometry.dispose(); material.dispose(); scene.remove(points); }
        material = new THREE.PointsMaterial({
            size: parameters.size, sizeAttenuation: true,
            depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true
        });
        geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(parameters.count * 3);
        const colors = new Float32Array(parameters.count * 3);
        const colorInside = new THREE.Color(parameters.insideColor);
        const colorOutside = new THREE.Color(parameters.outsideColor);

        for (let i = 0; i < parameters.count; i++) {
            const i3 = i * 3;
            const radius = Math.pow(Math.random() * parameters.randomness, Math.random() * parameters.radius);
            const spinAngle = radius * parameters.spin;
            const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

            const rx = (Math.random() < 0.5 ? -1 : 1) * Math.pow(Math.random(), parameters.randomnessPower);
            const ry = (Math.random() < 0.5 ? -1 : 1) * Math.pow(Math.random(), parameters.randomnessPower);
            const rz = (Math.random() < 0.5 ? -1 : 1) * Math.pow(Math.random(), parameters.randomnessPower);

            positions[i3] = Math.cos(branchAngle + spinAngle) * radius + rx;
            positions[i3 + 1] = ry;
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + rz;

            const mixed = colorInside.clone();
            mixed.lerp(colorOutside, Math.random() * radius / parameters.radius);
            colors[i3] = mixed.r;
            colors[i3 + 1] = mixed.g;
            colors[i3 + 2] = mixed.b;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        points = new THREE.Points(geometry, material);
        scene.add(points);
    }
    generateGalaxy();

    const sizes = { width: 0, height: 0 };
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    function setSize() {
        sizes.width = Math.round(window.visualViewport ? window.visualViewport.width : window.innerWidth);
        sizes.height = Math.round(window.visualViewport ? window.visualViewport.height : window.innerHeight);
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    addEventListener('resize', setSize, { passive: true });
    window.visualViewport && window.visualViewport.addEventListener('resize', setSize, { passive: true });

    const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 100);
    camera.position.set(0.9, 1.2, 0.45);
    scene.add(camera);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enabled = parameters.orbitControls;

    let introActive = true;
    const introIn = 900, introOut = 1400;
    const introStart = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const easeInOutQuad = (t) => (t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2);

    const startPos = new THREE.Vector3(0.9, 1.2, 0.45);
    const zoomPos = new THREE.Vector3(0.65, 0.9, 0.22);
    const settlePos = new THREE.Vector3(4.8, 4.2, 3.2);
    const baseLook = new THREE.Vector3(0, 0, 0);

    const startFov = 82, zoomFov = 64, endFov = 68;
    camera.fov = startFov; camera.updateProjectionMatrix();

    const clock = new THREE.Clock();

    function tick() {
        const now = performance.now();

        if (introActive) {
            const e = now - introStart;
            if (e <= introIn) {
                const t = easeOutCubic(Math.min(1, e / introIn));
                camera.position.lerpVectors(startPos, zoomPos, t);
                camera.fov = startFov + (zoomFov - startFov) * t;
                camera.updateProjectionMatrix();
                camera.lookAt(baseLook);
            } else if (e <= introIn + introOut) {
                const t = easeInOutQuad(Math.min(1, (e - introIn) / introOut));
                camera.position.lerpVectors(zoomPos, settlePos, t);
                camera.fov = zoomFov + (endFov - zoomFov) * t;
                camera.updateProjectionMatrix();
                camera.lookAt(baseLook);
            } else {
                introActive = false;
                controls.enabled = parameters.orbitControls;
                clock.start();
            }
        } else {
            if (parameters.autoRotate && !parameters.orbitControls) {
                const et = clock.getElapsedTime();
                const r = 6.0;
                const tilt = 0.6;
                const phase = Math.atan2(settlePos.z, settlePos.x);
                camera.position.x = Math.cos(et * 0.05 + phase) * r;
                camera.position.z = Math.sin(et * 0.05 + phase) * r;
                camera.position.y = tilt * 4.2 + 2.2;
                camera.lookAt(0, 0, 0);
            }

            if (parameters.orbitControls) {
                controls.update();
            }
        }

        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }

    setSize();
    tick();

    const controlButton = document.getElementById('controlButton');
    const colorControls = document.getElementById('colorControls');
    const insideColor = document.getElementById('insideColor');
    const insideColorText = document.getElementById('insideColorText');
    const outsideColor = document.getElementById('outsideColor');
    const outsideColorText = document.getElementById('outsideColorText');
    const particleSize = document.getElementById('particleSize');
    const sizeValue = document.getElementById('sizeValue');
    const particleCount = document.getElementById('particleCount');
    const countValue = document.getElementById('countValue');
    const spinFactor = document.getElementById('spinFactor');
    const spinValue = document.getElementById('spinValue');
    const branches = document.getElementById('branches');
    const branchesValue = document.getElementById('branchesValue');
    const randomness = document.getElementById('randomness');
    const randomnessValue = document.getElementById('randomnessValue');
    const autoRotate = document.getElementById('autoRotate');
    const orbitControls = document.getElementById('orbitControls');
    const resetBtn = document.getElementById('resetBtn');
    const presetButtons = document.querySelectorAll('.preset-btn');

    function updateUI() {
        insideColor.value = parameters.insideColor;
        insideColorText.value = parameters.insideColor;
        outsideColor.value = parameters.outsideColor;
        outsideColorText.value = parameters.outsideColor;
        particleSize.value = parameters.size;
        sizeValue.textContent = parameters.size;
        particleCount.value = parameters.count;
        countValue.textContent = parameters.count;
        spinFactor.value = parameters.spin;
        spinValue.textContent = parameters.spin;
        branches.value = parameters.branches;
        branchesValue.textContent = parameters.branches;
        randomness.value = parameters.randomness;
        randomnessValue.textContent = parameters.randomness;
        autoRotate.checked = parameters.autoRotate;
        orbitControls.checked = parameters.orbitControls;
    }

    updateUI();

    controlButton.addEventListener('click', () => {
        colorControls.style.display = colorControls.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('click', (e) => {
        if (!colorControls.contains(e.target) && !controlButton.contains(e.target)) {
            colorControls.style.display = 'none';
        }
    });

    insideColor.addEventListener('input', () => {
        parameters.insideColor = insideColor.value;
        insideColorText.value = insideColor.value;
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
        generateGalaxy();
    });

    insideColorText.addEventListener('input', () => {
        parameters.insideColor = insideColorText.value;
        insideColor.value = insideColorText.value;
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
        generateGalaxy();
    });

    outsideColor.addEventListener('input', () => {
        parameters.outsideColor = outsideColor.value;
        outsideColorText.value = outsideColor.value;
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
        generateGalaxy();
    });

    outsideColorText.addEventListener('input', () => {
        parameters.outsideColor = outsideColorText.value;
        outsideColor.value = outsideColorText.value;
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
        generateGalaxy();
    });

    particleSize.addEventListener('input', () => {
        parameters.size = parseFloat(particleSize.value);
        sizeValue.textContent = parameters.size.toFixed(3);
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
        generateGalaxy();
    });

    particleCount.addEventListener('input', () => {
        parameters.count = parseInt(particleCount.value);
        countValue.textContent = parameters.count;
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
        generateGalaxy();
    });

    spinFactor.addEventListener('input', () => {
        parameters.spin = parseFloat(spinFactor.value);
        spinValue.textContent = parameters.spin.toFixed(1);
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
        generateGalaxy();
    });

    branches.addEventListener('input', () => {
        parameters.branches = parseInt(branches.value);
        branchesValue.textContent = parameters.branches;
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
        generateGalaxy();
    });

    randomness.addEventListener('input', () => {
        parameters.randomness = parseFloat(randomness.value);
        randomnessValue.textContent = parameters.randomness;
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
        generateGalaxy();
    });

    autoRotate.addEventListener('change', () => {
        parameters.autoRotate = autoRotate.checked;
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
    });

    orbitControls.addEventListener('change', () => {
        parameters.orbitControls = orbitControls.checked;
        controls.enabled = parameters.orbitControls;
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
    });

    const presets = {
        fire: { insideColor: '#ff3300', outsideColor: '#ff9900', spin: 4, branches: 4 },
        ice: { insideColor: '#00ccff', outsideColor: '#0066ff', spin: 2, branches: 6 },
        nebula: { insideColor: '#9900ff', outsideColor: '#ff00cc', spin: 5, branches: 3 },
        sunset: { insideColor: '#ff6600', outsideColor: '#ff0066', spin: 3, branches: 5 },
        ocean: { insideColor: '#00ffff', outsideColor: '#0066cc', spin: 2.5, branches: 4 },
        forest: { insideColor: '#00ff99', outsideColor: '#009933', spin: 3.5, branches: 3 }
    };

    presetButtons.forEach(button => {
        button.addEventListener('click', () => {
            const presetName = button.getAttribute('data-preset');
            const preset = presets[presetName];
            if (preset) {
                Object.assign(parameters, preset);
                localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
                updateUI();
                generateGalaxy();
            }
        });
    });

    resetBtn.addEventListener('click', () => {
        parameters = {...defaultParameters};
        localStorage.setItem('galaxyParameters', JSON.stringify(parameters));
        updateUI();
        generateGalaxy();
    });
</script>
`;

// Variables
const wildcards = [];

// CloudflareApi Class
class CloudflareApi {
  constructor() {
    this.bearer = `Bearer ${scriptConfig.API_KEY}`;

    this.headers = {
      Authorization: this.bearer,
      "X-Auth-Email": scriptConfig.API_EMAIL,
      "X-Auth-Key": scriptConfig.API_KEY,
      "Content-Type": "application/json",
    };
  }

  async getDomainList() {
    try {
      const url = `https://api.cloudflare.com/client/v4/accounts/${scriptConfig.ACCOUNT_ID}/workers/domains`;
      const res = await fetch(url, {
        headers: this.headers,
      });

      if (res.status == 200) {
        const respJson = await res.json();
        return respJson.result.filter((data) => data.service == scriptConfig.SERVICE_NAME);
      }
      return [];
    } catch (e) {
      console.error('Error getting domain list:', e);
      return [];
    }
  }

  async registerDomain(domain) {
    try {
      domain = domain.toLowerCase();
      const suffix = `.${scriptConfig.SERVICE_NAME}.${scriptConfig.ROOT_DOMAIN}`;
      let fullDomain = domain;

      if (!domain.endsWith(suffix)) {
        fullDomain = domain + suffix;
      }

      const registeredDomains = await this.getDomainList();

      if (registeredDomains.some(d => d.hostname === fullDomain)) {
        return 409;
      }

      const url = `https://api.cloudflare.com/client/v4/accounts/${scriptConfig.ACCOUNT_ID}/workers/domains`;
      const res = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          environment: "production",
          hostname: fullDomain,
          service: scriptConfig.SERVICE_NAME,
          zone_id: scriptConfig.ZONE_ID,
        }),
        headers: this.headers,
      });

      return res.status;
    } catch (e) {
      console.error('Error registering domain:', e);
      return 500;
    }
  }

  async deleteDomain(domainId) {
    try {
      const url = `https://api.cloudflare.com/client/v4/accounts/${scriptConfig.ACCOUNT_ID}/workers/domains/${domainId}`;
      const res = await fetch(url, {
        method: "DELETE",
        headers: this.headers,
      });
      return res.status;
    } catch (e) {
      console.error('Error deleting domain:', e);
      return 500;
    }
  }
}

// Global Variables
let cachedProxyList = [];
let pathinfo = "/Free-VPN-CF-Geo-Project/";

// Constants
const SIDEBAR_COMPONENT = `
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>

<div x-data="{ sidebarOpen: false, activeMenu: 'create', showSearch: ['/web', '/'].includes(window.location.pathname) }" @keydown.escape.window="sidebarOpen = false" class="relative">
    <script>
        function toggleDarkMode() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }
    </script>

    <button @click="sidebarOpen = true" class="floating-button fixed top-6 left-6 z-50 p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>

    <div x-show="sidebarOpen" @click="sidebarOpen = false" class="overlay fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm transition-all duration-300"></div>

    <div :class="{'sidebar-open': sidebarOpen, 'sidebar-closed': !sidebarOpen}" class="sidebar fixed top-0 left-0 h-full w-80 p-6 z-50 transform -translate-x-full bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl transition-all duration-300 overflow-y-auto">
        <div class="flex justify-between items-center mb-8">
            <div class="flex items-center">
                <div class="relative mr-3">
                    <img src="https://geoproject.biz.id/circle-flags/bote.png" alt="Profile" class="profile-image w-12 h-12 rounded-full object-cover border-2 border-blue-500">
                    <div class="status-dot absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                </div>
                <div>
                    <h2 class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">VPN Manager</h2>
                    <p class="text-xs text-gray-400 mt-1">Secure Connection</p>
                </div>
            </div>
            <button @click="sidebarOpen = false" class="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200">
                <svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <nav class="space-y-2">
            <div x-show="showSearch" class="search-quantum mb-4">
                <div class="flex gap-2">
                    <input type="text" id="search-bar" placeholder="Search..." class="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all">
                    <button id="search-button" class="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:shadow-lg transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <a href="/web" class="menu-item flex items-center py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 group">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform">
                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <div class="font-medium text-sm">Create VPN</div>
                    <div class="text-xs text-gray-400 mt-0.5">Create a new VPN connection</div>
                </div>
                <span class="px-2 py-1 text-xs bg-green-500 rounded-full">New</span>
            </a>

            <a href="/vpn" class="menu-item flex items-center py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 group">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform">
                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <div class="font-medium text-sm">Subscription</div>
                    <div class="text-xs text-gray-400 mt-0.5">Configuration Conversion</div>
                </div>
            </a>

            <a href="/kuota" class="menu-item flex items-center py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 group">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform">
                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <div class="font-medium text-sm">Check Quota</div>
                    <div class="text-xs text-gray-400 mt-0.5">Monitor data usage simcard XL</div>
                </div>
            </a>

            <a href="/checker" class="menu-item flex items-center py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 group">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform">
                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <div class="flex-1">
                    <div class="font-medium text-sm">IP checker</div>
                    <div class="text-xs text-gray-400 mt-0.5">IP address information</div>
                </div>
            </a>

            <a href="/stats" class="menu-item flex items-center py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 group">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform">
                    <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </div>
                <div class="flex-1">
                    <div class="font-medium text-sm">Usage Report</div>
                    <div class="text-xs text-gray-400 mt-0.5">Monitor last 24 hours usage report</div>
                </div>
            </a>
        </nav>

        <div class="absolute bottom-6 left-6 right-6">
            <div class="border-t border-gray-700 pt-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                            <span class="text-white text-sm font-semibold">GP</span>
                        </div>
                        <div class="ml-3">
                            <div class="font-medium text-sm">GEO PROJECT</div>
                            <div class="text-xs text-gray-400">Premium Member</div>
                        </div>
                    </div>
                    <button onclick="toggleDarkMode()" class="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-200" title="Toggle Dark Mode">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`;

async function getProxyList(forceReload = false) {
  if (!cachedProxyList.length || forceReload) {
    if (!proxyListURL) {
      throw new Error("No Proxy List URL Provided!");
    }

    const proxyBank = await fetch(proxyListURL);
    if (proxyBank.status === 200) {
      const proxyString = ((await proxyBank.text()) || "").split("\n").filter(Boolean);
      cachedProxyList = proxyString
        .map((entry) => {
          const [proxyIP, proxyPort, country, org] = entry.split(",");
          return {
            proxyIP: proxyIP || "Unknown",
            proxyPort: proxyPort || "Unknown",
            country: country.toUpperCase() || "Unknown",
            org: org || "Unknown Org",
          };
        })
        .filter(Boolean);
    }
  }

  return cachedProxyList;
}

async function reverseProxy(request, target) {
  const targetUrl = new URL(request.url);
  targetUrl.hostname = target;

  const modifiedRequest = new Request(targetUrl, request);
  modifiedRequest.headers.set("X-Forwarded-Host", request.headers.get("Host"));

  const response = await fetch(modifiedRequest);
  const newResponse = new Response(response.body, response);
  newResponse.headers.set("X-Proxied-By", "Cloudflare Worker");

  return newResponse;
}

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);

      // API for wildcard management
      if (url.pathname.startsWith('/api/v1/domains')) {
        const cfApi = new CloudflareApi();

        if (request.method === 'GET') {
          const domains = await cfApi.getDomainList();
          return new Response(JSON.stringify(domains), {
            headers: { 'Content-Type': 'application/json' },
          });
        }

        if (request.method === 'POST') {
          try {
            const { domain } = await request.json();
            if (!domain) {
              return new Response('Domain is required', { status: 400 });
            }
            const status = await cfApi.registerDomain(domain);
            return new Response(null, { status });
          } catch (e) {
            return new Response('Invalid JSON', { status: 400 });
          }
        }

        if (request.method === 'DELETE') {
          try {
            const { id, password } = await request.json();
            if (!id) {
              return new Response('Domain ID is required', { status: 400 });
            }
            if (password !== scriptConfig.OWNER_PASSWORD) {
                return new Response('Invalid password', { status: 401 });
            }
            const status = await cfApi.deleteDomain(id);
            return new Response(null, { status });
          } catch (e) {
            return new Response('Invalid JSON', { status: 400 });
          }
        }

        return new Response('Method Not Allowed', { status: 405 });
      }

      const myurl = "api-check.web.id";
      const upgradeHeader = request.headers.get("Upgrade");
      const CHECK_API_BASE = `https://${myurl}`;
      const CHECK_API = `${CHECK_API_BASE}/check?ip=`;

      // Handle IP check
      if (url.pathname === "/geo-ip") {
        const ip = url.searchParams.get("ip");

        if (!ip) {
          return new Response("IP parameter is required", { status: 400 });
        }

        const apiResponse = await fetch(`${CHECK_API}${ip}`);
        if (!apiResponse.ok) {
          return new Response("Failed to fetch IP information", { status: apiResponse.status });
        }

        const data = await apiResponse.json();
        return new Response(JSON.stringify(data), {
          headers: { "Content-Type": "application/json" },
        });
      }

      async function updateProxies() {
        const proxies = await getProxyList();
        console.log("Proxy list updated (getProxyList called).");
      }

      ctx.waitUntil(
        (async function periodicUpdate() {
          await updateProxies();
        })()
      );

      if (upgradeHeader === "websocket") {
        const allMatch = url.pathname.match(/^\/Free-VPN-CF-Geo-Project\/ALL(\d*)$/);

        if (allMatch) {
          const indexStr = allMatch[1];
          const index = indexStr ? parseInt(indexStr) - 1 : Math.floor(Math.random() * 10000);

          console.log(`ALL Proxy Request. Index Requested: ${indexStr ? index + 1 : 'Random'}`);

          const allProxies = await getProxyList();

          if (allProxies.length === 0) {
            return new Response(`No proxies available globally.`, { status: 404 });
          }

          const selectedProxy = allProxies[index % allProxies.length];

          if (!selectedProxy) {
            return new Response(`Proxy with index ${index + 1} not found in global list. Max available: ${allProxies.length}`, { status: 404 });
          }

          const proxyIP = `${selectedProxy.proxyIP}:${selectedProxy.proxyPort}`;
          console.log(`Selected ALL Proxy: ${proxyIP}`);
          return await websockerHandler(request, proxyIP);
        }

        const countryMatch = url.pathname.match(/^\/Free-VPN-CF-Geo-Project\/([A-Z]{2})(\d*)$/);
        if (countryMatch) {
          const baseCountryCode = countryMatch[1];
          const indexStr = countryMatch[2];
          const index = indexStr ? parseInt(indexStr) - 1 : 0;

          console.log(`Base Country Code Request: ${baseCountryCode}, Index Requested: ${index + 1}`);

          const allProxies = await getProxyList();
          const filteredProxiesForCountry = allProxies.filter((proxy) => proxy.country === baseCountryCode);

          if (filteredProxiesForCountry.length === 0) {
            return new Response(`No proxies available for country: ${baseCountryCode}`, { status: 404 });
          }

          const selectedProxy = filteredProxiesForCountry[index % filteredProxiesForCountry.length];

          if (!selectedProxy) {
            return new Response(`Proxy with index ${index + 1} not found for country: ${baseCountryCode}. Max available: ${filteredProxiesForCountry.length}`, { status: 404 });
          }

          const proxyIP = `${selectedProxy.proxyIP}:${selectedProxy.proxyPort}`;
          console.log(`Selected Proxy: ${proxyIP} for ${baseCountryCode}${indexStr}`);
          return await websockerHandler(request, proxyIP);
        }

        // Handle direct IP:PORT proxy requests
        const ipPortMatch = url.pathname.match(/^\/Free-VPN-CF-Geo-Project\/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})[=:-](\d+)$/);
        if (ipPortMatch) {
          const proxyIP = `${ipPortMatch[1]}:${ipPortMatch[2]}`;
          console.log(`Direct Proxy IP: ${proxyIP}`);
          return await websockerHandler(request, proxyIP);
        }
      }

      const rootDomain = scriptConfig.ROOT_DOMAIN;
      const serviceName = scriptConfig.SERVICE_NAME;
      const type = url.searchParams.get('type') || 'mix';
      const tls = url.searchParams.get('tls') !== 'false';
      const wildcard = url.searchParams.get('wildcard') === 'true';
      const bug = url.searchParams.get('bug');
      const bugs = wildcard ? (bug || rootDomain) : (bug || `${serviceName}.${rootDomain}`);
      const geo81 = wildcard ? `${bug || rootDomain}.${serviceName}.${rootDomain}` : `${serviceName}.${rootDomain}`;
      const country = url.searchParams.get('country');
      const limit = parseInt(url.searchParams.get('limit'), 10);
      let configs;

      switch (url.pathname) {
        case '/vpn/clash':
          configs = await generateClashSub(type, bugs, geo81, tls, country, limit);
          break;
        case '/vpn/surfboard':
          configs = await generateSurfboardSub(type, bugs, geo81, tls, country, limit);
          break;
        case '/vpn/singbox':
          configs = await generateSingboxSub(type, bugs, geo81, tls, country, limit);
          break;
        case '/vpn/husi':
          configs = await generateHusiSub(type, bugs, geo81, tls, country, limit);
          break;
        case '/vpn/nekobox':
          configs = await generateNekoboxSub(type, bugs, geo81, tls, country, limit);
          break;
        case '/vpn/v2rayng':
          configs = await generateV2rayngSub(type, bugs, geo81, tls, country, limit);
          break;
        case '/vpn/v2ray':
          configs = await generateV2raySub(type, bugs, geo81, tls, country, limit);
          break;
        case "/web":
          return await handleWebRequest(request);
        case "/":
          return await handleWebRequest(request);
        case "/vpn":
          return new Response(await handleSubRequest(url.hostname), { headers: { 'Content-Type': 'text/html' } });
        case "/checker":
          return new Response(await mamangenerateHTML(), {
            headers: { "Content-Type": "text/html" },
          });
        case "/checker/check":
          const paramss = url.searchParams;
          return await handleCheck(paramss);
        case "/kuota":
          return new Response(await handleKuotaRequest(), {
            headers: { "Content-Type": "text/html" },
          });
        case "/stats":
          return await handleStatsRequest();
      }

      return new Response(configs);
    } catch (err) {
      return new Response(`An error occurred: ${err.toString()}`, {
        status: 500,
      });
    }
  },
};

async function handleCheck(paramss) {
  const ipPort = paramss.get("ip");

  if (!ipPort) {
    return new Response("Parameter 'ip' diperlukan dalam format ip:port", {
      status: 400,
    });
  }

  const [ip, port] = ipPort.split(":");
  if (!ip || !port) {
    return new Response("Format IP:PORT tidak valid", { status: 400 });
  }

  const apiUrl = `https://api-check.web.id/check?ip=${ip}:${port}`;

  try {
    const apiResponse = await fetch(apiUrl);

    const result = await apiResponse.json();

    const responseData = {
      proxy: result.proxy || "Unknown",
      ip: result.ip || "Unknown",
      port: Number.isNaN(parseInt(port, 10)) ? "Unknown" : parseInt(port, 10),
      delay: result.delay || "Unknown",
      countryCode: result.countryCode || "Unknown",
      country: result.country || "Unknown",
      flag: result.flag || "🏳️",
      city: result.city || "Unknown",
      timezone: result.timezone || "Unknown",
      latitude: result.latitude ?? null,
      longitude: result.longitude ?? null,
      asn: result.asn ?? null,
      colo: result.colo || "Unknown",
      isp: result.isp || "Unknown",
      region: result.region || "Unknown",
      regionName: result.regionName || "Unknown",
      org: result.org || "Unknown",
      clientTcpRtt: result.clientTcpRtt ?? null,
      httpProtocol: result.httpProtocol || "Unknown",
      tlsCipher: result.tlsCipher || "Unknown",
      continent: result.continent || "Unknown",
      tlsVersion: result.tlsVersion || "Unknown",
      postalCode: result.postalCode || "Unknown",
      regionCode: result.regionCode || "Unknown",
      asOrganization: result.asOrganization || "Unknown",
      status: result.status === "ACTIVE" ? "✅ Aktif" : "😭",
    };

    return new Response(JSON.stringify(responseData, null, 2), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const errorData = {
      proxy: "Unknown",
      ip: ip || "Unknown",
      status: "DEAD",
      delay: "0 ms",
      countryCode: "Unknown",
      country: "Unknown 🏳️",
      flag: "🏳️",
      city: "Unknown",
      timezone: "Unknown",
      latitude: "Unknown",
      longitude: "Unknown",
      asn: 0,
      colo: "Unknown",
      isp: "Unknown",
      region: "Unknown",
      regionName: "Unknown",
      org: "Unknown",
      clientTcpRtt: 0,
      httpProtocol: "Unknown",
      tlsCipher: "Unknown",
      continent: "Unknown",
      tlsVersion: "Unknown",
      postalCode: "Unknown",
      regionCode: "Unknown",
      asOrganization: "Unknown",
      message: `${ip}:${port} - ❌ DEAD`,
    };

    return new Response(JSON.stringify(errorData, null, 2), {
      headers: { "Content-Type": "application/json" },
    });
  }
}

function mamangenerateHTML() {
  return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proxy Checker - GEO PROJECT</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Space Grotesk', sans-serif;
      background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
      color: #fff;
      min-height: 100vh;
    }
    canvas.webgl { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; }
    .container { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 20px; }
    header { text-align: center; padding: 40px 20px; position: relative; z-index: 1; }
    header h1 { font-size: 3rem; margin-bottom: 10px; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .subtitle { color: rgba(255,255,255,0.7); font-size: 1.1rem; }
    .input-section, .results-section, .map-section { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border-radius: 20px; padding: 25px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.1); }
    .section-title { font-size: 1.5rem; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
    .input-container { display: flex; gap: 15px; }
    .input-container input { flex: 1; padding: 15px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; color: white; font-size: 1rem; }
    .input-container input:focus { outline: none; border-color: #667eea; }
    .input-container button { padding: 15px 30px; background: linear-gradient(135deg, #667eea, #764ba2); border: none; border-radius: 12px; color: white; font-weight: 600; cursor: pointer; transition: transform 0.3s; }
    .input-container button:hover { transform: scale(1.05); }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); }
    th { color: #667eea; font-weight: 600; }
    .status-active { color: #38ef7d; }
    .status-inactive { color: #f5576c; }
    .delay-good { color: #38ef7d; }
    .delay-medium { color: #ffd93d; }
    .delay-poor { color: #f5576c; }
    #map { height: 400px; border-radius: 12px; overflow: hidden; }
    #loading { display: none; text-align: center; padding: 20px; color: #667eea; }
    footer { text-align: center; padding: 20px; color: rgba(255,255,255,0.5); position: relative; z-index: 1; }
    @media (max-width: 768px) {
      .input-container { flex-direction: column; }
      th, td { padding: 8px; font-size: 0.85rem; }
      header h1 { font-size: 2rem; }
    }
  </style>
</head>
<body>
  ${GALAXY_ANIMATION_COMPONENT}
  ${SIDEBAR_COMPONENT}

  <div class="container">
    <header>
      <h1><i class="fas fa-shield-alt"></i> Proxy Checker</h1>
      <p class="subtitle">Check proxy details and geolocation in real-time</p>
    </header>

    <div class="input-section">
      <h2 class="section-title"><i class="fas fa-search"></i> Check Proxy</h2>
      <div class="input-container">
        <input type="text" id="ipInput" placeholder="Input IP:Port (192.168.1.1:443)">
        <button onclick="checkProxy()">
          <i class="fas fa-play-circle"></i> Check
        </button>
      </div>
      <div id="loading"><i class="fas fa-spinner fa-spin"></i> Checking proxy details...</div>
    </div>

    <div class="results-section">
      <h2 class="section-title"><i class="fas fa-info-circle"></i> Proxy Details</h2>
      <div style="overflow-x: auto;">
        <table id="resultTable">
          <thead>
            <tr><th>Key</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Proxy</td><td>-</td></tr>
            <tr><td>ISP</td><td>-</td></tr>
            <tr><td>IP</td><td>-</td></tr>
            <tr><td>Port</td><td>-</td></tr>
            <tr><td>ASN</td><td>-</td></tr>
            <tr><td>Country</td><td>-</td></tr>
            <tr><td>City</td><td>-</td></tr>
            <tr><td>Flag</td><td>-</td></tr>
            <tr><td>Timezone</td><td>-</td></tr>
            <tr><td>Latitude</td><td>-</td></tr>
            <tr><td>Longitude</td><td>-</td></tr>
            <tr><td>Delay</td><td class="delay-good">-</td></tr>
            <tr><td>Status</td><td class="status-inactive">-</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="map-section">
      <h2 class="section-title"><i class="fas fa-map-marked-alt"></i> Geolocation Map</h2>
      <div id="map"></div>
    </div>
  </div>

  <footer>
    <p>&copy; 2025 GEO PROJECT - Proxy Checker</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
  <script>
    let map;
    window.onload = function() { loadStoredData(); initializeMap(); };
    function loadStoredData() { const storedData = localStorage.getItem("proxyData"); if (storedData) updateTable(JSON.parse(storedData)); }
    function initializeMap() { const storedMap = localStorage.getItem("mapData"); if (storedMap) { const mapData = JSON.parse(storedMap); initMap(mapData.latitude, mapData.longitude, mapData.zoom); loadStoredMarker(); } else { initMap(-6.200000, 106.816666, 5); } }
    function loadStoredMarker() { const storedMarker = localStorage.getItem("markerData"); if (storedMarker) { const markerData = JSON.parse(storedMarker); addMarkerToMap(markerData.latitude, markerData.longitude, markerData.data); } }
    async function checkProxy() {
      const ipPort = document.getElementById("ipInput").value.trim();
      if (!ipPort) { Swal.fire({ icon: 'warning', title: 'Peringatan!', text: 'Masukkan IP:Port terlebih dahulu!', background: 'rgba(30, 41, 59, 0.9)', color: '#f1f5f9' }); return; }
      document.getElementById("loading").style.display = "block";
      try {
        const response = await fetch("/checker/check?ip=" + encodeURIComponent(ipPort));
        const data = await response.json();
        localStorage.setItem("proxyData", JSON.stringify(data));
        updateTable(data);
        if (data.latitude && data.longitude) updateMap(data.latitude, data.longitude, data);
        Swal.fire({ icon: 'success', title: 'Berhasil!', text: 'Proxy berhasil diperiksa', background: 'rgba(30, 41, 59, 0.9)', color: '#f1f5f9' });
      } catch (error) {
        Swal.fire({ icon: 'error', title: 'Error!', text: 'Gagal memeriksa proxy', background: 'rgba(30, 41, 59, 0.9)', color: '#f1f5f9' });
      } finally { document.getElementById("loading").style.display = "none"; }
    }
    function updateTable(data) {
      const tbody = document.getElementById("resultTable").querySelector("tbody");
      const rows = tbody.querySelectorAll("tr");
      const mapping = { proxy: 'proxy', isp: 'isp', ip: 'ip', port: 'port', asn: 'asn', country: 'country', city: 'city', flag: 'flag', timezone: 'timezone', latitude: 'latitude', longitude: 'longitude', delay: 'delay', status: 'status' };
      rows.forEach(row => { const key = row.querySelector("td").textContent.toLowerCase(); const valueCell = row.querySelectorAll("td")[1]; if (data[mapping[key]] !== undefined && data[mapping[key]] !== null) { valueCell.textContent = data[mapping[key]]; if (key === 'status') valueCell.className = data.status === 'ACTIVE' ? 'status-active' : 'status-inactive'; else if (key === 'delay') { const delay = parseInt(data.delay); if (delay < 100) valueCell.className = 'delay-good'; else if (delay < 500) valueCell.className = 'delay-medium'; else valueCell.className = 'delay-poor'; } } else { valueCell.textContent = "-"; } });
    }
    function initMap(lat, lon, zoom) { map = L.map('map').setView([lat, lon], zoom); L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; GEO PROJECT' }).addTo(map); }
    function updateMap(lat, lon, data) { if (!map) initMap(lat, lon, 7); else { map.setView([lat, lon], 7); map.eachLayer(function(layer) { if (layer instanceof L.Marker) map.removeLayer(layer); }); } addMarkerToMap(lat, lon, data); saveMapData(lat, lon, 7, data.proxy, data.isp, data.asn); }
    function saveMapData(lat, lon, zoom, proxy, isp, asn) { localStorage.setItem("mapData", JSON.stringify({ latitude: lat, longitude: lon, zoom: zoom })); const markerData = { latitude: lat, longitude: lon, data: { proxy, isp, asn } }; localStorage.setItem("markerData", JSON.stringify(markerData)); }
    function addMarkerToMap(lat, lon, data) { const marker = L.marker([lat, lon]).addTo(map).bindPopup("<b>📍 Lokasi Proxy</b><br><b>Proxy:</b> " + (data.proxy || '-') + "<br><b>ISP:</b> " + (data.isp || '-') + "<br><b>ASN:</b> " + (data.asn || '-')).openPopup(); }
  </script>
</body>
</html>
`;
}

async function handleStatsRequest() {
  const CLOUDFLARE_API_TOKEN = scriptConfig.CLOUDFLARE_API_TOKEN;
  const ZONE_ID = scriptConfig.ZONE_ID;

  if (!CLOUDFLARE_API_TOKEN || !ZONE_ID) {
    return new Response("CLOUDFLARE_API_TOKEN and ZONE_ID environment variables must be set.", { status: 500, headers: { "Content-Type": "text/html" } });
  }

  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  try {
    const response = await fetch("https://api.cloudflare.com/client/v4/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `query {
          viewer {
            zones(filter: { zoneTag: "${ZONE_ID}" }) {
              httpRequests1hGroups(
                limit: 24,
                orderBy: [datetime_DESC],
                filter: { datetime_geq: "${twentyFourHoursAgo}" }
              ) {
                sum {
                  bytes
                  requests
                }
                dimensions {
                  datetime
                }
              }
            }
          }
        }`
      })
    });

    const result = await response.json();
    if (!result.data || !result.data.viewer || !result.data.viewer.zones.length || !result.data.viewer.zones[0].httpRequests1hGroups) {
      throw new Error("Gagal mengambil data pemakaian atau data tidak tersedia.");
    }

    const hourlyData = result.data.viewer.zones[0].httpRequests1hGroups;

    let totalDailyRequests = 0;
    let totalDailyBandwidth = 0;

    hourlyData.forEach(hour => {
        totalDailyRequests += hour.sum.requests;
        totalDailyBandwidth += hour.sum.bytes;
    });

    const totalDailyBandwidthGB = (totalDailyBandwidth / (1024 ** 3)).toFixed(2);

    let allCardsHtml = '';
    if (hourlyData.length === 0) {
        allCardsHtml = '<div class="no-data-message">Tidak ada data penggunaan untuk 24 jam terakhir.</div>';
    } else {
        hourlyData.forEach((hour, index) => {
            const timestamp = new Date(hour.dimensions.datetime);
            const formattedTime = timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
            const totalData = (hour.sum.bytes / (1024 ** 3)).toFixed(3);
            const totalRequests = hour.sum.requests.toLocaleString('id-ID');
            allCardsHtml += `
                <div class="stats-card" data-page="${Math.floor(index / 5) + 1}" style="background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border-radius: 15px; padding: 20px; margin-bottom: 15px; border: 1px solid rgba(255,255,255,0.1); transition: all 0.3s;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <i class="fas fa-clock" style="color: #667eea;"></i>
                        <span style="font-weight: 600;">${formattedTime}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <div><i class="fas fa-database"></i> Total Data</div>
                        <div><strong>${totalData} GB</strong></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                        <div><i class="fas fa-exchange-alt"></i> Requests</div>
                        <div><strong>${totalRequests}</strong></div>
                    </div>
                </div>
            `;
        });
    }

    const html = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usage Report - GEO PROJECT</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Rajdhani', sans-serif; background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%); color: white; min-height: 100vh; }
        canvas.webgl { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; }
        .container { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; padding: 40px 20px; }
        .title { font-size: 2.5rem; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 10px; }
        .subtitle { color: rgba(255,255,255,0.7); }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border-radius: 20px; padding: 25px; text-align: center; border: 1px solid rgba(255,255,255,0.1); }
        .stat-icon { font-size: 2rem; color: #667eea; margin-bottom: 15px; }
        .stat-title { font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-bottom: 10px; }
        .stat-value { font-size: 2rem; font-weight: 700; }
        .cards-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .pagination-container { display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
        .pagination-btn { padding: 8px 15px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; color: white; cursor: pointer; transition: all 0.3s; }
        .pagination-btn:hover { background: #667eea; transform: translateY(-2px); }
        .pagination-btn.active { background: linear-gradient(135deg, #667eea, #764ba2); }
        .pagination-info { text-align: center; color: rgba(255,255,255,0.6); margin-bottom: 20px; }
        footer { text-align: center; padding: 20px; color: rgba(255,255,255,0.5); }
        .stats-card { display: none; }
        .stats-card.active { display: block; animation: fadeInUp 0.5s ease; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) { .title { font-size: 1.8rem; } .stat-value { font-size: 1.5rem; } }
    </style>
</head>
<body>
    ${GALAXY_ANIMATION_COMPONENT}
    ${SIDEBAR_COMPONENT}
    <div class="container">
        <div class="header">
            <h1 class="title">Usage Report</h1>
            <p class="subtitle">Statistics for the last 24 hours</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-chart-line"></i></div>
                <div class="stat-title">Total Daily Requests</div>
                <div class="stat-value">${totalDailyRequests.toLocaleString('id-ID')}</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-network-wired"></i></div>
                <div class="stat-title">Daily Bandwidth</div>
                <div class="stat-value">${totalDailyBandwidthGB} GB</div>
            </div>
        </div>

        <div class="cards-container" id="cardsContainer">
            ${allCardsHtml}
        </div>

        <div class="pagination-container" id="paginationContainer"></div>
        <div class="pagination-info" id="paginationInfo"></div>

        <footer>Powered by <a href="https://t.me/sampiiiiu" target="_blank" style="color: #667eea; text-decoration: none;">GEO PROJECT</a></footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const cardsContainer = document.getElementById('cardsContainer');
            const paginationContainer = document.getElementById('paginationContainer');
            const paginationInfo = document.getElementById('paginationInfo');
            const cards = cardsContainer.querySelectorAll('.stats-card');
            const itemsPerPage = 6;
            let currentPage = 1;
            const totalPages = Math.ceil(cards.length / itemsPerPage);

            function showPage(page) {
                cards.forEach(card => card.classList.remove('active'));
                const startIndex = (page - 1) * itemsPerPage;
                const endIndex = Math.min(startIndex + itemsPerPage, cards.length);
                for (let i = startIndex; i < endIndex; i++) cards[i].classList.add('active');
                updatePaginationButtons(page);
                updatePageInfo(page);
            }

            function updatePaginationButtons(activePage) {
                paginationContainer.innerHTML = '';
                const prevButton = document.createElement('button');
                prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
                prevButton.className = 'pagination-btn';
                prevButton.disabled = activePage === 1;
                prevButton.onclick = () => { if (activePage > 1) showPage(activePage - 1); };
                paginationContainer.appendChild(prevButton);

                for (let i = 1; i <= totalPages; i++) {
                    const pageButton = document.createElement('button');
                    pageButton.textContent = i;
                    pageButton.className = 'pagination-btn' + (i === activePage ? ' active' : '');
                    pageButton.onclick = () => showPage(i);
                    paginationContainer.appendChild(pageButton);
                }

                const nextButton = document.createElement('button');
                nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
                nextButton.className = 'pagination-btn';
                nextButton.disabled = activePage === totalPages;
                nextButton.onclick = () => { if (activePage < totalPages) showPage(activePage + 1); };
                paginationContainer.appendChild(nextButton);
            }

            function updatePageInfo(page) {
                const startItem = (page - 1) * itemsPerPage + 1;
                const endItem = Math.min(page * itemsPerPage, cards.length);
                paginationInfo.textContent = 'Showing ' + startItem + '-' + endItem + ' of ' + cards.length + ' data';
            }

            if (cards.length > 0) { showPage(currentPage); }
            else { paginationContainer.style.display = 'none'; paginationInfo.textContent = 'No data to display'; }
        });
    </script>
</body>
</html>
    `;

    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  } catch (error) {
    const errorHtml = `
        <!DOCTYPE html>
        <html lang="id">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Error</title></head>
        <body><div style="text-align: center; padding: 50px;"><h1>Failed to get report</h1><p>${error.message}</p></div></body>
        </html>
    `;
    return new Response(errorHtml, { status: 500, headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
}

async function handleKuotaRequest() {
    return `
<!DOCTYPE html>
<html lang="id" class="dark">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Cek Kuota XL/AXIS - GEO PROJECT</title>
    <link rel="icon" href="https://raw.githubusercontent.com/jaka9m/vless/refs/heads/main/sidompul.jpg" type="image/jpeg">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%); min-height: 100vh; }
        canvas.webgl { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; }
        .main-container { position: relative; z-index: 1; max-width: 500px; margin: 0 auto; padding: 40px 20px; }
        .header-card { text-align: center; margin-bottom: 30px; }
        .logo-container { display: flex; align-items: center; justify-content: center; gap: 15px; flex-wrap: wrap; }
        .logo { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; }
        .title { font-size: 1.5rem; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .info-box { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border-radius: 12px; padding: 15px; margin-bottom: 20px; text-align: center; font-size: 0.9rem; color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.1); }
        .form-container { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border-radius: 20px; padding: 30px; border: 1px solid rgba(255,255,255,0.1); }
        .input-field { width: 100%; padding: 12px 15px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; color: white; font-size: 1rem; }
        .input-field:focus { outline: none; border-color: #667eea; }
        .btn-primary { width: 100%; padding: 12px; background: linear-gradient(135deg, #667eea, #764ba2); border: none; border-radius: 10px; color: white; font-weight: 600; cursor: pointer; transition: transform 0.3s; margin-top: 15px; }
        .btn-primary:hover { transform: scale(1.02); }
        .result-container { margin-top: 20px; }
        .result-success { background: rgba(56, 239, 125, 0.2); border: 1px solid rgba(56, 239, 125, 0.3); color: #38ef7d; }
        .result-error { background: rgba(245, 87, 108, 0.2); border: 1px solid rgba(245, 87, 108, 0.3); color: #f5576c; }
        footer { text-align: center; padding: 20px; color: rgba(255,255,255,0.5); position: relative; z-index: 1; }
        #cover-spin { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1000; display: none; justify-content: center; align-items: center; }
        .loader { width: 50px; height: 50px; border: 3px solid rgba(102,126,234,0.3); border-top-color: #667eea; border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
    </style>
</head>
<body>
${GALAXY_ANIMATION_COMPONENT}
${SIDEBAR_COMPONENT}
    <div id="cover-spin"><div class="loader"></div></div>

    <div class="main-container">
        <div class="header-card">
            <div class="logo-container">
                <img src="https://raw.githubusercontent.com/jaka9m/vless/refs/heads/main/sidompul.jpg" alt="Logo" class="logo">
                <h1 class="title">Cek Kuota XL/AXIS</h1>
            </div>
        </div>

        <div class="info-box">
            <i class="fa fa-info-circle"></i> Use this service wisely. Make sure the number entered is an active XL/AXIS number.
        </div>

        <div class="form-container">
            <form id="formnya">
                <div class="mb-4">
                    <label for="msisdn" class="block font-medium mb-2 text-gray-300">
                        <i class="fa fa-mobile-alt mr-2"></i>XL/AXIS Phone Number
                    </label>
                    <input type="number" class="input-field" id="msisdn" placeholder="Example: 08123456789 or 628123456789" maxlength="16" required>
                </div>
                <button type="button" id="submitCekKuota" class="btn-primary">
                    <i class="fa fa-search"></i> Check Quota
                </button>
            </form>
            <div id="hasilnya" class="result-container"></div>
        </div>
    </div>

    <footer>
        <p>&copy; 2025 GEO PROJECT - Quota Checker</p>
    </footer>

    <script>
        function cekKuota() {
            const msisdn = document.getElementById('msisdn').value;
            if (!msisdn) { console.error('Number cannot be empty.'); return; }
            $('#cover-spin').show();
            $.ajax({
                type: 'GET',
                url: 'https://apigw.kmsp-store.com/sidompul/v4/cek_kuota?msisdn=' + msisdn + '&isJSON=true',
                dataType: 'JSON',
                beforeSend: function (req) {
                    req.setRequestHeader('Authorization', 'Basic c2lkb21wdWxhcGk6YXBpZ3drbXNw');
                    req.setRequestHeader('X-API-Key', '60ef29aa-a648-4668-90ae-20951ef90c55');
                    req.setRequestHeader('X-App-Version', '4.0.0');
                },
                success: function (res) {
                    $('#cover-spin').hide();
                    $('#hasilnya').html('');
                    if (res.status) { $('#hasilnya').html('<div class="result-success p-4 rounded-lg mt-4 text-center font-semibold">' + res.data.hasil + '</div>'); }
                    else { $('#hasilnya').html('<div class="result-error p-4 rounded-lg mt-4 text-center font-semibold">' + (res.data?.keteranganError || 'Failed to check quota') + '</div>'); }
                },
                error: function () {
                    $('#cover-spin').hide();
                    $('#hasilnya').html('<div class="result-error p-4 rounded-lg mt-4 text-center font-semibold">Connection error or server not responding.</div>');
                }
            });
        }
        $(document).ready(function() { $('#submitCekKuota').off('click').on('click', cekKuota); $('#msisdn').off('keypress').on('keypress', function (e) { if (e.which === 13) cekKuota(); }); });
    </script>
</body>
</html>
    `;
}

async function handleSubRequest(hostnem) {
  const proxyListURL = 'https://raw.githubusercontent.com/jaka1m/botak/refs/heads/main/cek/proxyList.txt';

  async function getCountryList() {
    try {
      const response = await fetch(proxyListURL);
      if (!response.ok) throw new Error(`Failed to fetch country list: ${response.statusText}`);
      const text = await response.text();
      const lines = text.split('\n').filter(Boolean);
      const countries = {};
      const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
      lines.forEach(line => {
        const parts = line.split(',');
        if (parts.length > 2) {
          const code = parts[2].trim().toUpperCase();
          if (code) countries[code] = regionNames.of(code);
        }
      });
      return Object.entries(countries).map(([code, name]) => ({ code, name }));
    } catch (error) { console.error(error); return []; }
  }

  const countries = await getCountryList();
  const countryOptions = countries.map(c => `<option value="${c.code.toLowerCase()}">${c.name}</option>`).join('\n');

  const html = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geo-VPN | VPN Tunnel | CloudFlare</title>
    <link rel="icon" href="https://geoproject.biz.id/circle-flags/bote.png">
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flag-icon-css/css/flag-icon.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Space Grotesk', sans-serif; background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%); min-height: 100vh; }
        canvas.webgl { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; }
        .container { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; padding: 40px 20px; }
        .card { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border-radius: 24px; padding: 30px; border: 1px solid rgba(255,255,255,0.1); }
        .title { text-align: center; font-size: 2rem; margin-bottom: 30px; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .form-group { margin-bottom: 20px; }
        label { display: block; margin-bottom: 8px; font-weight: 500; color: rgba(255,255,255,0.8); }
        .form-control { width: 100%; padding: 12px 15px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; color: white; font-size: 0.95rem; transition: all 0.3s; }
        .form-control:focus { outline: none; border-color: #667eea; box-shadow: 0 0 10px rgba(102,126,234,0.3); }
        .form-control option { background: #1a1a2e; }
        .btn { width: 100%; padding: 14px; background: linear-gradient(135deg, #667eea, #764ba2); border: none; border-radius: 10px; color: white; font-weight: 600; cursor: pointer; transition: transform 0.3s; margin-top: 10px; }
        .btn:hover { transform: scale(1.02); }
        .loading { display: none; text-align: center; padding: 20px; color: #667eea; margin-top: 20px; }
        .result { display: none; margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px; }
        .result p { word-break: break-all; margin-bottom: 15px; font-size: 0.85rem; color: rgba(255,255,255,0.8); }
        .copy-btns { display: flex; gap: 10px; justify-content: center; }
        .copy-btn { padding: 8px 20px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; color: white; cursor: pointer; transition: all 0.3s; }
        .copy-btn:hover { background: #667eea; transform: translateY(-2px); }
        .error-message { color: #f5576c; text-align: center; margin-top: 15px; font-size: 0.9rem; }
        @media (max-width: 768px) { .title { font-size: 1.5rem; } .card { padding: 20px; } }
    </style>
</head>
<body>
    ${GALAXY_ANIMATION_COMPONENT}
    ${SIDEBAR_COMPONENT}

    <div class="container">
        <div class="card">
            <h1 class="title"><i class="fas fa-link"></i> Sub Link Generator</h1>

            <form id="subLinkForm">
                <div class="form-group">
                    <label><i class="fas fa-mobile-alt"></i> Application</label>
                    <select id="app" class="form-control" required>
                        <option value="v2ray">V2RAY</option>
                        <option value="v2rayng">V2RAYNG</option>
                        <option value="clash">CLASH</option>
                        <option value="nekobox">NEKOBOX</option>
                        <option value="singbox">SINGBOX</option>
                        <option value="surfboard">SURFBOARD</option>
                    </select>
                </div>

                <div class="form-group">
                    <label><i class="fas fa-bug"></i> Bug Host</label>
                    <input type="text" id="bug" class="form-control" placeholder="Example: quiz.int.vidio.com" required>
                </div>

                <div class="form-group">
                    <label><i class="fas fa-cog"></i> Config Type</label>
                    <select id="configType" class="form-control" required>
                        <option value="vless">VLESS</option>
                        <option value="trojan">TROJAN</option>
                        <option value="shadowsocks">SHADOWSOCKS</option>
                        <option value="mix">ALL CONFIG</option>
                    </select>
                </div>

                <div class="form-group">
                    <label><i class="fas fa-lock"></i> TLS</label>
                    <select id="tls" class="form-control">
                        <option value="true">TRUE</option>
                        <option value="false">FALSE</option>
                    </select>
                </div>

                <div class="form-group">
                    <label><i class="fas fa-asterisk"></i> Wildcard</label>
                    <select id="wildcard" class="form-control">
                        <option value="true">TRUE</option>
                        <option value="false">FALSE</option>
                    </select>
                </div>

                <div class="form-group">
                    <label><i class="fas fa-globe"></i> Country</label>
                    <select id="country" class="form-control">
                        <option value="all">ALL COUNTRY</option>
                        <option value="random">RANDOM</option>
                        ${countryOptions}
                    </select>
                </div>

                <div class="form-group">
                    <label><i class="fas fa-list-ol"></i> Config Limit</label>
                    <input type="number" id="limit" class="form-control" min="1" max="100" placeholder="Max 100" required>
                </div>

                <button type="submit" class="btn"><i class="fas fa-magic"></i> Generate Sub Link</button>
            </form>

            <div id="loading" class="loading"><i class="fas fa-spinner fa-spin"></i> Generating Link...</div>
            <div id="error-message" class="error-message"></div>

            <div id="result" class="result">
                <p id="generated-link"></p>
                <div class="copy-btns">
                    <button id="copyLink" class="copy-btn"><i class="fas fa-copy"></i> Copy Link</button>
                    <button id="openLink" class="copy-btn"><i class="fas fa-external-link-alt"></i> Open Link</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('subLinkForm');
            const loadingEl = document.getElementById('loading');
            const resultEl = document.getElementById('result');
            const generatedLinkEl = document.getElementById('generated-link');
            const copyLinkBtn = document.getElementById('copyLink');
            const openLinkBtn = document.getElementById('openLink');
            const errorMessageEl = document.getElementById('error-message');
            const appSelect = document.getElementById('app');
            const configTypeSelect = document.getElementById('configType');

            const elements = {
                app: document.getElementById('app'),
                bug: document.getElementById('bug'),
                configType: document.getElementById('configType'),
                tls: document.getElementById('tls'),
                wildcard: document.getElementById('wildcard'),
                country: document.getElementById('country'),
                limit: document.getElementById('limit')
            };

            appSelect.addEventListener('change', () => {
                const selectedApp = appSelect.value;
                const shadowsocksOption = configTypeSelect.querySelector('option[value="shadowsocks"]');
                if (selectedApp === 'surfboard') {
                    configTypeSelect.value = 'trojan';
                    shadowsocksOption.disabled = true;
                } else { shadowsocksOption.disabled = false; }
            });

            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                loadingEl.style.display = 'block';
                resultEl.style.display = 'none';
                errorMessageEl.textContent = '';

                try {
                    const requiredFields = ['bug', 'limit'];
                    for (let field of requiredFields) {
                        if (!elements[field].value.trim()) throw new Error(\`Please fill \${field === 'bug' ? 'Bug Host' : 'Config Limit'}\`);
                    }

                    const params = new URLSearchParams({
                        type: elements.configType.value,
                        bug: elements.bug.value.trim(),
                        tls: elements.tls.value,
                        wildcard: elements.wildcard.value,
                        limit: elements.limit.value,
                        ...(elements.country.value !== 'all' && { country: elements.country.value })
                    });

                    const generatedLink = \`/vpn/\${elements.app.value}?\${params.toString()}\`;
                    await new Promise(resolve => setTimeout(resolve, 500));

                    loadingEl.style.display = 'none';
                    resultEl.style.display = 'block';
                    generatedLinkEl.textContent = \`https://\${window.location.hostname}\${generatedLink}\`;

                    copyLinkBtn.onclick = async () => {
                        try {
                            await navigator.clipboard.writeText(\`https://\${window.location.hostname}\${generatedLink}\`);
                            Swal.fire({ icon: 'success', title: 'Success!', text: 'Link copied!', background: 'rgba(30, 41, 59, 0.9)', color: '#f1f5f9' });
                        } catch { Swal.fire({ icon: 'error', title: 'Failed!', text: 'Failed to copy link.', background: 'rgba(30, 41, 59, 0.9)', color: '#f1f5f9' }); }
                    };
                    openLinkBtn.onclick = () => { window.open(generatedLink, '_blank'); };
                } catch (error) {
                    loadingEl.style.display = 'none';
                    errorMessageEl.textContent = error.message;
                    console.error(error);
                }
            });
        });
    </script>
</body>
</html>
 `;
  return html;
}

async function handleWebRequest(request) {
    const cfApi = new CloudflareApi();
    const dynamicDomains = await cfApi.getDomainList();
    const suffixWithService = `.${scriptConfig.SERVICE_NAME}.${scriptConfig.ROOT_DOMAIN}`;
    const suffixRootOnly = `.${scriptConfig.ROOT_DOMAIN}`;
    const dynamicWildcards = dynamicDomains.map(d => {
        const hostname = d.hostname;
        if (hostname.endsWith(suffixWithService)) return hostname.slice(0, -suffixWithService.length);
        if (hostname.endsWith(suffixRootOnly)) return hostname.slice(0, -suffixRootOnly.length);
        return hostname;
    });

    const allWildcards = [...new Set([...wildcards, ...dynamicWildcards])];

    const fetchConfigs = async () => {
      try {
        const rawProxyList = await getProxyList();
        let pathCounters = {};
        const configs = rawProxyList.map((config) => {
            const countryCode = config.country;
            if (!pathCounters[countryCode]) pathCounters[countryCode] = 1;
            const path = `/${countryCode}${pathCounters[countryCode]}`;
            pathCounters[countryCode]++;
            return { ip: config.proxyIP, port: config.proxyPort, countryCode: countryCode, isp: config.org, path: path };
        });
        return configs;
      } catch (error) { console.error('Error fetching configurations:', error); return []; }
    };

function buildCountryFlag() {
  const flagList = cachedProxyList.map((proxy) => proxy.country);
  const uniqueFlags = new Set(flagList);
  let flagElement = "";
  for (const flag of uniqueFlags) {
    if (flag && flag !== "Unknown") {
      try {
        flagElement += `<a href="/web?page=${page}&search=${flag}" class="py-0.5">
          <span class="flag-circle flag-icon flag-icon-${flag.toLowerCase()}" style="display: inline-block; width: 30px; height: 30px; margin: 2px; border: 1px solid #667eea; border-radius: 30%;"></span>
        </a>`;
      } catch (err) { console.error(`Error generating flag for country: ${flag}`, err); }
    }
  }
  return flagElement;
}

    const getFlagEmoji = (countryCode) => {
      if (!countryCode) return '🏳️';
      return countryCode.toUpperCase().split('').map((char) => String.fromCodePoint(0x1f1e6 - 65 + char.charCodeAt(0))).join('');
    };

    const url = new URL(request.url);
    const rootDomain = scriptConfig.ROOT_DOMAIN || url.hostname.replace(/^[^.]+\./, '');
    const serviceName = scriptConfig.SERVICE_NAME;
    const hostName = rootDomain;
    const page = parseInt(url.searchParams.get('page')) || 1;
    const searchQuery = url.searchParams.get('search') || '';
    const selectedWildcard = url.searchParams.get('wildcard') || '';
    const selectedConfigType = url.searchParams.get('configType') || 'tls';
    const configsPerPage = 10;

    const configs = await fetchConfigs();
    const totalConfigs = configs.length;

    let filteredConfigs = configs;
    if (searchQuery.includes(':')) {
        filteredConfigs = configs.filter((config) => `${config.ip}:${config.port}`.includes(searchQuery));
    } else if (searchQuery.length === 2) {
        filteredConfigs = configs.filter((config) => config.countryCode.toLowerCase().includes(searchQuery.toLowerCase()));
    } else if (searchQuery.length > 2) {
        filteredConfigs = configs.filter((config) => config.ip.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (`${config.ip}:${config.port}`).includes(searchQuery.toLowerCase()) ||
            config.isp.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    const totalFilteredConfigs = filteredConfigs.length;
    const totalPages = Math.ceil(totalFilteredConfigs / configsPerPage);
    const startIndex = (page - 1) * configsPerPage;
    const endIndex = Math.min(startIndex + configsPerPage, totalFilteredConfigs);
    const visibleConfigs = filteredConfigs.slice(startIndex, endIndex);

    let tableHTML = `
    <div class="overflow-x-auto relative shadow-lg rounded-lg mt-6 bg-gray-800 bg-opacity-40 border border-gray-700">
    <table class="w-full text-sm text-left text-gray-400">
        <thead class="text-xs text-gray-400 uppercase bg-gray-700 bg-opacity-50">
            <tr>
                <th scope="col" class="py-3 px-6 text-center">No.</th>
                <th scope="col" class="py-3 px-6 text-center">IP:PORT</th>
                <th scope="col" class="py-3 px-6 text-center">Status</th>
                <th scope="col" class="py-3 px-6 text-center">Country</th>
                <th scope="col" class="py-3 px-6 text-center">ISP</th>
                <th scope="col" class="py-3 px-6 text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
    `;

    visibleConfigs.forEach((config, index) => {
        const rowNumber = startIndex + index + 1;
        const uuid = generateUUIDv4();
        const wildcard = selectedWildcard ? selectedWildcard : `${serviceName}.${hostName}`;
        const modifiedHostName = selectedWildcard ? `${selectedWildcard}.${serviceName}.${hostName}` : `${serviceName}.${hostName}`;
        const ipPort = `${config.ip}:${config.port}`;
        const path2 = encodeURIComponent(`/${config.ip}=${config.port}`);
        const subP = `/Free-VPN-CF-Geo-Project`;

        const fragment = `(${config.countryCode}) ${config.isp}${getFlagEmoji(config.countryCode)}`;
        const encodedFragment = encodeURIComponent(fragment);

        const vlessTLSSimple = `vless://${uuid}@${wildcard}:443?encryption=none&security=tls&sni=${modifiedHostName}&fp=randomized&type=ws&host=${modifiedHostName}&path=${encodeURIComponent(subP + config.path.toUpperCase())}#${encodedFragment}`;
        const vlessTLSRibet = `vless://${uuid}@${wildcard}:443?encryption=none&security=tls&sni=${modifiedHostName}&fp=randomized&type=ws&host=${modifiedHostName}&path=${subP}${path2}#${encodedFragment}`;
        const trojanTLSSimple = `trojan://${uuid}@${wildcard}:443?encryption=none&security=tls&sni=${modifiedHostName}&fp=randomized&type=ws&host=${modifiedHostName}&path=${encodeURIComponent(subP + config.path.toUpperCase())}#${encodedFragment}`;
        const trojanTLSRibet = `trojan://${uuid}@${wildcard}:443?encryption=none&security=tls&sni=${modifiedHostName}&fp=randomized&type=ws&host=${modifiedHostName}&path=${subP}${path2}#${encodedFragment}`;
        const ssTLSSimple = `ss://${btoa(`none:${uuid}`)}%3D@${wildcard}:443?encryption=none&type=ws&host=${modifiedHostName}&path=${encodeURIComponent(subP + config.path.toUpperCase())}&security=tls&sni=${modifiedHostName}#${encodedFragment}`;
        const ssTLSRibet = `ss://${btoa(`none:${uuid}`)}%3D@${wildcard}:443?encryption=none&type=ws&host=${modifiedHostName}&path=${subP}${path2}&security=tls&sni=${modifiedHostName}#${encodedFragment}`;

        const vlessNTLSSimple = `vless://${uuid}@${wildcard}:80?path=${encodeURIComponent(subP + config.path.toUpperCase())}&security=none&encryption=none&host=${modifiedHostName}&fp=randomized&type=ws&sni=${modifiedHostName}#${encodedFragment}`;
        const vlessNTLSRibet = `vless://${uuid}@${wildcard}:80?path=${subP}${path2}&security=none&encryption=none&host=${modifiedHostName}&fp=randomized&type=ws&sni=${modifiedHostName}#${encodedFragment}`;
        const trojanNTLSSimple = `trojan://${uuid}@${wildcard}:80?path=${encodeURIComponent(subP + config.path.toUpperCase())}&security=none&encryption=none&host=${modifiedHostName}&fp=randomized&type=ws&sni=${modifiedHostName}#${encodedFragment}`;
        const trojanNTLSRibet = `trojan://${uuid}@${wildcard}:80?path=${subP}${path2}&security=none&encryption=none&host=${modifiedHostName}&fp=randomized&type=ws&sni=${modifiedHostName}#${encodedFragment}`;
        const ssNTLSSimple = `ss://${btoa(`none:${uuid}`)}%3D@${wildcard}:80?encryption=none&type=ws&host=${modifiedHostName}&path=${encodeURIComponent(subP + config.path.toUpperCase())}&security=none&sni=${modifiedHostName}#${encodedFragment}`;
        const ssNTLSRibet = `ss://${btoa(`none:${uuid}`)}%3D@${wildcard}:80?encryption=none&type=ws&host=${modifiedHostName}&path=${subP}${path2}&security=none&sni=${modifiedHostName}#${encodedFragment}`;

        let vlessSimple, vlessRibet, trojanSimple, trojanRibet, ssSimple, ssRibet;
        if (selectedConfigType === 'tls') {
            vlessSimple = vlessTLSSimple; vlessRibet = vlessTLSRibet;
            trojanSimple = trojanTLSSimple; trojanRibet = trojanTLSRibet;
            ssSimple = ssTLSSimple; ssRibet = ssTLSRibet;
        } else {
            vlessSimple = vlessNTLSSimple; vlessRibet = vlessNTLSRibet;
            trojanSimple = trojanNTLSSimple; trojanRibet = trojanNTLSRibet;
            ssSimple = ssNTLSSimple; ssRibet = ssNTLSRibet;
        }

        tableHTML += `
            <tr class="border-b border-gray-700 hover:bg-gray-600 bg-opacity-20 hover:bg-opacity-40 proxy-row" data-ip-port="${ipPort}">
                <td class="py-4 px-6">${rowNumber}.<\/td>
                <td class="py-4 px-6">${config.ip}:${config.port}<\/td>
                <td class="py-4 px-6 proxy-status"><div class="spinner-glow" style="width: 20px; height: 20px;"></div><\/td>
                <td class="py-4 px-6">
                    <div class="flex items-center">
                        <img width="20" src="https://hatscripts.github.io/circle-flags/flags/${config.countryCode.toLowerCase()}.svg" alt="${config.countryCode} flag" class="mr-2"/>
                        ${config.countryCode}
                    </div>
                <\/td>
                <td class="py-4 px-6">${config.isp}<\/td>
                <td class="py-4 px-6 text-center">
                    <div class="flex justify-center space-x-2">
                        <button class="bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-1 text-white font-semibold transition-colors duration-200 text-xs"
                                onclick='showOptions("VLess", "${vlessRibet.replace(/"/g, '&quot;')}", "${vlessSimple.replace(/"/g, '&quot;')}", ${JSON.stringify(config).replace(/'/g, "&#39;")})'>
                            VLESS
                        </button>
                        <button class="bg-purple-600 hover:bg-purple-700 rounded-md px-3 py-1 text-white font-semibold transition-colors duration-200 text-xs"
                                onclick='showOptions("Trojan", "${trojanRibet.replace(/"/g, '&quot;')}", "${trojanSimple.replace(/"/g, '&quot;')}", ${JSON.stringify(config).replace(/'/g, "&#39;")})'>
                            TROJAN
                        </button>
                        <button class="bg-green-600 hover:bg-green-700 rounded-md px-3 py-1 text-white font-semibold transition-colors duration-200 text-xs"
                                onclick='showOptions("SS", "${ssRibet.replace(/"/g, '&quot;')}", "${ssSimple.replace(/"/g, '&quot;')}", ${JSON.stringify(config).replace(/'/g, "&#39;")})'>
                            SHADOWSOCKS
                        </button>
                    </div>
                <\/td>
            </tr>
        `;
    });

    tableHTML += `</tbody><\/table><\/div>`;

    const showOptionsScript = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <script>
        function showOptions(type, ribet, simple, config) {
            Swal.fire({
                width: '270px',
                html: \`
                    <div class="px-1 py-1 text-center">
                        <span class="flag-circle flag-icon flag-icon-\${config.countryCode.toLowerCase()}" style="width: 60px; height: 60px; border-radius: 50%; display: inline-block;"></span>
                    </div>
                    <div class="mt-3">
                        <div class="h-px bg-[#4682b4] shadow-sm"></div>
                        <div class="text-xs">IP : \${config.ip}</div>
                        <div class="text-xs">ISP : \${config.isp}</div>
                        <div class="text-xs">Country : \${config.countryCode}</div>
                        <div class="h-px bg-[#4682b4] shadow-sm"></div>
                        <div class="mt-3">
                            <button class="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-opacity-80 py-2 px-3 text-xs rounded-md text-white font-semibold shadow-md" onclick="copy('\${simple}')">COPY PATH COUNTRY</button>
                        </div>
                        <div class="mt-3">
                            <button class="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-opacity-80 py-2 px-3 text-xs rounded-md text-white font-semibold shadow-md" onclick="copy('\${ribet}')">COPY PATH IP PORT</button>
                        </div>
                        <div class="mt-3">
                            <button class="bg-gradient-to-r from-red-500 to-red-700 bg-opacity-80 py-2 px-3 text-xs rounded-md text-white font-semibold shadow-md" onclick="Swal.close()">Close</button>
                        </div>
                    </div>
                \`,
                showCloseButton: false,
                showConfirmButton: false,
                background: 'rgba(6, 18, 67, 0.70)',
                color: 'white',
                position: 'center',
                showClass: { popup: 'animate__animated animate__fadeInLeft' },
                hideClass: { popup: 'animate__animated animate__fadeOutRight' }
            });
        }
    <\/script>
    `;

    const paginationButtons = [];
    const pageRange = 2;
    for (let i = Math.max(1, page - pageRange); i <= Math.min(totalPages, page + pageRange); i++) {
      paginationButtons.push(`<a href="?page=${i}&wildcard=${encodeURIComponent(selectedWildcard)}&configType=${encodeURIComponent(selectedConfigType)}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}" class="pagination-number ${i === page ? 'active' : ''}">${i}</a>`);
    }
    const prevPage = page > 1 ? `<a href="?page=${page - 1}&wildcard=${encodeURIComponent(selectedWildcard)}&configType=${encodeURIComponent(selectedConfigType)}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}" class="pagination-arrow">◁</a>` : '';
    const nextPage = page < totalPages ? `<a href="?page=${page + 1}&wildcard=${encodeURIComponent(selectedWildcard)}&configType=${encodeURIComponent(selectedConfigType)}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}" class="pagination-arrow">▷</a>` : '';

  return new Response(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geo-VPN | VPN Tunnel | CloudFlare</title>
    <link rel="icon" href="https://geoproject.biz.id/circle-flags/bote.png">
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flag-icon-css/css/flag-icon.min.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.1/css/all.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Space Grotesk', sans-serif; background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%); min-height: 100vh; }
        canvas.webgl { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; }
        .quantum-container { position: relative; z-index: 1; max-width: 1400px; margin: 0 auto; padding: 20px; }
        .wildcard-dropdown { display: flex; gap: 10px; align-items: center; justify-content: flex-end; margin-bottom: 20px; flex-wrap: wrap; }
        .wildcard-dropdown select, .wildcard-dropdown button { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; padding: 8px 12px; color: white; cursor: pointer; transition: all 0.3s; }
        .wildcard-dropdown select:hover, .wildcard-dropdown button:hover { background: rgba(102,126,234,0.3); transform: translateY(-2px); }
        .pagination-number, .pagination-arrow { display: inline-block; padding: 8px 12px; margin: 0 3px; background: rgba(255,255,255,0.1); border-radius: 8px; color: white; text-decoration: none; transition: all 0.3s; }
        .pagination-number:hover, .pagination-arrow:hover { background: #667eea; transform: translateY(-2px); }
        .pagination-number.active { background: linear-gradient(135deg, #667eea, #764ba2); }
        .quantum-pagination { text-align: center; margin-top: 30px; }
        footer { text-align: center; padding: 30px; color: rgba(255,255,255,0.5); margin-top: 40px; }
        .social-icons { display: flex; justify-content: center; gap: 20px; margin-bottom: 15px; }
        .social-icon { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); transition: all 0.3s; }
        .social-icon:hover { transform: translateY(-3px); background: #667eea; }
        .status-badge { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: 600; }
        .neon-active { background: rgba(56,239,125,0.2); color: #38ef7d; border: 1px solid rgba(56,239,125,0.3); }
        .neon-dead { background: rgba(245,87,108,0.2); color: #f5576c; border: 1px solid rgba(245,87,108,0.3); }
        .delay-badge { font-size: 0.7rem; color: rgba(255,255,255,0.6); margin-left: 5px; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .proxy-row { animation: fadeInUp 0.3s ease-out; }
        @media (max-width: 768px) { .quantum-container { padding: 10px; } .wildcard-dropdown { justify-content: center; } }
    </style>
    <script>
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else { document.documentElement.classList.remove('dark'); }
    </script>
</head>
<body>
    ${GALAXY_ANIMATION_COMPONENT}
    ${SIDEBAR_COMPONENT}
    <div class="quantum-container">
        <div class="wildcard-dropdown">
            <button onclick="toggleWildcardsWindow()" class="bg-gradient-to-r from-green-500 to-green-700 rounded-full p-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                </svg>
            </button>
            <select id="wildcard" name="wildcard" onchange="onWildcardChange(event)" style="width: 100px;">
                <option value="" ${!selectedWildcard ? 'selected' : ''}>No Wildcard</option>
                ${allWildcards.map(w => `<option value="${w}" ${selectedWildcard === w ? 'selected' : ''}>${w}</option>`).join('')}
            </select>
            <select id="configType" name="configType" onchange="onConfigTypeChange(event)" style="width: 80px;">
                <option value="tls" ${selectedConfigType === 'tls' ? 'selected' : ''}>TLS</option>
                <option value="non-tls" ${selectedConfigType === 'non-tls' ? 'selected' : ''}>NON TLS</option>
            </select>
            <a href="${telegrambot}" target="_blank">
                <button class="bg-gradient-to-r from-green-400 to-green-600 rounded-full p-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12A10 10 0 0 1 12 2A10 10 0 0 1 2 12A10 10 0 0 1 12 22A10 10 0 0 1 22 12z"/><path d="M7 10l5 5l5-5"/></svg>
                </button>
            </a>
        </div>

        <div class="w-full h-12 px-2 py-1 flex items-center space-x-2 shadow-lg border border-green-500 rounded-lg overflow-x-auto">
            ${buildCountryFlag()}
        </div>

        ${tableHTML}
        ${showOptionsScript}

        <div class="quantum-pagination">
            ${prevPage}
            ${paginationButtons.join('')}
            ${nextPage}
        </div>

        <div style="text-align: center; margin-top: 16px; color: #667eea;">
            Showing ${startIndex + 1} to ${endIndex} of ${totalFilteredConfigs} Proxies
        </div>

        <footer>
            <div class="social-icons">
                <a href="https://github.com/jaka1m" class="social-icon"><i class="fab fa-github"></i></a>
                <a href="https://wa.me/6282276031731" class="social-icon"><i class="fab fa-whatsapp"></i></a>
                <a href="https://t.me/sampiiiiu" class="social-icon"><i class="fab fa-telegram-plane"></i></a>
            </div>
            <div><p>© GEO PROJECT</p></div>
        </footer>
    </div>

    <div id="wildcards-window" class="fixed hidden z-30 top-0 right-0 w-full h-full flex justify-center items-center">
        <div class="w-[75%] max-w-md h-auto flex flex-col gap-2 p-4 rounded-lg bg-blue-500 bg-opacity-20 backdrop-blur-md border border-blue-300 text-white">
            <div class="flex w-full gap-2">
                <input id="new-domain-input" type="text" placeholder="Input wildcard" class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button id="add-domain-button" onclick="registerDomain()" class="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
                </button>
            </div>
            <div id="container-domains" class="w-full h-32 rounded-md flex flex-col gap-1 overflow-y-scroll p-2 bg-gray-900 text-white"></div>
            <div class="flex w-full gap-2">
                <input id="delete-domain-input" type="number" placeholder="Input Number" class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <input id="delete-domain-password" type="password" placeholder="Password" class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button id="delete-domain-button" onclick="deleteDomainByNumber()" class="p-2 rounded-full bg-red-600 hover:bg-red-700 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd"/></svg>
                </button>
            </div>
            <div id="wildcard-loading" class="hidden w-full text-center">
                <div class="popup-progress"><div class="popup-progress-fill" id="popupProgress"></div></div>
                <p style="margin-top: 10px;">Loading...</p>
            </div>
            <button onclick="toggleWildcardsWindow()" class="mt-1 p-3 rounded-lg bg-red-500 hover:bg-red-600 text-white">Close</button>
        </div>
    </div>

    <script>
        function copy(text) {
            navigator.clipboard.writeText(text).then(() => {
                Swal.fire({ icon: 'success', background: 'rgba(6, 18, 67, 0.95)', color: 'white', title: 'Copied!', width: '200px', timer: 1200, showConfirmButton: false });
            }).catch(() => {
                Swal.fire({ icon: 'error', title: 'Failed', text: 'Please try again!', background: 'rgba(6, 18, 67, 0.95)', color: 'white', timer: 1500 });
            });
        }

        const updateURL = (params) => {
            const url = new URL(window.location.href);
            params.forEach(({ key, value }) => {
                if (key === 'search' && value) url.searchParams.set('page', '1');
                if (value) url.searchParams.set(key, value);
                else url.searchParams.delete(key);
            });
            window.location.href = url.toString();
        };

        function onWildcardChange(event) { updateURL([{ key: 'wildcard', value: event.target.value }]); }
        function onConfigTypeChange(event) { updateURL([{ key: 'configType', value: event.target.value }]); }

        function executeSearch() {
            const query = document.getElementById('search-bar').value.trim();
            if (query) updateURL([{ key: 'search', value: query }]);
            else Swal.fire({ title: 'Error', text: 'Please enter a search term.', icon: 'error', background: 'rgba(6, 18, 67, 0.95)', color: 'white', timer: 1500 });
        }

        document.getElementById('search-bar')?.addEventListener('keydown', (event) => { if (event.key === 'Enter') executeSearch(); });
        document.getElementById('search-button')?.addEventListener('click', executeSearch);

        document.addEventListener('DOMContentLoaded', () => {
            const rows = document.querySelectorAll('.proxy-row');
            const checkAllProxies = async () => {
                for (const row of rows) {
                    const ipPort = row.dataset.ipPort;
                    const statusElement = row.querySelector('.proxy-status');
                    const healthCheckUrl = \`/geo-ip?ip=\${ipPort}\`;
                    try {
                        const response = await fetch(healthCheckUrl);
                        if (!response.ok) throw new Error('Network response was not ok');
                        const data = await response.json();
                        const status = data.status || 'UNKNOWN';
                        let delay = parseFloat(data.delay) || NaN;
                        let delayHTML = !isNaN(delay) ? \`<span class="delay-badge">(\${Math.round(delay)}ms)</span>\` : '<span class="delay-badge">(N/A)</span>';
                        let statusHTML = status === 'ACTIVE' ? '<div class="status-badge neon-active"><i class="fas fa-bolt"></i><span>ACTIVE</span></div>' : '<div class="status-badge neon-dead"><i class="fas fa-times-circle"></i><span>DEAD</span></div>';
                        statusElement.innerHTML = statusHTML + delayHTML;
                    } catch (error) {
                        statusElement.innerHTML = '<div class="status-badge neon-dead"><i class="fas fa-exclamation-triangle"></i><span>ERROR</span></div><span class="delay-badge">(! ms)</span>';
                    }
                    await new Promise(resolve => setTimeout(resolve, 200));
                }
            };
            checkAllProxies();
        });

        let domains = [];
        const wildcardsWindow = document.getElementById('wildcards-window');
        const domainsContainer = document.getElementById('container-domains');

        async function loadDomains() {
            try {
                const response = await fetch('/api/v1/domains');
                if (response.ok) {
                    domains = await response.json();
                    domainsContainer.innerHTML = domains.map((d, i) => \`<div>\${i + 1}. \${d.hostname}</div>\`).join('');
                }
            } catch (error) { console.error('Error loading domains:', error); }
        }

        function toggleWildcardsWindow() {
            if (wildcardsWindow.classList.contains('hidden')) { loadDomains(); wildcardsWindow.classList.remove('hidden'); }
            else { wildcardsWindow.classList.add('hidden'); }
        }

        async function registerDomain() {
            const input = document.getElementById('new-domain-input');
            const domain = input.value.trim();
            if (!domain) return;
            try {
                const response = await fetch('/api/v1/domains', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ domain }),
                });
                if (response.ok) { input.value = ''; await loadDomains(); }
                else { alert('Failed to register domain: ' + await response.text()); }
            } catch (error) { console.error('Error registering domain:', error); alert('An error occurred while registering the domain.'); }
        }

        async function deleteDomainByNumber() {
            const numberInput = document.getElementById('delete-domain-input');
            const passwordInput = document.getElementById('delete-domain-password');
            const number = parseInt(numberInput.value, 10);
            const password = passwordInput.value;
            if (isNaN(number) || number < 1 || number > domains.length) { alert('Invalid number'); return; }
            const domainToDelete = domains[number - 1];
            try {
                const response = await fetch('/api/v1/domains', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: domainToDelete.id, password: password }),
                });
                if (response.ok) { numberInput.value = ''; passwordInput.value = ''; await loadDomains(); }
                else { alert('Failed to delete domain: ' + await response.text()); }
            } catch (error) { console.error('Error deleting domain:', error); alert('An error occurred while deleting the domain.'); }
        }
    </script>
</body>
</html>
  `, { headers: { 'Content-Type': 'text/html' } });
}

// WebSocket and other protocol handling functions (unchanged from original)
async function websockerHandler(request, proxyIP) {
  const webSocketPair = new WebSocketPair();
  const [client, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let addressLog = "", portLog = "";
  const log = (info, event) => { console.log(`[${addressLog}:${portLog}] ${info}`, event || ""); };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);
  let remoteSocketWrapper = { value: null };
  let udpStreamWrite = null;
  let isDNS = false;
  readableWebSocketStream.pipeTo(new WritableStream({
    async write(chunk, controller) {
      if (isDNS && udpStreamWrite) return udpStreamWrite(chunk);
      if (remoteSocketWrapper.value) {
        const writer = remoteSocketWrapper.value.writable.getWriter();
        await writer.write(chunk);
        writer.releaseLock();
        return;
      }
      const protocol = await protocolSniffer(chunk);
      let protocolHeader;
      if (protocol === "Trojan") protocolHeader = parseTrojanHeader(chunk);
      else if (protocol === "VLESS") protocolHeader = parseVlessHeader(chunk);
      else if (protocol === "Shadowsocks") protocolHeader = parseShadowsocksHeader(chunk);
      else throw new Error("Unknown Protocol!");
      addressLog = protocolHeader.addressRemote;
      portLog = `${protocolHeader.portRemote} -> ${protocolHeader.isUDP ? "UDP" : "TCP"}`;
      if (protocolHeader.hasError) throw new Error(protocolHeader.message);
      if (protocolHeader.isUDP) {
        if (protocolHeader.portRemote === 53) isDNS = true;
        else throw new Error("UDP only support for DNS port 53");
      }
      if (isDNS) {
        const { write } = await handleUDPOutbound(webSocket, protocolHeader.version, log);
        udpStreamWrite = write;
        udpStreamWrite(protocolHeader.rawClientData);
        return;
      }
      handleTCPOutBound(remoteSocketWrapper, protocolHeader.addressRemote, protocolHeader.portRemote, protocolHeader.rawClientData, webSocket, protocolHeader.version, log, proxyIP);
    },
    close() { log(`readableWebSocketStream is close`); },
    abort(reason) { log(`readableWebSocketStream is abort`, JSON.stringify(reason)); }
  })).catch((err) => { log("readableWebSocketStream pipeTo error", err); });
  return new Response(null, { status: 101, webSocket: client });
}

async function protocolSniffer(buffer) {
  if (buffer.byteLength >= 62) {
    const trojanDelimiter = new Uint8Array(buffer.slice(56, 60));
    if (trojanDelimiter[0] === 0x0d && trojanDelimiter[1] === 0x0a && (trojanDelimiter[2] === 0x01 || trojanDelimiter[2] === 0x03 || trojanDelimiter[2] === 0x7f) && (trojanDelimiter[3] === 0x01 || trojanDelimiter[3] === 0x03 || trojanDelimiter[3] === 0x04)) return "Trojan";
  }
  const vlessDelimiter = new Uint8Array(buffer.slice(1, 17));
  if (arrayBufferToHex(vlessDelimiter).match(/^\w{8}\w{4}4\w{3}[89ab]\w{3}\w{12}$/)) return "VLESS";
  return "Shadowsocks";
}

async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, responseHeader, log, proxyIP) {
  async function connectAndWrite(address, port) {
    const tcpSocket = connect({ hostname: address, port: port });
    remoteSocket.value = tcpSocket;
    log(`connected to ${address}:${port}`);
    const writer = tcpSocket.writable.getWriter();
    await writer.write(rawClientData);
    writer.releaseLock();
    return tcpSocket;
  }
  async function retry() {
    const tcpSocket = await connectAndWrite(proxyIP.split(/[:=-]/)[0] || addressRemote, proxyIP.split(/[:=-]/)[1] || portRemote);
    tcpSocket.closed.catch((error) => { console.log("retry tcpSocket closed error", error); }).finally(() => { safeCloseWebSocket(webSocket); });
    remoteSocketToWS(tcpSocket, webSocket, responseHeader, null, log);
  }
  const tcpSocket = await connectAndWrite(addressRemote, portRemote);
  remoteSocketToWS(tcpSocket, webSocket, responseHeader, retry, log);
}

function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
  let readableStreamCancel = false;
  const stream = new ReadableStream({
    start(controller) {
      webSocketServer.addEventListener("message", (event) => { if (!readableStreamCancel) controller.enqueue(event.data); });
      webSocketServer.addEventListener("close", () => { safeCloseWebSocket(webSocketServer); if (!readableStreamCancel) controller.close(); });
      webSocketServer.addEventListener("error", (err) => { log("webSocketServer has error"); controller.error(err); });
      const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
      if (error) controller.error(error);
      else if (earlyData) controller.enqueue(earlyData);
    },
    cancel(reason) { if (!readableStreamCancel) { log(`ReadableStream was canceled, due to ${reason}`); readableStreamCancel = true; safeCloseWebSocket(webSocketServer); } }
  });
  return stream;
}

function parseVmessHeader(vmessBuffer) {}

function parseShadowsocksHeader(ssBuffer) {
  const view = new DataView(ssBuffer);
  const addressType = view.getUint8(0);
  let addressLength = 0, addressValueIndex = 1, addressValue = "";
  switch (addressType) {
    case 1: addressLength = 4; addressValue = new Uint8Array(ssBuffer.slice(addressValueIndex, addressValueIndex + addressLength)).join("."); break;
    case 3: addressLength = new Uint8Array(ssBuffer.slice(addressValueIndex, addressValueIndex + 1))[0]; addressValueIndex += 1; addressValue = new TextDecoder().decode(ssBuffer.slice(addressValueIndex, addressValueIndex + addressLength)); break;
    case 4: addressLength = 16; const dataView = new DataView(ssBuffer.slice(addressValueIndex, addressValueIndex + addressLength)); const ipv6 = []; for (let i = 0; i < 8; i++) ipv6.push(dataView.getUint16(i * 2).toString(16)); addressValue = ipv6.join(":"); break;
    default: return { hasError: true, message: `Invalid addressType for Shadowsocks: ${addressType}` };
  }
  if (!addressValue) return { hasError: true, message: `Destination address empty, address type is: ${addressType}` };
  const portIndex = addressValueIndex + addressLength;
  const portRemote = new DataView(ssBuffer.slice(portIndex, portIndex + 2)).getUint16(0);
  return { hasError: false, addressRemote: addressValue, addressType: addressType, portRemote: portRemote, rawDataIndex: portIndex + 2, rawClientData: ssBuffer.slice(portIndex + 2), version: null, isUDP: portRemote == 53 };
}

function parseVlessHeader(vlessBuffer) {
  const version = new Uint8Array(vlessBuffer.slice(0, 1));
  let isUDP = false;
  const optLength = new Uint8Array(vlessBuffer.slice(17, 18))[0];
  const cmd = new Uint8Array(vlessBuffer.slice(18 + optLength, 18 + optLength + 1))[0];
  if (cmd === 1) {} else if (cmd === 2) isUDP = true;
  else return { hasError: true, message: `command ${cmd} is not support, command 01-tcp,02-udp,03-mux` };
  const portIndex = 18 + optLength + 1;
  const portRemote = new DataView(vlessBuffer.slice(portIndex, portIndex + 2)).getUint16(0);
  let addressIndex = portIndex + 2;
  const addressBuffer = new Uint8Array(vlessBuffer.slice(addressIndex, addressIndex + 1));
  const addressType = addressBuffer[0];
  let addressLength = 0, addressValueIndex = addressIndex + 1, addressValue = "";
  switch (addressType) {
    case 1: addressLength = 4; addressValue = new Uint8Array(vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)).join("."); break;
    case 2: addressLength = new Uint8Array(vlessBuffer.slice(addressValueIndex, addressValueIndex + 1))[0]; addressValueIndex += 1; addressValue = new TextDecoder().decode(vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)); break;
    case 3: addressLength = 16; const dataView = new DataView(vlessBuffer.slice(addressValueIndex, addressValueIndex + addressLength)); const ipv6 = []; for (let i = 0; i < 8; i++) ipv6.push(dataView.getUint16(i * 2).toString(16)); addressValue = ipv6.join(":"); break;
    default: return { hasError: true, message: `invild addressType is ${addressType}` };
  }
  if (!addressValue) return { hasError: true, message: `addressValue is empty, addressType is ${addressType}` };
  return { hasError: false, addressRemote: addressValue, addressType: addressType, portRemote: portRemote, rawDataIndex: addressValueIndex + addressLength, rawClientData: vlessBuffer.slice(addressValueIndex + addressLength), version: new Uint8Array([version[0], 0]), isUDP: isUDP };
}

function parseTrojanHeader(buffer) {
  const socks5DataBuffer = buffer.slice(58);
  if (socks5DataBuffer.byteLength < 6) return { hasError: true, message: "invalid SOCKS5 request data" };
  let isUDP = false;
  const view = new DataView(socks5DataBuffer);
  const cmd = view.getUint8(0);
  if (cmd == 3) isUDP = true;
  else if (cmd != 1) throw new Error("Unsupported command type!");
  let addressType = view.getUint8(1);
  let addressLength = 0, addressValueIndex = 2, addressValue = "";
  switch (addressType) {
    case 1: addressLength = 4; addressValue = new Uint8Array(socks5DataBuffer.slice(addressValueIndex, addressValueIndex + addressLength)).join("."); break;
    case 3: addressLength = new Uint8Array(socks5DataBuffer.slice(addressValueIndex, addressValueIndex + 1))[0]; addressValueIndex += 1; addressValue = new TextDecoder().decode(socks5DataBuffer.slice(addressValueIndex, addressValueIndex + addressLength)); break;
    case 4: addressLength = 16; const dataView = new DataView(socks5DataBuffer.slice(addressValueIndex, addressValueIndex + addressLength)); const ipv6 = []; for (let i = 0; i < 8; i++) ipv6.push(dataView.getUint16(i * 2).toString(16)); addressValue = ipv6.join(":"); break;
    default: return { hasError: true, message: `invalid addressType is ${addressType}` };
  }
  if (!addressValue) return { hasError: true, message: `address is empty, addressType is ${addressType}` };
  const portIndex = addressValueIndex + addressLength;
  const portRemote = new DataView(socks5DataBuffer.slice(portIndex, portIndex + 2)).getUint16(0);
  return { hasError: false, addressRemote: addressValue, addressType: addressType, portRemote: portRemote, rawDataIndex: portIndex + 4, rawClientData: socks5DataBuffer.slice(portIndex + 4), version: null, isUDP: isUDP };
}

async function remoteSocketToWS(remoteSocket, webSocket, responseHeader, retry, log) {
  let header = responseHeader;
  let hasIncomingData = false;
  await remoteSocket.readable.pipeTo(new WritableStream({
    start() {},
    async write(chunk, controller) {
      hasIncomingData = true;
      if (webSocket.readyState !== 1) { controller.error("webSocket.readyState is not open, maybe close"); }
      if (header) { webSocket.send(await new Blob([header, chunk]).arrayBuffer()); header = null; }
      else { webSocket.send(chunk); }
    },
    close() { log(`remoteConnection!.readable is close with hasIncomingData is ${hasIncomingData}`); },
    abort(reason) { console.error(`remoteSocketToWS has exception `, reason.stack || reason); safeCloseWebSocket(webSocket); }
  })).catch((error) => { console.error(`remoteSocketToWS has exception `, error.stack || error); safeCloseWebSocket(webSocket); });
  if (hasIncomingData === false && retry) { log(`retry`); retry(); }
}

function base64ToArrayBuffer(base64Str) {
  if (!base64Str) return { error: null };
  try {
    base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
    const decode = atob(base64Str);
    const arryBuffer = Uint8Array.from(decode, (c) => c.charCodeAt(0));
    return { earlyData: arryBuffer.buffer, error: null };
  } catch (error) { return { error }; }
}

function arrayBufferToHex(buffer) {
  return [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, "0")).join("");
}

async function handleUDPOutbound(webSocket, responseHeader, log) {
  let isVlessHeaderSent = false;
  const transformStream = new TransformStream({
    start(controller) {},
    transform(chunk, controller) {
      for (let index = 0; index < chunk.byteLength; ) {
        const lengthBuffer = chunk.slice(index, index + 2);
        const udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
        const udpData = new Uint8Array(chunk.slice(index + 2, index + 2 + udpPakcetLength));
        index = index + 2 + udpPakcetLength;
        controller.enqueue(udpData);
      }
    },
    flush(controller) {}
  });
  transformStream.readable.pipeTo(new WritableStream({
    async write(chunk) {
      const resp = await fetch("https://1.1.1.1/dns-query", {
        method: "POST",
        headers: { "content-type": "application/dns-message" },
        body: chunk
      });
      const dnsQueryResult = await resp.arrayBuffer();
      const udpSize = dnsQueryResult.byteLength;
      const udpSizeBuffer = new Uint8Array([(udpSize >> 8) & 0xff, udpSize & 0xff]);
      if (webSocket.readyState === 1) {
        log(`doh success and dns message length is ${udpSize}`);
        if (isVlessHeaderSent) webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
        else { webSocket.send(await new Blob([responseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer()); isVlessHeaderSent = true; }
      }
    }
  })).catch((error) => { log("dns udp has error" + error); });
  const writer = transformStream.writable.getWriter();
  return { write(chunk) { writer.write(chunk); } };
}

function safeCloseWebSocket(socket) {
  try { if (socket.readyState === 1 || socket.readyState === 2) socket.close(); }
  catch (error) { console.error("safeCloseWebSocket error", error); }
}

const getEmojiFlag = (countryCode) => {
  if (!countryCode || countryCode.length !== 2) return '';
  return String.fromCodePoint(...[...countryCode.toUpperCase()].map(char => 0x1F1E6 + char.charCodeAt(0) - 65));
};

// Configuration generation functions (clash, surfboard, singbox, etc.)
async function generateClashSub(type, bug, geo81, tls, country = null, limit = null) {
  const proxyList = await getProxyList();
  let ips = proxyList.map(p => `${p.proxyIP},${p.proxyPort},${p.country},${p.org}`);
  if (country && country.toLowerCase() === 'random') ips = ips.sort(() => Math.random() - 0.5);
  else if (country) ips = ips.filter(line => { const parts = line.split(','); return parts.length > 1 && parts[2].toUpperCase() === country.toUpperCase(); });
  if (limit && !isNaN(limit)) ips = ips.slice(0, limit);
  let conf = '', bex = '', count = 1;
  for (let line of ips) {
    const parts = line.split(',');
    const proxyHost = parts[0], proxyPort = parts[1] || 443;
    const emojiFlag = getEmojiFlag(line.split(',')[2]);
    const sanitize = (text) => text.replace(/[\n\r]+/g, "").trim();
    let ispName = sanitize(`${emojiFlag} (${line.split(',')[2]}) ${line.split(',')[3]} ${count++}`);
    const UUIDS = `${generateUUIDv4()}`;
    const ports = tls ? '443' : '80';
    const snio = tls ? `\n  servername: ${geo81}` : '';
    const snioo = tls ? `\n  cipher: auto` : '';
    if (type === 'vless') {
      bex += `  - ${ispName}\n`;
      conf += `\n- name: ${ispName}\n  server: ${bug}\n  port: ${ports}\n  type: vless\n  uuid: ${UUIDS}${snioo}\n  tls: ${tls}\n  udp: true\n  skip-cert-verify: true\n  network: ws${snio}\n  ws-opts:\n    path: ${pathinfo}${proxyHost}=${proxyPort}\n    headers:\n      Host: ${geo81}`;
    } else if (type === 'trojan') {
      bex += `  - ${ispName}\n`;
      conf += `\n- name: ${ispName}\n  server: ${bug}\n  port: 443\n  type: trojan\n  password: ${UUIDS}\n  udp: true\n  skip-cert-verify: true\n  network: ws\n  sni: ${geo81}\n  ws-opts:\n    path: ${pathinfo}${proxyHost}=${proxyPort}\n    headers:\n      Host: ${geo81}`;
    } else if (type === 'ss') {
      bex += `  - ${ispName}\n`;
      conf += `\n- name: ${ispName}\n  type: ss\n  server: ${bug}\n  port: ${ports}\n  cipher: none\n  password: ${UUIDS}\n  udp: true\n  plugin: v2ray-plugin\n  plugin-opts:\n    mode: websocket\n    tls: ${tls}\n    skip-cert-verify: true\n    host: ${geo81}\n    path: ${pathinfo}${proxyHost}=${proxyPort}\n    mux: false\n    headers:\n      custom: ${geo81}`;
    } else if (type === 'mix') {
      bex += `  - ${ispName} vless\n  - ${ispName} trojan\n  - ${ispName} ss\n`;
      conf += `\n- name: ${ispName} vless\n  server: ${bug}\n  port: ${ports}\n  type: vless\n  uuid: ${UUIDS}\n  cipher: auto\n  tls: ${tls}\n  udp: true\n  skip-cert-verify: true\n  network: ws${snio}\n  ws-opts:\n    path: ${pathinfo}${proxyHost}=${proxyPort}\n    headers:\n      Host: ${geo81}\n- name: ${ispName} trojan\n  server: ${bug}\n  port: 443\n  type: trojan\n  password: ${UUIDS}\n  udp: true\n  skip-cert-verify: true\n  network: ws\n  sni: ${geo81}\n  ws-opts:\n    path: ${pathinfo}${proxyHost}=${proxyPort}\n    headers:\n      Host: ${geo81}\n- name: ${ispName} ss\n  type: ss\n  server: ${bug}\n  port: ${ports}\n  cipher: none\n  password: ${UUIDS}\n  udp: true\n  plugin: v2ray-plugin\n  plugin-opts:\n    mode: websocket\n    tls: ${tls}\n    skip-cert-verify: true\n    host: ${geo81}\n    path: ${pathinfo}${proxyHost}=${proxyPort}\n    mux: false\n    headers:\n      custom: ${geo81}`;
    }
  }
  return `#### BY : GEO PROJECT ####\n\nport: 7890\nsocks-port: 7891\nredir-port: 7892\nmixed-port: 7893\ntproxy-port: 7895\nipv6: false\nmode: rule\nlog-level: silent\nallow-lan: true\nexternal-controller: 0.0.0.0:9090\nsecret: ""\nbind-address: "*"\nunified-delay: true\nprofile:\n  store-selected: true\n  store-fake-ip: true\ndns:\n  enable: true\n  ipv6: false\n  use-host: true\n  enhanced-mode: fake-ip\n  listen: 0.0.0.0:7874\n  nameserver:\n    - 8.8.8.8\n    - 1.0.0.1\n    - https://dns.google/dns-query\n  fallback:\n    - 1.1.1.1\n    - 8.8.4.4\n    - https://cloudflare-dns.com/dns-query\n    - 112.215.203.254\n  default-nameserver:\n    - 8.8.8.8\n    - 1.1.1.1\n    - 112.215.203.254\n  fake-ip-range: 198.18.0.1/16\n  fake-ip-filter:\n    - "*.lan"\n    - "*.localdomain"\n    - "*.example"\n    - "*.invalid"\n    - "*.localhost"\n    - "*.test"\n    - "*.local"\n    - "*.home.arpa"\nproxies:${conf}\nproxy-groups:\n- name: INTERNET\n  type: select\n  disable-udp: true\n  proxies:\n  - BEST-PING\n${bex}- name: ADS\n  type: select\n  disable-udp: false\n  proxies:\n  - REJECT\n  - INTERNET\n- name: BEST-PING\n  type: url-test\n  url: https://detectportal.firefox.com/success.txt\n  interval: 60\n  proxies:\n${bex}rules:\n- MATCH,INTERNET`;
}

async function generateSurfboardSub(type, bug, geo81, tls, country = null, limit = null) {
  const proxyList = await getProxyList();
  let ips = proxyList.map(p => `${p.proxyIP},${p.proxyPort},${p.country},${p.org}`);
  if (country && country.toLowerCase() === 'random') ips = ips.sort(() => Math.random() - 0.5);
  else if (country) ips = ips.filter(line => { const parts = line.split(','); return parts.length > 1 && parts[2].toUpperCase() === country.toUpperCase(); });
  if (limit && !isNaN(limit)) ips = ips.slice(0, limit);
  let conf = '', bex = '', count = 1;
  for (let line of ips) {
    const parts = line.split(',');
    const proxyHost = parts[0], proxyPort = parts[1] || 443;
    const emojiFlag = getEmojiFlag(line.split(',')[2]);
    const sanitize = (text) => text.replace(/[\n\r]+/g, "").trim();
    let ispName = sanitize(`${emojiFlag} (${line.split(',')[2]}) ${line.split(',')[3]} ${count++}`);
    const UUIDS = `${generateUUIDv4()}`;
    if (type === 'trojan') {
      bex += `${ispName},`;
      conf += `\n${ispName} = trojan, ${bug}, 443, password = ${UUIDS}, udp-relay = true, skip-cert-verify = true, sni = ${geo81}, ws = true, ws-path = ${pathinfo}${proxyHost}:${proxyPort}, ws-headers = Host:"${geo81}"\n`;
    }
  }
  return `#### BY : GEO PROJECT ####\n\n[General]\ndns-server = system, 108.137.44.39, 108.137.44.9, puredns.org:853\n\n[Proxy]\n${conf}\n[Proxy Group]\nSelect Group = select,Load Balance,Best Ping,FallbackGroup,${bex}\nLoad Balance = load-balance,${bex}\nBest Ping = url-test,${bex} url=http://www.gstatic.com/generate_204, interval=600, tolerance=100, timeout=5\nFallbackGroup = fallback,${bex} url=http://www.gstatic.com/generate_204, interval=600, timeout=5\nAdBlock = select,REJECT,Select Group\n\n[Rule]\nMATCH,Select Group`;
}

async function generateHusiSub(type, bug, geo81, tls, country = null, limit = null) {
  const proxyList = await getProxyList();
  let ips = proxyList.map(p => `${p.proxyIP},${p.proxyPort},${p.country},${p.org}`);
  if (country && country.toLowerCase() === 'random') ips = ips.sort(() => Math.random() - 0.5);
  else if (country) ips = ips.filter(line => { const parts = line.split(','); return parts.length > 1 && parts[2].toUpperCase() === country.toUpperCase(); });
  if (limit && !isNaN(limit)) ips = ips.slice(0, limit);
  let conf = '', bex = '', count = 1;
  for (let line of ips) {
    const parts = line.split(',');
    const proxyHost = parts[0], proxyPort = parts[1] || 443;
    const emojiFlag = getEmojiFlag(line.split(',')[2]);
    const sanitize = (text) => text.replace(/[\n\r]+/g, "").trim();
    let ispName = sanitize(`${emojiFlag} (${line.split(',')[2]}) ${line.split(',')[3]} ${count++}`);
    const UUIDS = `${generateUUIDv4()}`;
    const ports = tls ? '443' : '80';
    const snio = tls ? `\n      "tls": {\n        "disable_sni": false,\n        "enabled": true,\n        "insecure": true,\n        "server_name": "${geo81}"\n      },` : '';
    if (type === 'vless') {
      bex += `        "${ispName}",\n`;
      conf += `\n    {\n      "domain_strategy": "ipv4_only",\n      "flow": "",\n      "multiplex": {\n        "enabled": false,\n        "max_streams": 32,\n        "protocol": "smux"\n      },\n      "packet_encoding": "xudp",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "tag": "${ispName}",${snio}\n      "transport": {\n        "early_data_header_name": "Sec-WebSocket-Protocol",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "max_early_data": 0,\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "type": "ws"\n      },\n      "type": "vless",\n      "uuid": "${UUIDS}"\n    },`;
    } else if (type === 'trojan') {
      bex += `        "${ispName}",\n`;
      conf += `\n    {\n      "domain_strategy": "ipv4_only",\n      "multiplex": {\n        "enabled": false,\n        "max_streams": 32,\n        "protocol": "smux"\n      },\n      "password": "${UUIDS}",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "tag": "${ispName}",${snio}\n      "transport": {\n        "early_data_header_name": "Sec-WebSocket-Protocol",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "max_early_data": 0,\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "type": "ws"\n      },\n      "type": "trojan"\n    },`;
    } else if (type === 'ss') {
      bex += `        "${ispName}",\n`;
      conf += `\n    {\n      "type": "shadowsocks",\n      "tag": "${ispName}",\n      "server": "${bug}",\n      "server_port": 443,\n      "method": "none",\n      "password": "${UUIDS}",\n      "plugin": "v2ray-plugin",\n      "plugin_opts": "mux=0;path=${pathinfo}${proxyHost}=${proxyPort};host=${geo81};tls=1"\n    },`;
    } else if (type === 'mix') {
      bex += `        "${ispName} vless",\n        "${ispName} trojan",\n        "${ispName} ss",\n`;
      conf += `\n    {\n      "domain_strategy": "ipv4_only",\n      "flow": "",\n      "multiplex": {\n        "enabled": false,\n        "max_streams": 32,\n        "protocol": "smux"\n      },\n      "packet_encoding": "xudp",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "tag": "${ispName} vless",${snio}\n      "transport": {\n        "early_data_header_name": "Sec-WebSocket-Protocol",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "max_early_data": 0,\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "type": "ws"\n      },\n      "type": "vless",\n      "uuid": "${UUIDS}"\n    },\n    {\n      "domain_strategy": "ipv4_only",\n      "multiplex": {\n        "enabled": false,\n        "max_streams": 32,\n        "protocol": "smux"\n      },\n      "password": "${UUIDS}",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "tag": "${ispName} trojan",${snio}\n      "transport": {\n        "early_data_header_name": "Sec-WebSocket-Protocol",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "max_early_data": 0,\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "type": "ws"\n      },\n      "type": "trojan"\n    },\n    {\n      "type": "shadowsocks",\n      "tag": "${ispName} ss",\n      "server": "${bug}",\n      "server_port": 443,\n      "method": "none",\n      "password": "${UUIDS}",\n      "plugin": "v2ray-plugin",\n      "plugin_opts": "mux=0;path=${pathinfo}${proxyHost}=${proxyPort};host=${geo81};tls=1"\n    },`;
    }
  }
  return `#### BY : GEO PROJECT ####\n\n{\n  "dns": {\n    "final": "dns-final",\n    "independent_cache": true,\n    "rules": [\n      {\n        "disable_cache": false,\n        "domain": [\n          "family.cloudflare-dns.com",\n          "${bug}"\n        ],\n        "server": "direct-dns"\n      }\n    ],\n    "servers": [\n      {\n        "address": "https://family.cloudflare-dns.com/dns-query",\n        "address_resolver": "direct-dns",\n        "strategy": "ipv4_only",\n        "tag": "remote-dns"\n      },\n      {\n        "address": "local",\n        "strategy": "ipv4_only",\n        "tag": "direct-dns"\n      },\n      {\n        "address": "local",\n        "address_resolver": "dns-local",\n        "strategy": "ipv4_only",\n        "tag": "dns-final"\n      },\n      {\n        "address": "local",\n        "tag": "dns-local"\n      },\n      {\n        "address": "rcode://success",\n        "tag": "dns-block"\n      }\n    ]\n  },\n  "experimental": {\n    "cache_file": {\n      "enabled": true,\n      "path": "../cache/cache.db",\n      "store_fakeip": true\n    },\n    "clash_api": {\n      "external_controller": "127.0.0.1:9090"\n    },\n    "v2ray_api": {\n      "listen": "127.0.0.1:0",\n      "stats": {\n        "enabled": true,\n        "outbounds": [\n          "proxy",\n          "direct"\n        ]\n      }\n    }\n  },\n  "inbounds": [\n    {\n      "listen": "0.0.0.0",\n      "listen_port": 6450,\n      "override_address": "8.8.8.8",\n      "override_port": 53,\n      "tag": "dns-in",\n      "type": "direct"\n    },\n    {\n      "domain_strategy": "",\n      "endpoint_independent_nat": true,\n      "inet4_address": [\n        "172.19.0.1/28"\n      ],\n      "mtu": 9000,\n      "sniff": true,\n      "sniff_override_destination": true,\n      "stack": "system",\n      "tag": "tun-in",\n      "type": "tun"\n    },\n    {\n      "domain_strategy": "",\n      "listen": "0.0.0.0",\n      "listen_port": 2080,\n      "sniff": true,\n      "sniff_override_destination": true,\n      "tag": "mixed-in",\n      "type": "mixed"\n    }\n  ],\n  "log": {\n    "level": "info"\n  },\n  "outbounds": [\n    {\n      "outbounds": [\n        "Best Latency",\n${bex}        "direct"\n      ],\n      "tag": "Internet",\n      "type": "selector"\n    },\n    {\n      "interval": "1m0s",\n      "outbounds": [\n${bex}        "direct"\n      ],\n      "tag": "Best Latency",\n      "type": "urltest",\n      "url": "https://detectportal.firefox.com/success.txt"\n    },\n${conf}\n    {\n      "tag": "direct",\n      "type": "direct"\n    },\n    {\n      "tag": "bypass",\n      "type": "direct"\n    },\n    {\n      "tag": "block",\n      "type": "block"\n    },\n    {\n      "tag": "dns-out",\n      "type": "dns"\n    }\n  ],\n  "route": {\n    "auto_detect_interface": true,\n    "rules": [\n      {\n        "outbound": "dns-out",\n        "port": [\n          53\n        ]\n      },\n      {\n        "inbound": [\n          "dns-in"\n        ],\n        "outbound": "dns-out"\n      },\n      {\n        "network": [\n          "udp"\n        ],\n        "outbound": "block",\n        "port": [\n          443\n        ],\n        "port_range": []\n      },\n      {\n        "ip_cidr": [\n          "224.0.0.0/3",\n          "ff00::/8"\n        ],\n        "outbound": "block",\n        "source_ip_cidr": [\n          "224.0.0.0/3",\n          "ff00::/8"\n        ]\n      }\n    ]\n  }\n}`;
}

async function generateSingboxSub(type, bug, geo81, tls, country = null, limit = null) {
  const proxyList = await getProxyList();
  let ips = proxyList.map(p => `${p.proxyIP},${p.proxyPort},${p.country},${p.org}`);
  if (country && country.toLowerCase() === 'random') ips = ips.sort(() => Math.random() - 0.5);
  else if (country) ips = ips.filter(line => { const parts = line.split(','); return parts.length > 1 && parts[2].toUpperCase() === country.toUpperCase(); });
  if (limit && !isNaN(limit)) ips = ips.slice(0, limit);
  let conf = '', bex = '', count = 1;
  for (let line of ips) {
    const parts = line.split(',');
    const proxyHost = parts[0], proxyPort = parts[1] || 443;
    const emojiFlag = getEmojiFlag(line.split(',')[2]);
    const sanitize = (text) => text.replace(/[\n\r]+/g, "").trim();
    let ispName = sanitize(`${emojiFlag} (${line.split(',')[2]}) ${line.split(',')[3]} ${count++}`);
    const UUIDS = `${generateUUIDv4()}`;
    const ports = tls ? '443' : '80';
    const snio = tls ? `\n      "tls": {\n        "enabled": true,\n        "server_name": "${geo81}",\n        "insecure": true\n      },` : '';
    if (type === 'vless') {
      bex += `        "${ispName}",\n`;
      conf += `\n    {\n      "type": "vless",\n      "tag": "${ispName}",\n      "domain_strategy": "ipv4_only",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "uuid": "${UUIDS}",${snio}\n      "multiplex": {\n        "protocol": "smux",\n        "max_streams": 32\n      },\n      "transport": {\n        "type": "ws",\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "early_data_header_name": "Sec-WebSocket-Protocol"\n      },\n      "packet_encoding": "xudp"\n    },`;
    } else if (type === 'trojan') {
      bex += `        "${ispName}",\n`;
      conf += `\n    {\n      "type": "trojan",\n      "tag": "${ispName}",\n      "domain_strategy": "ipv4_only",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "password": "${UUIDS}",${snio}\n      "multiplex": {\n        "protocol": "smux",\n        "max_streams": 32\n      },\n      "transport": {\n        "type": "ws",\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "early_data_header_name": "Sec-WebSocket-Protocol"\n      }\n    },`;
    } else if (type === 'ss') {
      bex += `        "${ispName}",\n`;
      conf += `\n    {\n      "type": "shadowsocks",\n      "tag": "${ispName}",\n      "server": "${bug}",\n      "server_port": 443,\n      "method": "none",\n      "password": "${UUIDS}",\n      "plugin": "v2ray-plugin",\n      "plugin_opts": "mux=0;path=${pathinfo}${proxyHost}=${proxyPort};host=${geo81};tls=1"\n    },`;
    } else if (type === 'mix') {
      bex += `        "${ispName} vless",\n        "${ispName} trojan",\n        "${ispName} ss",\n`;
      conf += `\n    {\n      "type": "vless",\n      "tag": "${ispName} vless",\n      "domain_strategy": "ipv4_only",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "uuid": "${UUIDS}",${snio}\n      "multiplex": {\n        "protocol": "smux",\n        "max_streams": 32\n      },\n      "transport": {\n        "type": "ws",\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "early_data_header_name": "Sec-WebSocket-Protocol"\n      },\n      "packet_encoding": "xudp"\n    },\n    {\n      "type": "trojan",\n      "tag": "${ispName} trojan",\n      "domain_strategy": "ipv4_only",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "password": "${UUIDS}",${snio}\n      "multiplex": {\n        "protocol": "smux",\n        "max_streams": 32\n      },\n      "transport": {\n        "type": "ws",\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "early_data_header_name": "Sec-WebSocket-Protocol"\n      }\n    },\n    {\n      "type": "shadowsocks",\n      "tag": "${ispName} ss",\n      "server": "${bug}",\n      "server_port": 443,\n      "method": "none",\n      "password": "${UUIDS}",\n      "plugin": "v2ray-plugin",\n      "plugin_opts": "mux=0;path=${pathinfo}${proxyHost}=${proxyPort};host=${geo81};tls=1"\n    },`;
    }
  }
  return `#### BY : GEO PROJECT ####\n\n{\n  "log": {\n    "level": "info"\n  },\n  "dns": {\n    "servers": [\n      {\n        "tag": "remote-dns",\n        "address": "https://family.cloudflare-dns.com/dns-query",\n        "address_resolver": "direct-dns",\n        "strategy": "ipv4_only"\n      },\n      {\n        "tag": "direct-dns",\n        "address": "local",\n        "strategy": "ipv4_only"\n      },\n      {\n        "tag": "dns-final",\n        "address": "local",\n        "address_resolver": "dns-local",\n        "strategy": "ipv4_only"\n      },\n      {\n        "tag": "dns-local",\n        "address": "local"\n      },\n      {\n        "tag": "dns-block",\n        "address": "rcode://success"\n      }\n    ],\n    "rules": [\n      {\n        "domain": [\n          "family.cloudflare-dns.com",\n          "${bug}"\n        ],\n        "server": "direct-dns"\n      }\n    ],\n    "final": "dns-final",\n    "independent_cache": true\n  },\n  "inbounds": [\n    {\n      "type": "tun",\n      "mtu": 1400,\n      "inet4_address": "172.19.0.1/30",\n      "inet6_address": "fdfe:dcba:9876::1/126",\n      "auto_route": true,\n      "strict_route": true,\n      "endpoint_independent_nat": true,\n      "stack": "mixed",\n      "sniff": true\n    }\n  ],\n  "outbounds": [\n    {\n      "tag": "Internet",\n      "type": "selector",\n      "outbounds": [\n        "Best Latency",\n${bex}        "direct"\n      ]\n    },\n    {\n      "type": "urltest",\n      "tag": "Best Latency",\n      "outbounds": [\n${bex}        "direct"\n      ],\n      "url": "https://ping.geo81.us.kg",\n      "interval": "30s"\n    },\n${conf}\n    {\n      "type": "direct",\n      "tag": "direct"\n    },\n    {\n      "type": "direct",\n      "tag": "bypass"\n    },\n    {\n      "type": "block",\n      "tag": "block"\n    },\n    {\n      "type": "dns",\n      "tag": "dns-out"\n    }\n  ],\n  "route": {\n    "rules": [\n      {\n        "port": 53,\n        "outbound": "dns-out"\n      },\n      {\n        "inbound": "dns-in",\n        "outbound": "dns-out"\n      },\n      {\n        "network": "udp",\n        "port": 443,\n        "outbound": "block"\n      },\n      {\n        "source_ip_cidr": [\n          "224.0.0.0/3",\n          "ff00::/8"\n        ],\n        "ip_cidr": [\n          "224.0.0.0/3",\n          "ff00::/8"\n        ],\n        "outbound": "block"\n      }\n    ],\n    "auto_detect_interface": true\n  },\n  "experimental": {\n    "cache_file": {\n      "enabled": false\n    },\n    "clash_api": {\n      "external_controller": "127.0.0.1:9090",\n      "external_ui": "ui",\n      "external_ui_download_url": "https://github.com/MetaCubeX/metacubexd/archive/gh-pages.zip",\n      "external_ui_download_detour": "Internet",\n      "secret": "bitzblack",\n      "default_mode": "rule"\n    }\n  }\n}`;
}

async function generateNekoboxSub(type, bug, geo81, tls, country = null, limit = null) {
  const proxyList = await getProxyList();
  let ips = proxyList.map(p => `${p.proxyIP},${p.proxyPort},${p.country},${p.org}`);
  if (country && country.toLowerCase() === 'random') ips = ips.sort(() => Math.random() - 0.5);
  else if (country) ips = ips.filter(line => { const parts = line.split(','); return parts.length > 1 && parts[2].toUpperCase() === country.toUpperCase(); });
  if (limit && !isNaN(limit)) ips = ips.slice(0, limit);
  let conf = '', bex = '', count = 1;
  for (let line of ips) {
    const parts = line.split(',');
    const proxyHost = parts[0], proxyPort = parts[1] || 443;
    const emojiFlag = getEmojiFlag(line.split(',')[2]);
    const sanitize = (text) => text.replace(/[\n\r]+/g, "").trim();
    let ispName = sanitize(`${emojiFlag} (${line.split(',')[2]}) ${line.split(',')[3]} ${count++}`);
    const UUIDS = `${generateUUIDv4()}`;
    const ports = tls ? '443' : '80';
    const snio = tls ? `\n      "tls": {\n        "disable_sni": false,\n        "enabled": true,\n        "insecure": true,\n        "server_name": "${geo81}"\n      },` : '';
    if (type === 'vless') {
      bex += `        "${ispName}",\n`;
      conf += `\n    {\n      "domain_strategy": "ipv4_only",\n      "flow": "",\n      "multiplex": {\n        "enabled": false,\n        "max_streams": 32,\n        "protocol": "smux"\n      },\n      "packet_encoding": "xudp",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "tag": "${ispName}",${snio}\n      "transport": {\n        "early_data_header_name": "Sec-WebSocket-Protocol",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "max_early_data": 0,\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "type": "ws"\n      },\n      "type": "vless",\n      "uuid": "${UUIDS}"\n    },`;
    } else if (type === 'trojan') {
      bex += `        "${ispName}",\n`;
      conf += `\n    {\n      "domain_strategy": "ipv4_only",\n      "multiplex": {\n        "enabled": false,\n        "max_streams": 32,\n        "protocol": "smux"\n      },\n      "password": "${UUIDS}",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "tag": "${ispName}",${snio}\n      "transport": {\n        "early_data_header_name": "Sec-WebSocket-Protocol",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "max_early_data": 0,\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "type": "ws"\n      },\n      "type": "trojan"\n    },`;
    } else if (type === 'ss') {
      bex += `        "${ispName}",\n`;
      conf += `\n    {\n      "type": "shadowsocks",\n      "tag": "${ispName}",\n      "server": "${bug}",\n      "server_port": 443,\n      "method": "none",\n      "password": "${UUIDS}",\n      "plugin": "v2ray-plugin",\n      "plugin_opts": "mux=0;path=${pathinfo}${proxyHost}=${proxyPort};host=${geo81};tls=1"\n    },`;
    } else if (type === 'mix') {
      bex += `        "${ispName} vless",\n        "${ispName} trojan",\n        "${ispName} ss",\n`;
      conf += `\n    {\n      "domain_strategy": "ipv4_only",\n      "flow": "",\n      "multiplex": {\n        "enabled": false,\n        "max_streams": 32,\n        "protocol": "smux"\n      },\n      "packet_encoding": "xudp",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "tag": "${ispName} vless",${snio}\n      "transport": {\n        "early_data_header_name": "Sec-WebSocket-Protocol",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "max_early_data": 0,\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "type": "ws"\n      },\n      "type": "vless",\n      "uuid": "${UUIDS}"\n    },\n    {\n      "domain_strategy": "ipv4_only",\n      "multiplex": {\n        "enabled": false,\n        "max_streams": 32,\n        "protocol": "smux"\n      },\n      "password": "${UUIDS}",\n      "server": "${bug}",\n      "server_port": ${ports},\n      "tag": "${ispName} trojan",${snio}\n      "transport": {\n        "early_data_header_name": "Sec-WebSocket-Protocol",\n        "headers": {\n          "Host": "${geo81}"\n        },\n        "max_early_data": 0,\n        "path": "${pathinfo}${proxyHost}=${proxyPort}",\n        "type": "ws"\n      },\n      "type": "trojan"\n    },\n    {\n      "type": "shadowsocks",\n      "tag": "${ispName} ss",\n      "server": "${bug}",\n      "server_port": 443,\n      "method": "none",\n      "password": "${UUIDS}",\n      "plugin": "v2ray-plugin",\n      "plugin_opts": "mux=0;path=${pathinfo}${proxyHost}=${proxyPort};host=${geo81};tls=1"\n    },`;
    }
  }
  return `#### BY : GEO PROJECT ####\n\n{\n  "dns": {\n    "final": "dns-final",\n    "independent_cache": true,\n    "rules": [\n      {\n        "disable_cache": false,\n        "domain": [\n          "family.cloudflare-dns.com",\n          "${bug}"\n        ],\n        "server": "direct-dns"\n      }\n    ],\n    "servers": [\n      {\n        "address": "https://family.cloudflare-dns.com/dns-query",\n        "address_resolver": "direct-dns",\n        "strategy": "ipv4_only",\n        "tag": "remote-dns"\n      },\n      {\n        "address": "local",\n        "strategy": "ipv4_only",\n        "tag": "direct-dns"\n      },\n      {\n        "address": "local",\n        "address_resolver": "dns-local",\n        "strategy": "ipv4_only",\n        "tag": "dns-final"\n      },\n      {\n        "address": "local",\n        "tag": "dns-local"\n      },\n      {\n        "address": "rcode://success",\n        "tag": "dns-block"\n      }\n    ]\n  },\n  "experimental": {\n    "cache_file": {\n      "enabled": true,\n      "path": "../cache/clash.db",\n      "store_fakeip": true\n    },\n    "clash_api": {\n      "external_controller": "127.0.0.1:9090",\n      "external_ui": "../files/yacd"\n    }\n  },\n  "inbounds": [\n    {\n      "listen": "0.0.0.0",\n      "listen_port": 6450,\n      "override_address": "8.8.8.8",\n      "override_port": 53,\n      "tag": "dns-in",\n      "type": "direct"\n    },\n    {\n      "domain_strategy": "",\n      "endpoint_independent_nat": true,\n      "inet4_address": [\n        "172.19.0.1/28"\n      ],\n      "mtu": 9000,\n      "sniff": true,\n      "sniff_override_destination": true,\n      "stack": "system",\n      "tag": "tun-in",\n      "type": "tun"\n    },\n    {\n      "domain_strategy": "",\n      "listen": "0.0.0.0",\n      "listen_port": 2080,\n      "sniff": true,\n      "sniff_override_destination": true,\n      "tag": "mixed-in",\n      "type": "mixed"\n    }\n  ],\n  "log": {\n    "level": "info"\n  },\n  "outbounds": [\n    {\n      "outbounds": [\n        "Best Latency",\n${bex}        "direct"\n      ],\n      "tag": "Internet",\n      "type": "selector"\n    },\n    {\n      "interval": "1m0s",\n      "outbounds": [\n${bex}        "direct"\n      ],\n      "tag": "Best Latency",\n      "type": "urltest",\n      "url": "https://detectportal.firefox.com/success.txt"\n    },\n${conf}\n    {\n      "tag": "direct",\n      "type": "direct"\n    },\n    {\n      "tag": "bypass",\n      "type": "direct"\n    },\n    {\n      "tag": "block",\n      "type": "block"\n    },\n    {\n      "tag": "dns-out",\n      "type": "dns"\n    }\n  ],\n  "route": {\n    "auto_detect_interface": true,\n    "rules": [\n      {\n        "outbound": "dns-out",\n        "port": [\n          53\n        ]\n      },\n      {\n        "inbound": [\n          "dns-in"\n        ],\n        "outbound": "dns-out"\n      },\n      {\n        "network": [\n          "udp"\n        ],\n        "outbound": "block",\n        "port": [\n          443\n        ],\n        "port_range": []\n      },\n      {\n        "ip_cidr": [\n          "224.0.0.0/3",\n          "ff00::/8"\n        ],\n        "outbound": "block",\n        "source_ip_cidr": [\n          "224.0.0.0/3",\n          "ff00::/8"\n        ]\n      }\n    ]\n  }\n}`;
}

async function generateV2rayngSub(type, bug, geo81, tls, country = null, limit = null) {
  const proxyList = await getProxyList();
  let ips = proxyList.map(p => `${p.proxyIP},${p.proxyPort},${p.country},${p.org}`);
  if (country && country.toLowerCase() === 'random') ips = ips.sort(() => Math.random() - 0.5);
  else if (country) ips = ips.filter(line => { const parts = line.split(','); return parts.length > 1 && parts[2].toUpperCase() === country.toUpperCase(); });
  if (limit && !isNaN(limit)) ips = ips.slice(0, limit);
  let conf = '';
  for (let line of ips) {
    const parts = line.split(',');
    const proxyHost = parts[0], proxyPort = parts[1] || 443;
    const countryCode = parts[2];
    const isp = parts[3];
    const countryText = `[${countryCode}]`;
    const ispInfo = `${countryText} ${isp}`;
    const UUIDS = `${generateUUIDv4()}`;
    if (type === 'vless') {
      if (tls) conf += `vless://${UUIDS}@${bug}:443?encryption=none&security=tls&sni=${geo81}&fp=randomized&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}#${ispInfo}\n`;
      else conf += `vless://${UUIDS}@${bug}:80?path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&encryption=none&host=${geo81}&fp=randomized&type=ws&sni=${geo81}#${ispInfo}\n`;
    } else if (type === 'trojan') {
      if (tls) conf += `trojan://${UUIDS}@${bug}:443?encryption=none&security=tls&sni=${geo81}&fp=randomized&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}#${ispInfo}\n`;
      else conf += `trojan://${UUIDS}@${bug}:80?path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&encryption=none&host=${geo81}&fp=randomized&type=ws&sni=${geo81}#${ispInfo}\n`;
    } else if (type === 'ss') {
      if (tls) conf += `ss://${btoa(`none:${UUIDS}`)}%3D@${bug}:443?encryption=none&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=tls&sni=${geo81}#${ispInfo}\n`;
      else conf += `ss://${btoa(`none:${UUIDS}`)}%3D@${bug}:80?encryption=none&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&sni=${geo81}#${ispInfo}\n`;
    } else if (type === 'mix') {
      if (tls) {
        conf += `vless://${UUIDS}@${bug}:443?encryption=none&security=tls&sni=${geo81}&fp=randomized&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}#${ispInfo}\n`;
        conf += `trojan://${UUIDS}@${bug}:443?encryption=none&security=tls&sni=${geo81}&fp=randomized&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}#${ispInfo}\n`;
        conf += `ss://${btoa(`none:${UUIDS}`)}%3D@${bug}:443?encryption=none&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=tls&sni=${geo81}#${ispInfo}\n`;
      } else {
        conf += `vless://${UUIDS}@${bug}:80?path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&encryption=none&host=${geo81}&fp=randomized&type=ws&sni=${geo81}#${ispInfo}\n`;
        conf += `trojan://${UUIDS}@${bug}:80?path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&encryption=none&host=${geo81}&fp=randomized&type=ws&sni=${geo81}#${ispInfo}\n`;
        conf += `ss://${btoa(`none:${UUIDS}`)}%3D@${bug}:80?encryption=none&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&sni=${geo81}#${ispInfo}\n`;
      }
    }
  }
  return btoa(conf.replace(/ /g, '%20'));
}

async function generateV2raySub(type, bug, geo81, tls, country = null, limit = null) {
  const proxyList = await getProxyList();
  let ips = proxyList.map(p => `${p.proxyIP},${p.proxyPort},${p.country},${p.org}`);
  if (country && country.toLowerCase() === 'random') ips = ips.sort(() => Math.random() - 0.5);
  else if (country) ips = ips.filter(line => { const parts = line.split(','); return parts.length > 1 && parts[2].toUpperCase() === country.toUpperCase(); });
  if (limit && !isNaN(limit)) ips = ips.slice(0, limit);
  let conf = '';
  for (let line of ips) {
    const parts = line.split(',');
    const proxyHost = parts[0], proxyPort = parts[1] || 443;
    const emojiFlag = getEmojiFlag(line.split(',')[2]);
    const UUIDS = generateUUIDv4();
    const information = encodeURIComponent(`${emojiFlag} (${line.split(',')[2]}) ${line.split(',')[3]}`);
    if (type === 'vless') {
      if (tls) conf += `vless://${UUIDS}@${bug}:443?encryption=none&security=tls&sni=${geo81}&fp=randomized&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}#${information}\n`;
      else conf += `vless://${UUIDS}@${bug}:80?path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&encryption=none&host=${geo81}&fp=randomized&type=ws&sni=${geo81}#${information}\n`;
    } else if (type === 'trojan') {
      if (tls) conf += `trojan://${UUIDS}@${bug}:443?encryption=none&security=tls&sni=${geo81}&fp=randomized&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}#${information}\n`;
      else conf += `trojan://${UUIDS}@${bug}:80?path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&encryption=none&host=${geo81}&fp=randomized&type=ws&sni=${geo81}#${information}\n`;
    } else if (type === 'ss') {
      if (tls) conf += `ss://${btoa(`none:${UUIDS}`)}%3D@${bug}:443?encryption=none&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=tls&sni=${geo81}#${information}\n`;
      else conf += `ss://${btoa(`none:${UUIDS}`)}%3D@${bug}:80?encryption=none&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&sni=${geo81}#${information}\n`;
    } else if (type === 'mix') {
      if (tls) {
        conf += `vless://${UUIDS}@${bug}:443?encryption=none&security=tls&sni=${geo81}&fp=randomized&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}#${information}\n`;
        conf += `trojan://${UUIDS}@${bug}:443?encryption=none&security=tls&sni=${geo81}&fp=randomized&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}#${information}\n`;
        conf += `ss://${btoa(`none:${UUIDS}`)}%3D@${bug}:443?encryption=none&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=tls&sni=${geo81}#${information}\n`;
      } else {
        conf += `vless://${UUIDS}@${bug}:80?path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&encryption=none&host=${geo81}&fp=randomized&type=ws&sni=${geo81}#${information}\n`;
        conf += `trojan://${UUIDS}@${bug}:80?path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&encryption=none&host=${geo81}&fp=randomized&type=ws&sni=${geo81}#${information}\n`;
        conf += `ss://${btoa(`none:${UUIDS}`)}%3D@${bug}:80?encryption=none&type=ws&host=${geo81}&path=%2FFree-VPN-CF-Geo-Project%2F${proxyHost}%3D${proxyPort}&security=none&sni=${geo81}#${information}\n`;
      }
    }
  }
  return conf;
}

function generateUUIDv4() {
  const randomValues = crypto.getRandomValues(new Uint8Array(16));
  randomValues[6] = (randomValues[6] & 0x0f) | 0x40;
  randomValues[8] = (randomValues[8] & 0x3f) | 0x80;
  return [
    randomValues[0].toString(16).padStart(2, '0'),
    randomValues[1].toString(16).padStart(2, '0'),
    randomValues[2].toString(16).padStart(2, '0'),
    randomValues[3].toString(16).padStart(2, '0'),
    randomValues[4].toString(16).padStart(2, '0'),
    randomValues[5].toString(16).padStart(2, '0'),
    randomValues[6].toString(16).padStart(2, '0'),
    randomValues[7].toString(16).padStart(2, '0'),
    randomValues[8].toString(16).padStart(2, '0'),
    randomValues[9].toString(16).padStart(2, '0'),
    randomValues[10].toString(16).padStart(2, '0'),
    randomValues[11].toString(16).padStart(2, '0'),
    randomValues[12].toString(16).padStart(2, '0'),
    randomValues[13].toString(16).padStart(2, '0'),
    randomValues[14].toString(16).padStart(2, '0'),
    randomValues[15].toString(16).padStart(2, '0'),
  ].join('').replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5');
}
