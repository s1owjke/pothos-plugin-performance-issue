import { builder } from "src/builder";

import { ImaginaryFriendOrderBy } from "../inputs/imaginaryFriend/orderBy";
import { ImaginaryFriendWhere } from "../inputs/imaginaryFriend/where";

export const LostAndNeverFound = builder.prismaObject("LostAndNeverFound", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    hypotheticalRevenue: t.relation("hypotheticalRevenue", { nullable: false }),
    hypotheticalRevenueId: t.expose("hypotheticalRevenueId", { type: "ID", nullable: false }),
    imaginaryFriendList: t.relation("imaginaryFriend", {
      args: {
        where: t.arg({ type: ImaginaryFriendWhere, required: false }),
        orderBy: t.arg({ type: [ImaginaryFriendOrderBy], required: false }),
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
    imaginaryFriendCount: t.relationCount("imaginaryFriend", {
      args: {
        where: t.arg({ type: ImaginaryFriendWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    schrodingerUser: t.relation("schrodingerUser", { nullable: false }),
    schrodingerUserId: t.expose("schrodingerUserId", { type: "ID", nullable: false }),
  }),
});
