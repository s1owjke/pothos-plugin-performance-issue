import { builder } from "src/builder";

import { SentientMetadatumUpdate } from "../../types/inputs/sentientMetadatum/update";
import { SentientMetadatumWhereUnique } from "../../types/inputs/sentientMetadatum/whereUnique";
import { SentientMetadatum } from "../../types/objects/sentientMetadatum";

builder.mutationField("sentientMetadatumUpdate", (t) =>
  t.field({
    type: SentientMetadatum,
    nullable: false,
    args: {
      where: t.arg({ type: SentientMetadatumWhereUnique, required: true }),
      data: t.arg({ type: SentientMetadatumUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.sentientMetadata.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
