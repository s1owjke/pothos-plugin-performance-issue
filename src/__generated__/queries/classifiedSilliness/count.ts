import { builder } from "src/builder";

import { ClassifiedSillinessWhere } from "../../types/inputs/classifiedSilliness/where";

builder.queryField("classifiedSillinessCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ClassifiedSillinessWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.classifiedSilliness.count({ where: args.where || undefined });
    },
  }),
);
