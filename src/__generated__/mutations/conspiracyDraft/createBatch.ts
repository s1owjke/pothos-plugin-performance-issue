import { builder } from "src/builder";

import { ConspiracyDraftCreate } from "../../types/inputs/conspiracyDraft/create";
import { ConspiracyDraft } from "../../types/objects/conspiracyDraft";

builder.mutationField("conspiracyDraftCreateBatch", (t) =>
  t.field({
    type: [ConspiracyDraft],
    nullable: false,
    args: {
      data: t.arg({ type: [ConspiracyDraftCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.conspiracyDraft.create({ data })));
    },
  }),
);
