import { builder } from "src/builder";

import { ThresholdManifestUpdate } from "../../types/inputs/thresholdManifest/update";
import { ThresholdManifestWhereUnique } from "../../types/inputs/thresholdManifest/whereUnique";
import { ThresholdManifest } from "../../types/objects/thresholdManifest";

builder.mutationField("thresholdManifestUpdateBatch", (t) =>
  t.field({
    type: [ThresholdManifest],
    nullable: false,
    args: {
      where: t.arg({ type: [ThresholdManifestWhereUnique], required: true }),
      data: t.arg({ type: [ThresholdManifestUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.thresholdManifest.update({ where, data });
        }),
      );
    },
  }),
);
