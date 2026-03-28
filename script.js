tailwind.config = { theme: { extend: { colors: { navy: '#1B2B4B', gold: '#C9A84C' }, fontFamily: { serif: ['Georgia', 'serif'] } } } }

const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    btn?.addEventListener('click', () => menu.classList.toggle('hidden'));
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));