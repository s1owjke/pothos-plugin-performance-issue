import { builder } from "src/builder";

import { QuantumInvoiceUpdateMany } from "../../types/inputs/quantumInvoice/updateMany";
import { QuantumInvoiceWhere } from "../../types/inputs/quantumInvoice/where";

builder.mutationField("quantumInvoiceUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: QuantumInvoiceWhere, required: true }),
      data: t.arg({ type: QuantumInvoiceUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.quantumInvoice.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
