import { builder } from "src/builder";

import { RealmDirectoryWhere } from "../../types/inputs/realmDirectory/where";

builder.mutationField("realmDirectoryDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RealmDirectoryWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.realmDirectory.deleteMany({ where: args.where });
      return count;
    },
  }),
);
