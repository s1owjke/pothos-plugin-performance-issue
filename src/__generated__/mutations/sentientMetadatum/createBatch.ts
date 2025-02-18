import { builder } from "src/builder";

import { SentientMetadatumCreate } from "../../types/inputs/sentientMetadatum/create";
import { SentientMetadatum } from "../../types/objects/sentientMetadatum";

builder.mutationField("sentientMetadatumCreateBatch", (t) =>
  t.field({
    type: [SentientMetadatum],
    nullable: false,
    args: {
      data: t.arg({ type: [SentientMetadatumCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.sentientMetadata.create({ data })));
    },
  }),
);
