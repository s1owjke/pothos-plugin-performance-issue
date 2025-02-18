import { builder } from "src/builder";

import { ThresholdManifestOrderBy } from "../../types/inputs/thresholdManifest/orderBy";
import { ThresholdManifestWhere } from "../../types/inputs/thresholdManifest/where";
import { ThresholdManifest } from "../../types/objects/thresholdManifest";

builder.queryField("thresholdManifestList", (t) =>
  t.prismaField({
    type: [ThresholdManifest],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: ThresholdManifestWhere }),
      orderBy: t.arg({ type: [ThresholdManifestOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.thresholdManifest.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
