import { builder } from "src/builder";

import { RecursiveRecursionWhere } from "../../types/inputs/recursiveRecursion/where";

builder.queryField("recursiveRecursionCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RecursiveRecursionWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.recursiveRecursion.count({ where: args.where || undefined });
    },
  }),
);
