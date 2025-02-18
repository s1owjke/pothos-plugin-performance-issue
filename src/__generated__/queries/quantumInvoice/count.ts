import { builder } from "src/builder";

import { QuantumInvoiceWhere } from "../../types/inputs/quantumInvoice/where";

builder.queryField("quantumInvoiceCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: QuantumInvoiceWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.quantumInvoice.count({ where: args.where || undefined });
    },
  }),
);
