import * as tempr from "."

const template = `
The Daugherty's have 8 kids. Their names are:
{{@each (it.kids) => val, index}}
{{@if(index < it.kids.length - 1_}}
  {{val}}, 
{{_#else_}}
  and {{val}}
{{_/if}}
{{_/each}}
`;

tempr.filters.define('capitalize', (str) => str.toUpperCase());
console.log(tempr.parse(template,tempr.defaultConfig))
console.log('===========================')
console.log(tempr.compile(template).toString())
console.log('===========================')
console.log(tempr.render(template, { kids: ['Ben', 'Polly', 'Joel', 'Phronsie', 'Davie'] }))


// Output: