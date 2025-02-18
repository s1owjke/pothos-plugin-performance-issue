import { builder } from "src/builder";

import { QuantumInvoiceWhereUnique } from "../../types/inputs/quantumInvoice/whereUnique";
import { QuantumInvoice } from "../../types/objects/quantumInvoice";

builder.queryField("quantumInvoice", (t) =>
  t.prismaField({
    type: QuantumInvoice,
    nullable: true,
    args: {
      where: t.arg({ type: QuantumInvoiceWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.quantumInvoice.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
