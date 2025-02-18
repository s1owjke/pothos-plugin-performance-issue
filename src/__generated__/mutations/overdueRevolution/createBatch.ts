import { builder } from "src/builder";

import { OverdueRevolutionCreate } from "../../types/inputs/overdueRevolution/create";
import { OverdueRevolution } from "../../types/objects/overdueRevolution";

builder.mutationField("overdueRevolutionCreateBatch", (t) =>
  t.field({
    type: [OverdueRevolution],
    nullable: false,
    args: {
      data: t.arg({ type: [OverdueRevolutionCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.overdueRevolution.create({ data })));
    },
  }),
);
