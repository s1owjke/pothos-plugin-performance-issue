import { builder } from "src/builder";

import { EchoChamberWhereUnique } from "../../types/inputs/echoChamber/whereUnique";

builder.mutationField("echoChamberDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: EchoChamberWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.echoChamber.delete({ where: args.where });
      return true;
    },
  }),
);
