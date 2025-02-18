import { builder } from "src/builder";

import { ConspiracyDraftUpdate } from "../../types/inputs/conspiracyDraft/update";
import { ConspiracyDraftWhereUnique } from "../../types/inputs/conspiracyDraft/whereUnique";
import { ConspiracyDraft } from "../../types/objects/conspiracyDraft";

builder.mutationField("conspiracyDraftUpdateBatch", (t) =>
  t.field({
    type: [ConspiracyDraft],
    nullable: false,
    args: {
      where: t.arg({ type: [ConspiracyDraftWhereUnique], required: true }),
      data: t.arg({ type: [ConspiracyDraftUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.conspiracyDraft.update({ where, data });
        }),
      );
    },
  }),
);
