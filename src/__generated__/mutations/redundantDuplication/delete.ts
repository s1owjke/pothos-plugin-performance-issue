import { builder } from "src/builder";

import { RedundantDuplicationWhereUnique } from "../../types/inputs/redundantDuplication/whereUnique";

builder.mutationField("redundantDuplicationDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: RedundantDuplicationWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.redundantDuplication.delete({ where: args.where });
      return true;
    },
  }),
);
