async function fetchAndOpenIndexHtml() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/phexus23/search/refs/heads/main/index.html');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const htmlText = await response.text();

        const blob = new Blob([htmlText], { type: 'text/html' });

        const blobUrl = URL.createObjectURL(blob);

        window.open(blobUrl, '_blank');
    } catch (error) {
        console.error('Failed to fetch and open index.html:', error);
    }
}

fetchAndOpenIndexHtml();
