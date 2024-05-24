// src/utils/parseMarkdown.js
export function parseMarkdown(markdown) {
    if (window.marked && window.Prism) {
      // Use marked to parse the Markdown with breaks option
      const html = window.marked.parse(markdown, { breaks: true });
  
      // Create a temporary DOM element to manipulate the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
  
      const tables = tempDiv.querySelectorAll('table');
        tables.forEach((table) => {
        table.classList.add('markdown-table'); // Add a class to tables
        });

      // Find all code blocks and apply Prism highlighting
      const codeBlocks = tempDiv.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        window.Prism.highlightElement(block);
      });
  
      return tempDiv.innerHTML;
    }
    return markdown;
  }