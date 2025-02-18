import { builder } from "src/builder";

import { ThresholdManifestCreateMany } from "../../types/inputs/thresholdManifest/createMany";

builder.mutationField("thresholdManifestCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [ThresholdManifestCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.thresholdManifest.createMany({ data: args.data });
      return count;
    },
  }),
);
