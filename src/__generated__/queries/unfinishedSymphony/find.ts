import { builder } from "src/builder";

import { UnfinishedSymphonyWhereUnique } from "../../types/inputs/unfinishedSymphony/whereUnique";
import { UnfinishedSymphony } from "../../types/objects/unfinishedSymphony";

builder.queryField("unfinishedSymphony", (t) =>
  t.prismaField({
    type: UnfinishedSymphony,
    nullable: true,
    args: {
      where: t.arg({ type: UnfinishedSymphonyWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.unfinishedSymphony.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
