import { builder } from "src/builder";

import { SentientMetadatumUpdateMany } from "../../types/inputs/sentientMetadatum/updateMany";
import { SentientMetadatumWhere } from "../../types/inputs/sentientMetadatum/where";

builder.mutationField("sentientMetadatumUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SentientMetadatumWhere, required: true }),
      data: t.arg({ type: SentientMetadatumUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.sentientMetadata.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
