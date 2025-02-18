import { builder } from "src/builder";

import { EmotionalSupportTableOrderBy } from "../inputs/emotionalSupportTable/orderBy";
import { EmotionalSupportTableWhere } from "../inputs/emotionalSupportTable/where";

export const InfiniteScrollLog = builder.prismaObject("InfiniteScrollLog", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    emotionalSupportTablesList: t.relation("emotionalSupportTables", {
      args: {
        where: t.arg({ type: EmotionalSupportTableWhere, required: false }),
        orderBy: t.arg({ type: [EmotionalSupportTableOrderBy], required: false }),
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
    emotionalSupportTablesCount: t.relationCount("emotionalSupportTables", {
      args: {
        where: t.arg({ type: EmotionalSupportTableWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    schrodingerUser: t.relation("schrodingerUser", { nullable: false }),
    schrodingerUserId: t.expose("schrodingerUserId", { type: "ID", nullable: false }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: true }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: true }),
  }),
});
