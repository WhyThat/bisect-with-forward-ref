Can't use [bisect_ppx](https://github.com/aantron/bisect_ppx) when components use a ```React.forwardRef`

Steps to reproduce bug
```shell
yarn
yarn build
```
-> it works

and with bisect enable
```shell
yarn clean
BISECT_ENABLE=yes yarn build
```
-> Fails with this error:

```
Fatal error: exception Invalid_argument("react.component calls can only be on function definitions or component wrappers (forwardRef, memo).")
```

