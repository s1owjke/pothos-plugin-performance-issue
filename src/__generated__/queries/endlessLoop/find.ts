import { builder } from "src/builder";

import { EndlessLoopWhereUnique } from "../../types/inputs/endlessLoop/whereUnique";
import { EndlessLoop } from "../../types/objects/endlessLoop";

builder.queryField("endlessLoop", (t) =>
  t.prismaField({
    type: EndlessLoop,
    nullable: true,
    args: {
      where: t.arg({ type: EndlessLoopWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.endlessLoop.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
