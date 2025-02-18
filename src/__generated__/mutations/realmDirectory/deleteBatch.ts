import { builder } from "src/builder";

import { RealmDirectoryWhereUnique } from "../../types/inputs/realmDirectory/whereUnique";

builder.mutationField("realmDirectoryDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [RealmDirectoryWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.realmDirectory.delete({ where })));
      return true;
    },
  }),
);
