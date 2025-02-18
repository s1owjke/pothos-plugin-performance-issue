import { builder } from "src/builder";

import { OverdueRevolutionUpdateMany } from "../../types/inputs/overdueRevolution/updateMany";
import { OverdueRevolutionWhere } from "../../types/inputs/overdueRevolution/where";

builder.mutationField("overdueRevolutionUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: OverdueRevolutionWhere, required: true }),
      data: t.arg({ type: OverdueRevolutionUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.overdueRevolution.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
