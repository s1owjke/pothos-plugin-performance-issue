import { builder } from "src/builder";

import { ClassifiedSillinessWhere } from "../../types/inputs/classifiedSilliness/where";

builder.mutationField("classifiedSillinessDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ClassifiedSillinessWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.classifiedSilliness.deleteMany({ where: args.where });
      return count;
    },
  }),
);
