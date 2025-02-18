import { builder } from "src/builder";

import { ClassifiedSillinessUpdateMany } from "../../types/inputs/classifiedSilliness/updateMany";
import { ClassifiedSillinessWhere } from "../../types/inputs/classifiedSilliness/where";

builder.mutationField("classifiedSillinessUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ClassifiedSillinessWhere, required: true }),
      data: t.arg({ type: ClassifiedSillinessUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.classifiedSilliness.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
