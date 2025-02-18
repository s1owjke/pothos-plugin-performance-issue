import { builder } from "src/builder";

import { MissingContextWhere } from "../../types/inputs/missingContext/where";

builder.mutationField("missingContextDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: MissingContextWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.missingContext.deleteMany({ where: args.where });
      return count;
    },
  }),
);
