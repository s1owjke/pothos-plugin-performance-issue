import { builder } from "src/builder";

import { OverdueRevolutionWhere } from "../../types/inputs/overdueRevolution/where";

builder.mutationField("overdueRevolutionDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: OverdueRevolutionWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.overdueRevolution.deleteMany({ where: args.where });
      return count;
    },
  }),
);
