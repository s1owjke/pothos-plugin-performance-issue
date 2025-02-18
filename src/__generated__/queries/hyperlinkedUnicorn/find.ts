import { builder } from "src/builder";

import { HyperlinkedUnicornWhereUnique } from "../../types/inputs/hyperlinkedUnicorn/whereUnique";
import { HyperlinkedUnicorn } from "../../types/objects/hyperlinkedUnicorn";

builder.queryField("hyperlinkedUnicorn", (t) =>
  t.prismaField({
    type: HyperlinkedUnicorn,
    nullable: true,
    args: {
      where: t.arg({ type: HyperlinkedUnicornWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.hyperlinkedUnicorn.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
