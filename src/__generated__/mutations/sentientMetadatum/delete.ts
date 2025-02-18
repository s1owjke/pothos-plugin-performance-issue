import { builder } from "src/builder";

import { SentientMetadatumWhereUnique } from "../../types/inputs/sentientMetadatum/whereUnique";

builder.mutationField("sentientMetadatumDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: SentientMetadatumWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.sentientMetadata.delete({ where: args.where });
      return true;
    },
  }),
);
