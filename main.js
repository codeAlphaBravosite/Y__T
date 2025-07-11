// Tool data - Add new tools here
const tools = [
    {
        title: 'Similar Channel Viewer',
        description: 'Find similar YouTube channels and discover new content creators in your niche.',
        url: 'https://codealphabravosite.github.io/simich/'
    },
    {
        title: 'YT Video Viewer',
        description: 'Find best youtube video from search and channels',
        url: 'https://codealphabravosite.github.io/srch-vd/'
    },
    {
        title: 'Publish Date Checker',
        description: 'Check the exact publish date and time of any YouTube video.',
        url: 'https://codealphabravosite.github.io/pub_d/'
    },
    {
        title: 'YT Comments Extractor',
        description: 'Extract all youtube comments with ease and download as csv',
        url: 'https://codealphabravosite.github.io/cmnt/'
    },
    {
        title: 'Word Counter',
        description: 'Copy and paste your text into the online editor to count its words and characters.',
        url: 'https://codealphabravosite.github.io/Noteepadd/'
    },
    
    {   
        title: 'Script Writer',
        description: 'Write Script Effortlessly (text dont expand)',
        url: 'https://codealphabravosite.github.io/Notepad/'
    },

   {
        title: 'Writer',
        description: 'Write Script Effortlessly (text expand)',
        url: 'https://codealphabravosite.github.io/Writer/'
    },

   {
        title: 'VoiceNote',
       description: ' Convert Audio into High Quality Text',
       url: 'https://codealphabravosite.github.io/trans/'
    },

   {
        title: 'Quick Notes',
       description: 'Write Quick Text',
       url: 'https://codealphabravosite.github.io/NotesApp/'
    },

   {
        title: 'Library',
       description: 'Library to manage Text Notes',
       url: 'https://codealphabravosite.github.io/Promp/'
    },

       {
        title: 'StoryboardPro',
       description: 'create storyboards quickly with ⧉ StoryboardPro',
       url: 'https://codealphabravosite.github.io/Storyboard/'
       },
    
   {
        title: 'SB Tool',
       description: 'Convert Your Script to Scene easily',
       url: 'https://codealphabravosite.github.io/sb-tool/'
   },

    {
        title: 'Audio.Studio',
       description: '',
       url: 'https://codealphabravosite.github.io/DS/'
    },

    {
        title: 'Life Calendar',
       description: '',
       url: 'https://codealphabravosite.github.io/me/'
    },

    {
        title: 'SB Tool 2',
       description: '',
       url: 'https://codealphabravosite.github.io/SB2/'
    },

    {
        title: 'Library 2',
       description: '',
       url: 'https://codealphabravosite.github.io/prompp/'
    },

    {
        title: 'SFX Cheat Sheet',
       description: '',
       url: 'https://codealphabravosite.github.io/Sffx/'
    },

    {
        title: 'SB Home',
       description: '',
       url: 'https://codealphabravosite.github.io/sb-home/'
    },

    
    {
        title: 'CreateMode',
       description: '',
       url: 'https://codealphabravosite.github.io/CM/'
    },

    
    {
        title: 'LogReel Pro',
       description: '',
       url: 'https://codealphabravosite2.github.io/LR'
    },
    

    {
        title: 'Goalio',
       description: '',
       url: 'https://codealphabravosite.github.io/GL/'
        },

    {
        title: 'Syllabook',
       description: '',
       url: 'https://codealphabravosite.github.io/STDY/'
        },

    {
        title: 'Convert2Anki',
       description: '',
       url: 'https://codealphabravosite.github.io/FCard'
        }
    
];

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

    // Add hover effect to buttons
    document.querySelectorAll('.btn, .hero-cta').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });
});
