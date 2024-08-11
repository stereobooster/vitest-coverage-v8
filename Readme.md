# coverage examples

This is deprecated repo. See this one instead https://github.com/stereobooster/test-coverage-calculation

## C8

```
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------|---------|----------|---------|---------|-------------------
 example1.c8.js |   85.71 |       75 |     100 |   85.71 | 9-10
 example2.c8.js |     100 |      100 |     100 |     100 |
 example3.c8.js |     100 |      100 |     100 |     100 |
 example4.c8.js |      90 |       75 |     100 |      90 | 6
 example5.c8.js |     100 |       80 |     100 |     100 | 5
----------------|---------|----------|---------|---------|-------------------
```

## v8 coverage

![](./v8.png)

## istanbul coverage

![](./istanbul.png)

As you can see `istanbul` coverage much more consistent and precise.

Not sure, though, why it counts 4 branches in total and not 3.
