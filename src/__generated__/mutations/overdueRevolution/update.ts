import { builder } from "src/builder";

import { OverdueRevolutionUpdate } from "../../types/inputs/overdueRevolution/update";
import { OverdueRevolutionWhereUnique } from "../../types/inputs/overdueRevolution/whereUnique";
import { OverdueRevolution } from "../../types/objects/overdueRevolution";

builder.mutationField("overdueRevolutionUpdate", (t) =>
  t.field({
    type: OverdueRevolution,
    nullable: false,
    args: {
      where: t.arg({ type: OverdueRevolutionWhereUnique, required: true }),
      data: t.arg({ type: OverdueRevolutionUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.overdueRevolution.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
