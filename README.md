# Pothos Plugin Performance Issue

Environment versions node 22.x, yarn 1.x

## How to reproduce

Install dependencies, run prisma generate and build the example:

```shell
yarn
yarn prisma generate
yarn build
```

Run the app to reproduce the issue, it will display the build time and collect profile data:

```shell
yarn start
```

To process isolate logs `isolate-*.log` run the following command:

```shell
yarn process-profile
```

Once completed, the processed stats will be saved in `processed.txt` file.
