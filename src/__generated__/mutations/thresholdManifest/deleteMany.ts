import { builder } from "src/builder";

import { ThresholdManifestWhere } from "../../types/inputs/thresholdManifest/where";

builder.mutationField("thresholdManifestDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ThresholdManifestWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.thresholdManifest.deleteMany({ where: args.where });
      return count;
    },
  }),
);
