import { builder } from "src/builder";

import { SentientMetadatumWhere } from "../../types/inputs/sentientMetadatum/where";

builder.mutationField("sentientMetadatumDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SentientMetadatumWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.sentientMetadata.deleteMany({ where: args.where });
      return count;
    },
  }),
);
