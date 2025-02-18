import { builder } from "src/builder";

import { ConspiracyDraftWhereUnique } from "../../types/inputs/conspiracyDraft/whereUnique";

builder.mutationField("conspiracyDraftDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [ConspiracyDraftWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.conspiracyDraft.delete({ where })));
      return true;
    },
  }),
);
