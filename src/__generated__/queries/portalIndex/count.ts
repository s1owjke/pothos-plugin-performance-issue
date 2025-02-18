import { builder } from "src/builder";

import { PortalIndexWhere } from "../../types/inputs/portalIndex/where";

builder.queryField("portalIndexCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PortalIndexWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.portalIndex.count({ where: args.where || undefined });
    },
  }),
);
