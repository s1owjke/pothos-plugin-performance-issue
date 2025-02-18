import { builder } from "src/builder";

import { ConspiracyDraftCreateMany } from "../../types/inputs/conspiracyDraft/createMany";

builder.mutationField("conspiracyDraftCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [ConspiracyDraftCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.conspiracyDraft.createMany({ data: args.data });
      return count;
    },
  }),
);
