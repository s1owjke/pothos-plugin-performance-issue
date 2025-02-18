import { builder } from "src/builder";

import { QuantumInvoiceWhereUnique } from "../../types/inputs/quantumInvoice/whereUnique";

builder.mutationField("quantumInvoiceDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: QuantumInvoiceWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.quantumInvoice.delete({ where: args.where });
      return true;
    },
  }),
);
