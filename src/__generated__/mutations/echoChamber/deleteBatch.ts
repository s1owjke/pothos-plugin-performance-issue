import { builder } from "src/builder";

import { EchoChamberWhereUnique } from "../../types/inputs/echoChamber/whereUnique";

builder.mutationField("echoChamberDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [EchoChamberWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.echoChamber.delete({ where })));
      return true;
    },
  }),
);
