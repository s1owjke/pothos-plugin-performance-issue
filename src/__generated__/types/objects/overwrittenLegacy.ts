import { builder } from "src/builder";

import { GlitchRegistryOrderBy } from "../inputs/glitchRegistry/orderBy";
import { GlitchRegistryWhere } from "../inputs/glitchRegistry/where";

export const OverwrittenLegacy = builder.prismaObject("OverwrittenLegacy", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    artificialPotato: t.relation("artificialPotato", { nullable: false }),
    artificialPotatoId: t.expose("artificialPotatoId", { type: "ID", nullable: false }),
    glitchRegistriesList: t.relation("glitchRegistries", {
      args: {
        where: t.arg({ type: GlitchRegistryWhere, required: false }),
        orderBy: t.arg({ type: [GlitchRegistryOrderBy], required: false }),
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
    glitchRegistriesCount: t.relationCount("glitchRegistries", {
      args: {
        where: t.arg({ type: GlitchRegistryWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    prematureOptimization: t.relation("prematureOptimization", { nullable: false }),
    prematureOptimizationId: t.expose("prematureOptimizationId", { type: "ID", nullable: false }),
  }),
});
