import { builder } from "src/builder";

import { InterdimensionalReceiptWhereUnique } from "../../types/inputs/interdimensionalReceipt/whereUnique";
import { InterdimensionalReceipt } from "../../types/objects/interdimensionalReceipt";

builder.queryField("interdimensionalReceipt", (t) =>
  t.prismaField({
    type: InterdimensionalReceipt,
    nullable: true,
    args: {
      where: t.arg({ type: InterdimensionalReceiptWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.interdimensionalReceipt.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
