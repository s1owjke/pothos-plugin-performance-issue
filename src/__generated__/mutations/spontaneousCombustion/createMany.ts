import { builder } from "src/builder";

import { SpontaneousCombustionCreateMany } from "../../types/inputs/spontaneousCombustion/createMany";

builder.mutationField("spontaneousCombustionCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [SpontaneousCombustionCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.spontaneousCombustion.createMany({ data: args.data });
      return count;
    },
  }),
);
