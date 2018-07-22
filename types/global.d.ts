/** Global definitions for development **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// Omit type https://github.com/Microsoft/TypeScript/issues/12215
type SimpleKeyOf<T> = Extract<keyof T, 'number' | 'string'>;
type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends SimpleKeyOf<T>> = { [P in Diff<SimpleKeyOf<T>, K>]: T[P] };

type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
