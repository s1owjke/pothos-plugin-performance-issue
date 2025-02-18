import { builder } from "src/builder";

import { ConspiracyDraftWhereUnique } from "../../types/inputs/conspiracyDraft/whereUnique";

builder.mutationField("conspiracyDraftDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: ConspiracyDraftWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.conspiracyDraft.delete({ where: args.where });
      return true;
    },
  }),
);
