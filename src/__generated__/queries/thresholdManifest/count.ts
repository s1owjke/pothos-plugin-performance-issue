import { builder } from "src/builder";

import { ThresholdManifestWhere } from "../../types/inputs/thresholdManifest/where";

builder.queryField("thresholdManifestCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ThresholdManifestWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.thresholdManifest.count({ where: args.where || undefined });
    },
  }),
);
