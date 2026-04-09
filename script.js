:root {
    --primary-color: #2d5a27;
    --secondary-color: #8db600;
    --dark-color: #1b3022;
    --light-color: #f4f7f1;
    --white: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: var(--dark-color);
    background-color: var(--white);
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header & Nav */
header {
    background: var(--white);
    height: 80px;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.logo {
    font-size: 1.5rem;
    color: var(--primary-color);
}

.logo span {
    color: var(--secondary-color);
    font-weight: 300;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li a {
    text-decoration: none;
    color: var(--dark-color);
    margin-left: 20px;
    font-weight: 600;
    transition: color 0.3s;
}

.nav-links li a:hover {
    color: var(--secondary-color);
}

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--white);
}

.hero-content h2 {
    font-size: 3rem;
    margin-bottom: 10px;
}

.btn {
    display: inline-block;
    background: var(--secondary-color);
    color: var(--white);
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
    transition: background 0.3s;
}

.btn:hover {
    background: var(--primary-color);
}

/* Section Sobre */
.section {
    padding: 80px 0;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    align-items: center;
}

.fake-img {
    background: #e0eadd;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: 2px dashed var(--primary-color);
    color: var(--primary-color);
    font-weight: bold;
}

footer {
    background: var(--dark-color);
    color: var(--white);
    text-align: center;
    padding: 20px 0;
}

/* Responsividade Menu Mobile */
@media (max-width: 768px) {
    .nav-links {
        display: none; /* Seria ativado via JS */
    }
    .hero-content h2 {
        font-size: 2rem;
    }
}
