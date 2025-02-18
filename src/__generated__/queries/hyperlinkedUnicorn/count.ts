import { builder } from "src/builder";

import { HyperlinkedUnicornWhere } from "../../types/inputs/hyperlinkedUnicorn/where";

builder.queryField("hyperlinkedUnicornCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: HyperlinkedUnicornWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.hyperlinkedUnicorn.count({ where: args.where || undefined });
    },
  }),
);
