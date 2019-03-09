
# Spring -> OpneAPI => Angular Starter

[![Build Status](https://travis-ci.org/chibat/spring-openapi-angular-starter.svg?branch=master)](https://travis-ci.org/chibat/spring-openapi-angular-starter)

## Feature

* Type safe communication

## Architecture

<img src="https://docs.google.com/drawings/d/e/2PACX-1vSxXwLG6sgD4_NhSHS4cT3R2geZeDDz2lMDlSYnecIG77jE-Eu9KRdFYrLeMLV6LyBY6Ftft09APNHQ/pub?w=632&amp;h=367">

## Prerequisites

* JDK11
* [node + npm](https://nodejs.org/) (Current Version)

## Run

```
$ cd backend
$ ./gradlew bootRun
```

Open following URL by Web browser.  
http://localhost:8080/

## Run the frontend dev server

```
$ cd frontend
$ npm install
$ npm start
```

Open following URL by Web browser.  
http://localhost:4200/

### 1. Create a Web backend code

#### CalculatorController.java

```java
package app.backend.web;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.ApiOperation;
import lombok.Data;
import lombok.Value;

@RestController
public class CalculatorController {

    @PostMapping("/rest/api/add")
    @ApiOperation(value = "", tags = "calculator", nickname = "add")
    public Response add(@RequestBody final Request request) {
        return new Response(request.getArg1() + request.getArg2());
    }

    @Data
    public static class Request {
        private Integer arg1;
        private Integer arg2;
    }

    @Value
    public static class Response {
        private final Integer result;
    }
}
```

### 2. Generate the client code

```
$ cd backend
$ ./gradlew openApiGenerate
```

### 3. Create a Web frontend code using the Generated files

#### app.component.ts

```typescript
import { Component } from '@angular/core';
import { CalculatorService } from './client/api/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arg1: number;
  arg2: number;
  result: number;

  constructor(private  calculatorService: CalculatorService) {
  }

  add() {
    if (this.arg1 || this.arg2) {
      this.calculatorService
        .add({arg1: this.arg1, arg2: this.arg2})
        .subscribe(data => this.result = data.result);
    }
  }
}
```

## blog

[Japanese](https://qiita.com/chibato/items/e4a748db12409b40c02f)
