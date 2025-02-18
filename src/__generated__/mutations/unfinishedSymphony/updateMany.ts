import { builder } from "src/builder";

import { UnfinishedSymphonyUpdateMany } from "../../types/inputs/unfinishedSymphony/updateMany";
import { UnfinishedSymphonyWhere } from "../../types/inputs/unfinishedSymphony/where";

builder.mutationField("unfinishedSymphonyUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnfinishedSymphonyWhere, required: true }),
      data: t.arg({ type: UnfinishedSymphonyUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unfinishedSymphony.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
