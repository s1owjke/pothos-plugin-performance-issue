import { builder } from "src/builder";

import { EndlessLoopOrderBy } from "../inputs/endlessLoop/orderBy";
import { EndlessLoopWhere } from "../inputs/endlessLoop/where";
import { OverdueRevolutionOrderBy } from "../inputs/overdueRevolution/orderBy";
import { OverdueRevolutionWhere } from "../inputs/overdueRevolution/where";

export const PocketUniverse = builder.prismaObject("PocketUniverse", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    endlessLoopsList: t.relation("endlessLoops", {
      args: {
        where: t.arg({ type: EndlessLoopWhere, required: false }),
        orderBy: t.arg({ type: [EndlessLoopOrderBy], required: false }),
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
    endlessLoopsCount: t.relationCount("endlessLoops", {
      args: {
        where: t.arg({ type: EndlessLoopWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    gravityOverride: t.relation("gravityOverride", { nullable: false }),
    gravityOverrideId: t.expose("gravityOverrideId", { type: "ID", nullable: false }),
    overdueRevolutionsList: t.relation("overdueRevolutions", {
      args: {
        where: t.arg({ type: OverdueRevolutionWhere, required: false }),
        orderBy: t.arg({ type: [OverdueRevolutionOrderBy], required: false }),
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
    overdueRevolutionsCount: t.relationCount("overdueRevolutions", {
      args: {
        where: t.arg({ type: OverdueRevolutionWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
  }),
});
