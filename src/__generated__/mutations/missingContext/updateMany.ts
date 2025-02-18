import { builder } from "src/builder";

import { MissingContextUpdateMany } from "../../types/inputs/missingContext/updateMany";
import { MissingContextWhere } from "../../types/inputs/missingContext/where";

builder.mutationField("missingContextUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: MissingContextWhere, required: true }),
      data: t.arg({ type: MissingContextUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.missingContext.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
