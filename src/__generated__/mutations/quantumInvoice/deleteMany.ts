import { builder } from "src/builder";

import { QuantumInvoiceWhere } from "../../types/inputs/quantumInvoice/where";

builder.mutationField("quantumInvoiceDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: QuantumInvoiceWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.quantumInvoice.deleteMany({ where: args.where });
      return count;
    },
  }),
);
