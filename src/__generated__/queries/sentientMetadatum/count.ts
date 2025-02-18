import { builder } from "src/builder";

import { SentientMetadatumWhere } from "../../types/inputs/sentientMetadatum/where";

builder.queryField("sentientMetadatumCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SentientMetadatumWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.sentientMetadata.count({ where: args.where || undefined });
    },
  }),
);
