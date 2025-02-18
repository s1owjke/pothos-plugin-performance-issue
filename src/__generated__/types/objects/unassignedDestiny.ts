import { builder } from "src/builder";

export const UnassignedDestiny = builder.prismaObject("UnassignedDestiny", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    gravityOverride: t.relation("gravityOverride", { nullable: true }),
    imaginaryFriend: t.relation("imaginaryFriend", { nullable: true }),
    reverseTransaction: t.relation("reverseTransaction", { nullable: true }),
  }),
});
