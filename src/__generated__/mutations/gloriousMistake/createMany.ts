import { builder } from "src/builder";

import { GloriousMistakeCreateMany } from "../../types/inputs/gloriousMistake/createMany";

builder.mutationField("gloriousMistakeCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [GloriousMistakeCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.gloriousMistake.createMany({ data: args.data });
      return count;
    },
  }),
);
