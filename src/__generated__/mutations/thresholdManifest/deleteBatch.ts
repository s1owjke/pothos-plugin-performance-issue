import { builder } from "src/builder";

import { ThresholdManifestWhereUnique } from "../../types/inputs/thresholdManifest/whereUnique";

builder.mutationField("thresholdManifestDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [ThresholdManifestWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.thresholdManifest.delete({ where })));
      return true;
    },
  }),
);
