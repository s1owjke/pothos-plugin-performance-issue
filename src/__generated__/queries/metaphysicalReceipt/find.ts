import { builder } from "src/builder";

import { MetaphysicalReceiptWhereUnique } from "../../types/inputs/metaphysicalReceipt/whereUnique";
import { MetaphysicalReceipt } from "../../types/objects/metaphysicalReceipt";

builder.queryField("metaphysicalReceipt", (t) =>
  t.prismaField({
    type: MetaphysicalReceipt,
    nullable: true,
    args: {
      where: t.arg({ type: MetaphysicalReceiptWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.metaphysicalReceipt.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
