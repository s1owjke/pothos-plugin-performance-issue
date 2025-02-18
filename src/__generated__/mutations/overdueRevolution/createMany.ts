import { builder } from "src/builder";

import { OverdueRevolutionCreateMany } from "../../types/inputs/overdueRevolution/createMany";

builder.mutationField("overdueRevolutionCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [OverdueRevolutionCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.overdueRevolution.createMany({ data: args.data });
      return count;
    },
  }),
);
