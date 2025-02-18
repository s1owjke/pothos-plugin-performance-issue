import { builder } from "src/builder";

import { EchoChamberOrderBy } from "../inputs/echoChamber/orderBy";
import { EchoChamberWhere } from "../inputs/echoChamber/where";
import { OverwrittenLegacyOrderBy } from "../inputs/overwrittenLegacy/orderBy";
import { OverwrittenLegacyWhere } from "../inputs/overwrittenLegacy/where";

export const ArtificialPotato = builder.prismaObject("ArtificialPotato", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    echoChambersList: t.relation("echoChambers", {
      args: {
        where: t.arg({ type: EchoChamberWhere, required: false }),
        orderBy: t.arg({ type: [EchoChamberOrderBy], required: false }),
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
    echoChambersCount: t.relationCount("echoChambers", {
      args: {
        where: t.arg({ type: EchoChamberWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    ghostRecord: t.relation("ghostRecord", { nullable: true }),
    ghostRecordId: t.expose("ghostRecordId", { type: "ID", nullable: true }),
    invisibleTransaction: t.relation("invisibleTransaction", { nullable: true }),
    overwrittenLegacyList: t.relation("overwrittenLegacy", {
      args: {
        where: t.arg({ type: OverwrittenLegacyWhere, required: false }),
        orderBy: t.arg({ type: [OverwrittenLegacyOrderBy], required: false }),
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
    overwrittenLegacyCount: t.relationCount("overwrittenLegacy", {
      args: {
        where: t.arg({ type: OverwrittenLegacyWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    unstableFrequency: t.relation("unstableFrequency", { nullable: true }),
    unstableFrequencyId: t.expose("unstableFrequencyId", { type: "ID", nullable: true }),
  }),
});
