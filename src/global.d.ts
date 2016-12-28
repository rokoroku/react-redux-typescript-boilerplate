/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// for commonjs module
interface RequireInterface {
  (module: string): any;
  ensure?(module: string): any;
}
declare var module: any;
declare var require: RequireInterface;

// for redux devtools extension
declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}