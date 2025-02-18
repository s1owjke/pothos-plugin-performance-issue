import { builder } from "src/builder";

export const StaticWhisper = builder.prismaObject("StaticWhisper", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    forbiddenCheeseburger: t.relation("forbiddenCheeseburger", { nullable: false }),
    forbiddenCheeseburgerId: t.expose("forbiddenCheeseburgerId", { type: "ID", nullable: false }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: false }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: false }),
  }),
});
