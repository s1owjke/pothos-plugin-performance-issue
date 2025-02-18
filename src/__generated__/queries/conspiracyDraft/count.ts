import { builder } from "src/builder";

import { ConspiracyDraftWhere } from "../../types/inputs/conspiracyDraft/where";

builder.queryField("conspiracyDraftCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ConspiracyDraftWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.conspiracyDraft.count({ where: args.where || undefined });
    },
  }),
);
