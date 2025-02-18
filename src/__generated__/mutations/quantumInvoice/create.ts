import { builder } from "src/builder";

import { QuantumInvoiceCreate } from "../../types/inputs/quantumInvoice/create";
import { QuantumInvoice } from "../../types/objects/quantumInvoice";

builder.mutationField("quantumInvoiceCreate", (t) =>
  t.field({
    type: QuantumInvoice,
    nullable: false,
    args: {
      data: t.arg({ type: QuantumInvoiceCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.quantumInvoice.create({ data: args.data });
    },
  }),
);
