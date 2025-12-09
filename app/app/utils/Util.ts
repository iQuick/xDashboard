export function toCamelCase(str: string): string {
    return str.replace(/[-_\s]+(.)?/g, (_, chr) => {
      return chr ? chr.toUpperCase() : '';
    });
}

export function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }