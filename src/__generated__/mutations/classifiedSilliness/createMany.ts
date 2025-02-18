import { builder } from "src/builder";

import { ClassifiedSillinessCreateMany } from "../../types/inputs/classifiedSilliness/createMany";

builder.mutationField("classifiedSillinessCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [ClassifiedSillinessCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.classifiedSilliness.createMany({ data: args.data });
      return count;
    },
  }),
);
