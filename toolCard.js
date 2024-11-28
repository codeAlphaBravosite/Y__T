function createToolCard(tool) {
    const icon = getToolIcon(tool.title);
    return `
        <div class="tool-card">
            <div class="icon">${icon}</div>
            <h3>${tool.title}</h3>
            <p>${tool.description}</p>
            <a href="${tool.url}" class="btn" target="_blank" rel="noopener noreferrer">
                Use Now
            </a>
        </div>
    `;
}

function getToolIcon(title) {
    const icons = {
        'Similar Channel Viewer': '',
        'YT Video Viewer': '',
        'Publish Date Checker': '',
        'YT Comments Extractor': '',
        'Online Notepad': ''
    };
    return icons[title] || '';
}
