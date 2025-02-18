import { builder } from "src/builder";

import { BananaQueueOrderBy } from "../inputs/bananaQueue/orderBy";
import { BananaQueueWhere } from "../inputs/bananaQueue/where";
import { InterdimensionalReceiptOrderBy } from "../inputs/interdimensionalReceipt/orderBy";
import { InterdimensionalReceiptWhere } from "../inputs/interdimensionalReceipt/where";

export const SingularityReport = builder.prismaObject("SingularityReport", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    alternativeFact: t.relation("alternativeFact", { nullable: true }),
    bananaQueuesList: t.relation("bananaQueues", {
      args: {
        where: t.arg({ type: BananaQueueWhere, required: false }),
        orderBy: t.arg({ type: [BananaQueueOrderBy], required: false }),
        take: t.arg({ type: "Int", required: false }),
        skip: t.arg({ type: "Int", required: false }),
      },
      query: (args) => {
        if (args.take && args.take > 1000) {
          throw new Error("Pagination limit couldn't be greater than 1000");
        }

        return {
          where: args.where || undefined,
          orderBy: args.orderBy || undefined,
          take: args.take || 1000,
          skip: args.skip || 0,
        };
      },
    }),
    bananaQueuesCount: t.relationCount("bananaQueues", {
      args: {
        where: t.arg({ type: BananaQueueWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    emotionalSupportTable: t.relation("emotionalSupportTable", { nullable: true }),
    glitchRegistry: t.relation("glitchRegistry", { nullable: true }),
    interdimensionalReceiptsList: t.relation("interdimensionalReceipts", {
      args: {
        where: t.arg({ type: InterdimensionalReceiptWhere, required: false }),
        orderBy: t.arg({ type: [InterdimensionalReceiptOrderBy], required: false }),
        take: t.arg({ type: "Int", required: false }),
        skip: t.arg({ type: "Int", required: false }),
      },
      query: (args) => {
        if (args.take && args.take > 1000) {
          throw new Error("Pagination limit couldn't be greater than 1000");
        }

        return {
          where: args.where || undefined,
          orderBy: args.orderBy || undefined,
          take: args.take || 1000,
          skip: args.skip || 0,
        };
      },
    }),
    interdimensionalReceiptsCount: t.relationCount("interdimensionalReceipts", {
      args: {
        where: t.arg({ type: InterdimensionalReceiptWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
  }),
});
