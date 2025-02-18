import { builder } from "src/builder";

import { RealmDirectoryWhere } from "../../types/inputs/realmDirectory/where";

builder.queryField("realmDirectoryCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: RealmDirectoryWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.realmDirectory.count({ where: args.where || undefined });
    },
  }),
);
