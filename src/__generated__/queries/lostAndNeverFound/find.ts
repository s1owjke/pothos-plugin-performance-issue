import { builder } from "src/builder";

import { LostAndNeverFoundWhereUnique } from "../../types/inputs/lostAndNeverFound/whereUnique";
import { LostAndNeverFound } from "../../types/objects/lostAndNeverFound";

builder.queryField("lostAndNeverFound", (t) =>
  t.prismaField({
    type: LostAndNeverFound,
    nullable: true,
    args: {
      where: t.arg({ type: LostAndNeverFoundWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.lostAndNeverFound.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
