export function trimText(text: string, maxWords: number): string {
  const words = text.split(' ');
  if (words.length <= maxWords) {
    return text;
  }

  return words.slice(0, maxWords).join(' ') + '...';
}

export function trimTextToLength(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  const trimmedText = text.substr(0, maxLength);
  const lastSpaceIndex = trimmedText.lastIndexOf(' ');

  return trimmedText.substr(0, lastSpaceIndex) + '...';
}
