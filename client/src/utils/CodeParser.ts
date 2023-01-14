export default class CodeParser {
  public static parseToHTML<configType>(code: string, config: any) {
    const lines = code.split('\n');
    const linesWithWords = lines.map((word) => word.split(' '));
    const formattedWords = linesWithWords
      .map((line) => {
        return line.map((word) => {
          if (config.reserved.words.includes(word)) {
            return `<span className={'${config.reserved.name}'}>${word}</span>`;
          } else {
            return word;
          }
        });
      })
      .map((line) => line.join(' '))
      .join('\n');
    return formattedWords;
  }
}
