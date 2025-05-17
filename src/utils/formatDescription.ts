// utils/formatDescription.ts
export function formatDescriptionToHTML(description: string): string {
    // Convert URLs into clickable links
    const urlRegex = /https?:\/\/[^\s]+/g;
    const withLinks = description.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">${url}</a>`;
    });
  
    // Convert line breaks to <br>
    const withLineBreaks = withLinks.replace(/\n/g, "<br>");
  
    return withLineBreaks;
  }
  