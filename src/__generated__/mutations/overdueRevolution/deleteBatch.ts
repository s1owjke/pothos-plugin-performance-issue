import { builder } from "src/builder";

import { OverdueRevolutionWhereUnique } from "../../types/inputs/overdueRevolution/whereUnique";

builder.mutationField("overdueRevolutionDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [OverdueRevolutionWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.overdueRevolution.delete({ where })));
      return true;
    },
  }),
);
