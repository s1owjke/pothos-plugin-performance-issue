import { builder } from "src/builder";

import { RedundantDuplicationUpdate } from "../../types/inputs/redundantDuplication/update";
import { RedundantDuplicationWhereUnique } from "../../types/inputs/redundantDuplication/whereUnique";
import { RedundantDuplication } from "../../types/objects/redundantDuplication";

builder.mutationField("redundantDuplicationUpdate", (t) =>
  t.field({
    type: RedundantDuplication,
    nullable: false,
    args: {
      where: t.arg({ type: RedundantDuplicationWhereUnique, required: true }),
      data: t.arg({ type: RedundantDuplicationUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.redundantDuplication.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
