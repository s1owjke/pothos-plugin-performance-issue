import { builder } from "src/builder";

import { SentientMetadatumWhereUnique } from "../../types/inputs/sentientMetadatum/whereUnique";

builder.mutationField("sentientMetadatumDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [SentientMetadatumWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.sentientMetadata.delete({ where })));
      return true;
    },
  }),
);
