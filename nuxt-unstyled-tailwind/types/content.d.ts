declare module '#content' {
    export function queryContent<T>(locale: string, contentType: string): Promise<T>;
  }
  