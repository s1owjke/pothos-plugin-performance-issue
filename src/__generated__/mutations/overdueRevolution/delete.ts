import { builder } from "src/builder";

import { OverdueRevolutionWhereUnique } from "../../types/inputs/overdueRevolution/whereUnique";

builder.mutationField("overdueRevolutionDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: OverdueRevolutionWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.overdueRevolution.delete({ where: args.where });
      return true;
    },
  }),
);
