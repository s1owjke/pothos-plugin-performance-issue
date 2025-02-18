import { builder } from "src/builder";

import { ReverseTransactionUpdateMany } from "../../types/inputs/reverseTransaction/updateMany";
import { ReverseTransactionWhere } from "../../types/inputs/reverseTransaction/where";

builder.mutationField("reverseTransactionUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ReverseTransactionWhere, required: true }),
      data: t.arg({ type: ReverseTransactionUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.reverseTransaction.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
