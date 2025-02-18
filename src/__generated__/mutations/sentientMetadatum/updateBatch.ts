import { builder } from "src/builder";

import { SentientMetadatumUpdate } from "../../types/inputs/sentientMetadatum/update";
import { SentientMetadatumWhereUnique } from "../../types/inputs/sentientMetadatum/whereUnique";
import { SentientMetadatum } from "../../types/objects/sentientMetadatum";

builder.mutationField("sentientMetadatumUpdateBatch", (t) =>
  t.field({
    type: [SentientMetadatum],
    nullable: false,
    args: {
      where: t.arg({ type: [SentientMetadatumWhereUnique], required: true }),
      data: t.arg({ type: [SentientMetadatumUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.sentientMetadata.update({ where, data });
        }),
      );
    },
  }),
);
