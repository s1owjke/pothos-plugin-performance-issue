import { builder } from "src/builder";

import { GlitchRegistryOrderBy } from "../../types/inputs/glitchRegistry/orderBy";
import { GlitchRegistryWhere } from "../../types/inputs/glitchRegistry/where";
import { GlitchRegistry } from "../../types/objects/glitchRegistry";

builder.queryField("glitchRegistryList", (t) =>
  t.prismaField({
    type: [GlitchRegistry],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: GlitchRegistryWhere }),
      orderBy: t.arg({ type: [GlitchRegistryOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.glitchRegistry.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
