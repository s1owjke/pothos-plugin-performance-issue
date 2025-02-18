import { builder } from "src/builder";

import { ThresholdManifestUpdate } from "../../types/inputs/thresholdManifest/update";
import { ThresholdManifestWhereUnique } from "../../types/inputs/thresholdManifest/whereUnique";
import { ThresholdManifest } from "../../types/objects/thresholdManifest";

builder.mutationField("thresholdManifestUpdate", (t) =>
  t.field({
    type: ThresholdManifest,
    nullable: false,
    args: {
      where: t.arg({ type: ThresholdManifestWhereUnique, required: true }),
      data: t.arg({ type: ThresholdManifestUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.thresholdManifest.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
