import { builder } from "src/builder";

import { RejectedTheoryWhereUnique } from "../../types/inputs/rejectedTheory/whereUnique";

builder.mutationField("rejectedTheoryDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [RejectedTheoryWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.rejectedTheory.delete({ where })));
      return true;
    },
  }),
);
