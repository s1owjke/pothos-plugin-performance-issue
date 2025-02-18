import { builder } from "src/builder";

import { UnfinishedPrototypeWhereUnique } from "../../types/inputs/unfinishedPrototype/whereUnique";
import { UnfinishedPrototype } from "../../types/objects/unfinishedPrototype";

builder.queryField("unfinishedPrototype", (t) =>
  t.prismaField({
    type: UnfinishedPrototype,
    nullable: true,
    args: {
      where: t.arg({ type: UnfinishedPrototypeWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.unfinishedPrototype.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
