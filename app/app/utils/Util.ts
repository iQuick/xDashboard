export function toCamelCase(str: string): string {
    return str.replace(/[-_\s]+(.)?/g, (_, chr) => {
      return chr ? chr.toUpperCase() : '';
    });
}