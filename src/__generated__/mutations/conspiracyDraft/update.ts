import { builder } from "src/builder";

import { ConspiracyDraftUpdate } from "../../types/inputs/conspiracyDraft/update";
import { ConspiracyDraftWhereUnique } from "../../types/inputs/conspiracyDraft/whereUnique";
import { ConspiracyDraft } from "../../types/objects/conspiracyDraft";

builder.mutationField("conspiracyDraftUpdate", (t) =>
  t.field({
    type: ConspiracyDraft,
    nullable: false,
    args: {
      where: t.arg({ type: ConspiracyDraftWhereUnique, required: true }),
      data: t.arg({ type: ConspiracyDraftUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.conspiracyDraft.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
