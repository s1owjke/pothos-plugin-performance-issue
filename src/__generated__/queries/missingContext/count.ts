import { builder } from "src/builder";

import { MissingContextWhere } from "../../types/inputs/missingContext/where";

builder.queryField("missingContextCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: MissingContextWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.missingContext.count({ where: args.where || undefined });
    },
  }),
);
