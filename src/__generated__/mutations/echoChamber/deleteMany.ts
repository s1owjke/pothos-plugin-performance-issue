import { builder } from "src/builder";

import { EchoChamberWhere } from "../../types/inputs/echoChamber/where";

builder.mutationField("echoChamberDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: EchoChamberWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.echoChamber.deleteMany({ where: args.where });
      return count;
    },
  }),
);
