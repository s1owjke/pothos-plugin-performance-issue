import { builder } from "src/builder";

import { AlternativeFactUpdateMany } from "../../types/inputs/alternativeFact/updateMany";
import { AlternativeFactWhere } from "../../types/inputs/alternativeFact/where";

builder.mutationField("alternativeFactUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: AlternativeFactWhere, required: true }),
      data: t.arg({ type: AlternativeFactUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.alternativeFact.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
