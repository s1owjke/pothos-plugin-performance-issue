import { builder } from "src/builder";

import { ThresholdManifestWhereUnique } from "../../types/inputs/thresholdManifest/whereUnique";

builder.mutationField("thresholdManifestDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: ThresholdManifestWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.thresholdManifest.delete({ where: args.where });
      return true;
    },
  }),
);
