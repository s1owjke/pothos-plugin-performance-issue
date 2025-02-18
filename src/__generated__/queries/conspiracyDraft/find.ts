import { builder } from "src/builder";

import { ConspiracyDraftWhereUnique } from "../../types/inputs/conspiracyDraft/whereUnique";
import { ConspiracyDraft } from "../../types/objects/conspiracyDraft";

builder.queryField("conspiracyDraft", (t) =>
  t.prismaField({
    type: ConspiracyDraft,
    nullable: true,
    args: {
      where: t.arg({ type: ConspiracyDraftWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.conspiracyDraft.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
