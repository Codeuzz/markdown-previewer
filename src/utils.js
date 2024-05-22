export function parseMarkdown(text) {
    // Convert headers
    text = text.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
    text = text.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    text = text.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    text = text.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    text = text.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Convert bold and italic text
    text = text.replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>');
    text = text.replace(/__(.*?)__/gim, '<b>$1</b>');
    text = text.replace(/\*(.*?)\*/gim, '<i>$1</i>');
    text = text.replace(/_(.*?)_/gim, '<i>$1</i>');

    // Convert blockquotes
    text = text.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Convert unordered lists
    text = text.replace(/^\s*[-\*]\s+(.*)/gm, '<ul><li>$1</li></ul>');
    // Merge consecutive <ul> elements
    text = text.replace(/<\/ul>\s*<ul>/g, '');

    // Convert ordered lists
    text = text.replace(/^\s*\d+\.\s+(.*)/gm, '<ol><li>$1</li></ol>');
    // Merge consecutive <ol> elements
    text = text.replace(/<\/ol>\s*<ol>/g, '');

    // Convert inline code
    text = text.replace(/`(.*?)`/gim, '<code>$1</code>');

    // Convert code blocks
    text = text.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');

    // Convert links
    text = text.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

    // Convert images
    text = text.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />');

    // Convert horizontal rules
    text = text.replace(/^\s*(---|\*\*\*|___)\s*$/gm, '<hr />');

    // Convert paragraphs
    text = text.replace(/^(?!<h1>|<h2>|<h3>|<h4>|<h5>|<h6>|<b>|<i>|<blockquote>|<ul>|<ol>|<code>|<pre>|<a>|<img>|<hr>)(.*$)/gim, '<p>$1</p>');

    // Convert strikethrough text
    text = text.replace(/~~(.*?)~~/gim, '<del>$1</del>');


    return text.trim();
}