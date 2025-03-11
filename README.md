<a href="#"><img src="https://bonheur15.github.io/samplerepo/te-high-resolution-logo-transparent.svg" style="filter:invert()" align="right"  alt="Squirrel"></a>

# Tempr Js

<p align="left">
  <a href="#">Documentation (Comming soon)</a> -
  <a href="#">Playground (Coming Soon)</a>
</p>

**Summary**

Temprjs is a modern, configurable, and blazing fast template engine implemented in JavaScript. It works out of the box with ExpressJS and the **full version** weighs only **~4KB gzipped**.

**This is version 2** - a new, more powerful rewrite of Temprjs. It adds multiple features (like filter parameters, whitespace control, partials, and template inheritance) to bring you a template engine with the power of Nunjucks, the simplicity of EJS, and the small bundle size of its earlier versions.

## Why Temprjs?

Simply put, Temprjs is super lightweight, super fast, super powerful, and super simple.

### 🌟 Features

- 🔧 Helpers, filters
- 🔧 Great error reporting
- 📦 0 dependencies
- 🔨 Conditionals
- 🔧 Better quotes/comments support
  - _ex. `{{someval + "name }}" }}`_ compiles correctly, while it fails with DoT or EJS
- ⚡️ Exports ES Modules as well as UMD
- 🔨 Loops
- 🔧 Custom delimeters
- 📝 Easy template syntax
- 🔧 Precompilation
- 🔨 Partials
- 🔧 Inline JavaScript
- 🔨 Comments
- 🔧 Caching
- 🚀 Super Fast
  - Benchmarking performance (Coming Soon)
- ⚡️ Async support: async filters, helpers, partials
- 🔧 Template inheritance

## 📜 Docs

We know nobody reads through the long and boring documentation in the ReadMe anyway, so head over to the documentation website:

📝 [Coming soon](#)

## 📓 Examples

### Simple Template

```
var myTemplate = "<p>My favorite kind of cake is: {{it.favoriteCake}}</p>"

Sqrl.render(myTemplate, {favoriteCake: 'Chocolate!'})
// Returns: '<p>My favorite kind of cake is: Chocolate!</p>
```

### Conditionals

```
{{@if(it.somevalue === 1)}}
Display this
{{#else}}
Display this
{{/if}}
```

### Loops

```
{{@each(it.somearray) => val, index}}
Display this
The current array element is {{val}}
The current index is {{index}}
{{/each}}
```

## ✔️ Tests

Tests can be run with `npm test`. Multiple tests check that parsing, rendering, and compiling return expected results, formatting follows guidelines, and code coverage is at the expected level.

## Resources

To be added

## Projects using `Temprjs`

[]

😅 Nothing yet
## Contributors

Made with ❤ 
