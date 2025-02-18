import { builder } from "src/builder";

import { HyperlinkedUnicornWhere } from "../../types/inputs/hyperlinkedUnicorn/where";

builder.mutationField("hyperlinkedUnicornDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: HyperlinkedUnicornWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.hyperlinkedUnicorn.deleteMany({ where: args.where });
      return count;
    },
  }),
);
