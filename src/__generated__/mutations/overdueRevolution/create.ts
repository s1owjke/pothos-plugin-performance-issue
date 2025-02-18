import { builder } from "src/builder";

import { OverdueRevolutionCreate } from "../../types/inputs/overdueRevolution/create";
import { OverdueRevolution } from "../../types/objects/overdueRevolution";

builder.mutationField("overdueRevolutionCreate", (t) =>
  t.field({
    type: OverdueRevolution,
    nullable: false,
    args: {
      data: t.arg({ type: OverdueRevolutionCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.overdueRevolution.create({ data: args.data });
    },
  }),
);
