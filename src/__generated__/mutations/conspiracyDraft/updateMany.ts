import { builder } from "src/builder";

import { ConspiracyDraftUpdateMany } from "../../types/inputs/conspiracyDraft/updateMany";
import { ConspiracyDraftWhere } from "../../types/inputs/conspiracyDraft/where";

builder.mutationField("conspiracyDraftUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ConspiracyDraftWhere, required: true }),
      data: t.arg({ type: ConspiracyDraftUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.conspiracyDraft.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
