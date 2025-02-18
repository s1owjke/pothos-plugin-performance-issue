import { builder } from "src/builder";

import { RealmDirectoryCreateMany } from "../../types/inputs/realmDirectory/createMany";

builder.mutationField("realmDirectoryCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [RealmDirectoryCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.realmDirectory.createMany({ data: args.data });
      return count;
    },
  }),
);
