import { builder } from "src/builder";

import { SentientMetadatumOrderBy } from "../../types/inputs/sentientMetadatum/orderBy";
import { SentientMetadatumWhere } from "../../types/inputs/sentientMetadatum/where";
import { SentientMetadatum } from "../../types/objects/sentientMetadatum";

builder.queryField("sentientMetadatumList", (t) =>
  t.prismaField({
    type: [SentientMetadatum],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: SentientMetadatumWhere }),
      orderBy: t.arg({ type: [SentientMetadatumOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.sentientMetadata.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
