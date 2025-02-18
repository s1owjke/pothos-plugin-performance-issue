import { builder } from "src/builder";

import { OverdueRevolutionUpdate } from "../../types/inputs/overdueRevolution/update";
import { OverdueRevolutionWhereUnique } from "../../types/inputs/overdueRevolution/whereUnique";
import { OverdueRevolution } from "../../types/objects/overdueRevolution";

builder.mutationField("overdueRevolutionUpdateBatch", (t) =>
  t.field({
    type: [OverdueRevolution],
    nullable: false,
    args: {
      where: t.arg({ type: [OverdueRevolutionWhereUnique], required: true }),
      data: t.arg({ type: [OverdueRevolutionUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.overdueRevolution.update({ where, data });
        }),
      );
    },
  }),
);
