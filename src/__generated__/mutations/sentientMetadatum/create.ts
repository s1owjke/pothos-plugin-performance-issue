import { builder } from "src/builder";

import { SentientMetadatumCreate } from "../../types/inputs/sentientMetadatum/create";
import { SentientMetadatum } from "../../types/objects/sentientMetadatum";

builder.mutationField("sentientMetadatumCreate", (t) =>
  t.field({
    type: SentientMetadatum,
    nullable: false,
    args: {
      data: t.arg({ type: SentientMetadatumCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.sentientMetadata.create({ data: args.data });
    },
  }),
);
