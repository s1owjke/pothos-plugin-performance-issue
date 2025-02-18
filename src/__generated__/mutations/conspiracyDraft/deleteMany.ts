import { builder } from "src/builder";

import { ConspiracyDraftWhere } from "../../types/inputs/conspiracyDraft/where";

builder.mutationField("conspiracyDraftDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ConspiracyDraftWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.conspiracyDraft.deleteMany({ where: args.where });
      return count;
    },
  }),
);
