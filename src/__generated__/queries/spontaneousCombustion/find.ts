import { builder } from "src/builder";

import { SpontaneousCombustionWhereUnique } from "../../types/inputs/spontaneousCombustion/whereUnique";
import { SpontaneousCombustion } from "../../types/objects/spontaneousCombustion";

builder.queryField("spontaneousCombustion", (t) =>
  t.prismaField({
    type: SpontaneousCombustion,
    nullable: true,
    args: {
      where: t.arg({ type: SpontaneousCombustionWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.spontaneousCombustion.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
