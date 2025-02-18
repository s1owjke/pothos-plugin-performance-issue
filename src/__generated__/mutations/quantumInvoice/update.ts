import { builder } from "src/builder";

import { QuantumInvoiceUpdate } from "../../types/inputs/quantumInvoice/update";
import { QuantumInvoiceWhereUnique } from "../../types/inputs/quantumInvoice/whereUnique";
import { QuantumInvoice } from "../../types/objects/quantumInvoice";

builder.mutationField("quantumInvoiceUpdate", (t) =>
  t.field({
    type: QuantumInvoice,
    nullable: false,
    args: {
      where: t.arg({ type: QuantumInvoiceWhereUnique, required: true }),
      data: t.arg({ type: QuantumInvoiceUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.quantumInvoice.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
