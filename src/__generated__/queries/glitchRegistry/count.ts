import { builder } from "src/builder";

import { GlitchRegistryWhere } from "../../types/inputs/glitchRegistry/where";

builder.queryField("glitchRegistryCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GlitchRegistryWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.glitchRegistry.count({ where: args.where || undefined });
    },
  }),
);
