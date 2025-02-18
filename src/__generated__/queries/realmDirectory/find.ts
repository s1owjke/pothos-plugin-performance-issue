import { builder } from "src/builder";

import { RealmDirectoryWhereUnique } from "../../types/inputs/realmDirectory/whereUnique";
import { RealmDirectory } from "../../types/objects/realmDirectory";

builder.queryField("realmDirectory", (t) =>
  t.prismaField({
    type: RealmDirectory,
    nullable: true,
    args: {
      where: t.arg({ type: RealmDirectoryWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.realmDirectory.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
