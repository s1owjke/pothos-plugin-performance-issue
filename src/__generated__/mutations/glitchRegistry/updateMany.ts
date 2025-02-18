import { builder } from "src/builder";

import { GlitchRegistryUpdateMany } from "../../types/inputs/glitchRegistry/updateMany";
import { GlitchRegistryWhere } from "../../types/inputs/glitchRegistry/where";

builder.mutationField("glitchRegistryUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GlitchRegistryWhere, required: true }),
      data: t.arg({ type: GlitchRegistryUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.glitchRegistry.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
