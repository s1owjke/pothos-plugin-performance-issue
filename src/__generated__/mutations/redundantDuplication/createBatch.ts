import { builder } from "src/builder";

import { RedundantDuplicationCreate } from "../../types/inputs/redundantDuplication/create";
import { RedundantDuplication } from "../../types/objects/redundantDuplication";

builder.mutationField("redundantDuplicationCreateBatch", (t) =>
  t.field({
    type: [RedundantDuplication],
    nullable: false,
    args: {
      data: t.arg({ type: [RedundantDuplicationCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.redundantDuplication.create({ data })));
    },
  }),
);
