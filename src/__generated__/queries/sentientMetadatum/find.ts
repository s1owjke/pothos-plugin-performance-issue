import { builder } from "src/builder";

import { SentientMetadatumWhereUnique } from "../../types/inputs/sentientMetadatum/whereUnique";
import { SentientMetadatum } from "../../types/objects/sentientMetadatum";

builder.queryField("sentientMetadatum", (t) =>
  t.prismaField({
    type: SentientMetadatum,
    nullable: true,
    args: {
      where: t.arg({ type: SentientMetadatumWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.sentientMetadata.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
