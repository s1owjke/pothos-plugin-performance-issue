import { builder } from "src/builder";

import { QuantumInvoiceUpdate } from "../../types/inputs/quantumInvoice/update";
import { QuantumInvoiceWhereUnique } from "../../types/inputs/quantumInvoice/whereUnique";
import { QuantumInvoice } from "../../types/objects/quantumInvoice";

builder.mutationField("quantumInvoiceUpdateBatch", (t) =>
  t.field({
    type: [QuantumInvoice],
    nullable: false,
    args: {
      where: t.arg({ type: [QuantumInvoiceWhereUnique], required: true }),
      data: t.arg({ type: [QuantumInvoiceUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.quantumInvoice.update({ where, data });
        }),
      );
    },
  }),
);
