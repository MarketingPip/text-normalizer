import path from 'path';
import fs from 'fs';
import mappingPath from '../englishMapping.json'; // Adjust the path as needed
export class EnglishSpellingNormalizer {
  private mapping: {[key: string]: string};

  constructor() {
     
    this.mapping = JSON.parse(mappingPath);
  }

  normalize(s: string): string {
    return s
      .split(' ')
      .map(word => this.mapping[word] || word)
      .join(' ');
  }
}
