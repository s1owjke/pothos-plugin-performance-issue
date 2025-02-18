import { builder } from "src/builder";

import { QuantumInvoiceWhereUnique } from "../../types/inputs/quantumInvoice/whereUnique";

builder.mutationField("quantumInvoiceDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [QuantumInvoiceWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.quantumInvoice.delete({ where })));
      return true;
    },
  }),
);
