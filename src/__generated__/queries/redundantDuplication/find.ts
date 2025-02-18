import { builder } from "src/builder";

import { RedundantDuplicationWhereUnique } from "../../types/inputs/redundantDuplication/whereUnique";
import { RedundantDuplication } from "../../types/objects/redundantDuplication";

builder.queryField("redundantDuplication", (t) =>
  t.prismaField({
    type: RedundantDuplication,
    nullable: true,
    args: {
      where: t.arg({ type: RedundantDuplicationWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.redundantDuplication.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
