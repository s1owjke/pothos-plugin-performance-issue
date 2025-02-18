import { builder } from "src/builder";

import { ClassifiedSillinessWhereUnique } from "../../types/inputs/classifiedSilliness/whereUnique";

builder.mutationField("classifiedSillinessDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: ClassifiedSillinessWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.classifiedSilliness.delete({ where: args.where });
      return true;
    },
  }),
);
