import { builder } from "src/builder";

import { QuantumInvoiceCreateMany } from "../../types/inputs/quantumInvoice/createMany";

builder.mutationField("quantumInvoiceCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [QuantumInvoiceCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.quantumInvoice.createMany({ data: args.data });
      return count;
    },
  }),
);
