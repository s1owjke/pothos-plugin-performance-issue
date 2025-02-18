import { builder } from "src/builder";

import { SentientMetadatumCreateMany } from "../../types/inputs/sentientMetadatum/createMany";

builder.mutationField("sentientMetadatumCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [SentientMetadatumCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.sentientMetadata.createMany({ data: args.data });
      return count;
    },
  }),
);
