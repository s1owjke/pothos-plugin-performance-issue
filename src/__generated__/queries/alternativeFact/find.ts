import { builder } from "src/builder";

import { AlternativeFactWhereUnique } from "../../types/inputs/alternativeFact/whereUnique";
import { AlternativeFact } from "../../types/objects/alternativeFact";

builder.queryField("alternativeFact", (t) =>
  t.prismaField({
    type: AlternativeFact,
    nullable: true,
    args: {
      where: t.arg({ type: AlternativeFactWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.alternativeFact.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
