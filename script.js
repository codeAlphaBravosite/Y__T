// Tool data - Add new tools here
const tools = [
    {
        title: 'Similar Channel Viewer',
        description: 'Find similar YouTube channels and discover new content creators in your niche.',
        url: 'https://coli.github.io/simich/',
        icon: '👥'
    },
    {
        title: 'YT Video Viewer',
        description: 'Find best youtube video from search and channels',
        url: 'https://coli.github.io/srch-vd/',
        icon: '🎥'
    },
    {
        title: 'Publish Date Checker',
        description: 'Check the exact publish date and time of any YouTube video.',
        url: 'https://coli.github.io/pub_d/',
        icon: '📅'
    },
    {
        title: 'YT Comments Extractor',
        description: 'Extract all youtube comments with ease and download as csv',
        url: 'https://coli.github.io/cmnt/',
        icon: '💬'
    },
    {
        title: 'Online Notepad',
        description: 'Write down quick notes and print a simple text document with Online Notepad editor.',
        url: 'https://coli.github.io/Noteepadd/',
        icon: '📝'
    }
];

// Create tool cards
function createToolCard(tool) {
    return `
        <div class="tool-card">
            <div class="icon">${tool.icon}</div>
            <h3>${tool.title}</h3>
            <p>${tool.description}</p>
            <a href="${tool.url}" class="btn" target="_blank" rel="noopener noreferrer">
                Try ${tool.title}
            </a>
        </div>
    `;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Render tools
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = tools.map(tool => createToolCard(tool)).join('');

    // Update copyright year
    const yearElement = document.getElementById('currentYear');
    yearElement.textContent = new Date().getFullYear();

    // Add scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe tool cards for animation
    document.querySelectorAll('.tool-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});