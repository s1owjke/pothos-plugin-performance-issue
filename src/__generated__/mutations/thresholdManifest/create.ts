import { builder } from "src/builder";

import { ThresholdManifestCreate } from "../../types/inputs/thresholdManifest/create";
import { ThresholdManifest } from "../../types/objects/thresholdManifest";

builder.mutationField("thresholdManifestCreate", (t) =>
  t.field({
    type: ThresholdManifest,
    nullable: false,
    args: {
      data: t.arg({ type: ThresholdManifestCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.thresholdManifest.create({ data: args.data });
    },
  }),
);
