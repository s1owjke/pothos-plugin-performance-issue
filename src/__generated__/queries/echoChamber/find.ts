import { builder } from "src/builder";

import { EchoChamberWhereUnique } from "../../types/inputs/echoChamber/whereUnique";
import { EchoChamber } from "../../types/objects/echoChamber";

builder.queryField("echoChamber", (t) =>
  t.prismaField({
    type: EchoChamber,
    nullable: true,
    args: {
      where: t.arg({ type: EchoChamberWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.echoChamber.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
