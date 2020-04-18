# MultiAngularApps

Ejemplo de proyecto Angular con múltiples subaplicaciones. En este repositorio se intenta explicar la configuración necesaria para tener subaplicaciones que se ejecuten a través de una aplicación principal, compilable y también se implementa una configuración para que las aplicaciones puedan ser probadas por modulos independientes.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Creación de subaplicaciones

`ng generate application app2 –-routing`

## Creación de componentes en cada subaplicación

`ng generate component view1 --project=app1`

## Ejecutar cada submódulo por separado

`ng serve –-project=app2`

## Ejecutar todo

`ng serve`

## Documentación

https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527