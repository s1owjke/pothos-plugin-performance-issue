import { builder } from "src/builder";

import { EchoChamberCreateMany } from "../../types/inputs/echoChamber/createMany";

builder.mutationField("echoChamberCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [EchoChamberCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.echoChamber.createMany({ data: args.data });
      return count;
    },
  }),
);
