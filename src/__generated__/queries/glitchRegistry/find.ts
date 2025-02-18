import { builder } from "src/builder";

import { GlitchRegistryWhereUnique } from "../../types/inputs/glitchRegistry/whereUnique";
import { GlitchRegistry } from "../../types/objects/glitchRegistry";

builder.queryField("glitchRegistry", (t) =>
  t.prismaField({
    type: GlitchRegistry,
    nullable: true,
    args: {
      where: t.arg({ type: GlitchRegistryWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.glitchRegistry.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
