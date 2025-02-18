import { builder } from "src/builder";

import { UnfinishedPrototypeUpdateMany } from "../../types/inputs/unfinishedPrototype/updateMany";
import { UnfinishedPrototypeWhere } from "../../types/inputs/unfinishedPrototype/where";

builder.mutationField("unfinishedPrototypeUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnfinishedPrototypeWhere, required: true }),
      data: t.arg({ type: UnfinishedPrototypeUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unfinishedPrototype.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
