import { builder } from "src/builder";

import { RealmDirectoryWhereUnique } from "../../types/inputs/realmDirectory/whereUnique";

builder.mutationField("realmDirectoryDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: RealmDirectoryWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.realmDirectory.delete({ where: args.where });
      return true;
    },
  }),
);
