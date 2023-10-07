# ErrFrontendProovitoo

This is test project for ERR frontend developer position. The main goal of this project is to create a similar main page to ERRs Jupiter. The project is built using Angular and implements ERRs api to fetch the data displayed on the page. [Link to demo](http://176.112.158.18:4200/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Docker

First build the project as specified in the last Build step.

To build the docker image run: `docker build -t err-frontend-proovitoo .`

To run the docker container run: `docker run -d -p 8080:80 err-frontend-proovitoo`

Navigate to `http://localhost:8080/` 

## Author

[Gregor Uusväli](https://github.com/gregor-uusvali/)