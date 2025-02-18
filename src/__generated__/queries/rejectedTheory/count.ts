import { builder } from "src/builder";

import { RejectedTheoryWhere } from "../../types/inputs/rejectedTheory/where";

builder.queryField("rejectedTheoryCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RejectedTheoryWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.rejectedTheory.count({ where: args.where || undefined });
    },
  }),
);
