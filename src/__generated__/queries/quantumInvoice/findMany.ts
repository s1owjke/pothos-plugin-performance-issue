import { builder } from "src/builder";

import { QuantumInvoiceOrderBy } from "../../types/inputs/quantumInvoice/orderBy";
import { QuantumInvoiceWhere } from "../../types/inputs/quantumInvoice/where";
import { QuantumInvoice } from "../../types/objects/quantumInvoice";

builder.queryField("quantumInvoiceList", (t) =>
  t.prismaField({
    type: [QuantumInvoice],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: QuantumInvoiceWhere }),
      orderBy: t.arg({ type: [QuantumInvoiceOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.quantumInvoice.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
