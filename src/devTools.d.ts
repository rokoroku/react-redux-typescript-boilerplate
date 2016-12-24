/** Add global variable declaration for webpack developement tools **/

interface RequireInterface {
  (module: string): any;
  ensure: (module: string) => any;
}

declare var module: any;

declare var require: RequireInterface;

declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}