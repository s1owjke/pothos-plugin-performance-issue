import { builder } from "src/builder";

import { ThresholdManifestWhereUnique } from "../../types/inputs/thresholdManifest/whereUnique";
import { ThresholdManifest } from "../../types/objects/thresholdManifest";

builder.queryField("thresholdManifest", (t) =>
  t.prismaField({
    type: ThresholdManifest,
    nullable: true,
    args: {
      where: t.arg({ type: ThresholdManifestWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.thresholdManifest.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
