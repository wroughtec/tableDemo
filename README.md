# tableDemo

A quick example showing how the dense does not work in production with parcel but does with webpack

## Dev - parcel

- http://localhost:1234

```bash
yarn start
```

## Dev - webpack

- http://localhost:8080

```bash
yarn webpack:dev
```

## Prod - build (optional)

```bash
yarn build
yarn webpack:prod
```

## Run server

- http://localhost:9000
- http://localhost:9000/webpack

```bash
yarn build
yarn webpack:prod
```

See how clicking between dense and no dense has no affect on the production build of parcel but does on the webpack production build. Dev is fine in both
