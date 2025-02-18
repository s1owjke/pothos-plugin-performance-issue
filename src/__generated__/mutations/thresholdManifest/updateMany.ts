import { builder } from "src/builder";

import { ThresholdManifestUpdateMany } from "../../types/inputs/thresholdManifest/updateMany";
import { ThresholdManifestWhere } from "../../types/inputs/thresholdManifest/where";

builder.mutationField("thresholdManifestUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ThresholdManifestWhere, required: true }),
      data: t.arg({ type: ThresholdManifestUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.thresholdManifest.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
