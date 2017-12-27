# Import Aliases

This project is not using relative imports, always use absolute paths with the following aliases.

## Which aliases are there?

| Alias         | Target Path             |
| ------------- | ----------------------- |
| @angular      | `node_modules/@angular` |
| @components   | `src/app/components`    |
| @modules      | `src/app/modules`       |
| @services     | `src/app/services`      |
| @directives   | `src/app/directives`    |
| @pipes        | `src/app/pipes`         |
| @app          | `src/app`               |

## Does the alias order matter?

Auto import helpers will traverse the list from the top, therefore the high levels dirs have to stay at the bottom.
