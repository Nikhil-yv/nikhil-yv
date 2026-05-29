/// <reference types="react-scripts" />

// This tells TypeScript that importing raw .css files is perfectly valid
declare module '*.css' {
  const content: { [className: string]: string } | void;
  export default content;
}