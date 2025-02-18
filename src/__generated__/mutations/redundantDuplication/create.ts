import { builder } from "src/builder";

import { RedundantDuplicationCreate } from "../../types/inputs/redundantDuplication/create";
import { RedundantDuplication } from "../../types/objects/redundantDuplication";

builder.mutationField("redundantDuplicationCreate", (t) =>
  t.field({
    type: RedundantDuplication,
    nullable: false,
    args: {
      data: t.arg({ type: RedundantDuplicationCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.redundantDuplication.create({ data: args.data });
    },
  }),
);
