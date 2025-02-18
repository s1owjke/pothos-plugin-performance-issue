import { builder } from "src/builder";

import { RecursiveRecursionOrderBy } from "../inputs/recursiveRecursion/orderBy";
import { RecursiveRecursionWhere } from "../inputs/recursiveRecursion/where";

export const HyperlinkedUnicorn = builder.prismaObject("HyperlinkedUnicorn", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    gravityOverride: t.relation("gravityOverride", { nullable: false }),
    gravityOverrideId: t.expose("gravityOverrideId", { type: "ID", nullable: false }),
    recursiveRecursionsList: t.relation("recursiveRecursions", {
      args: {
        where: t.arg({ type: RecursiveRecursionWhere, required: false }),
        orderBy: t.arg({ type: [RecursiveRecursionOrderBy], required: false }),
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
    recursiveRecursionsCount: t.relationCount("recursiveRecursions", {
      args: {
        where: t.arg({ type: RecursiveRecursionWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
  }),
});
