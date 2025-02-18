import { builder } from "src/builder";

import { RealmDirectoryUpdate } from "../../types/inputs/realmDirectory/update";
import { RealmDirectoryWhereUnique } from "../../types/inputs/realmDirectory/whereUnique";
import { RealmDirectory } from "../../types/objects/realmDirectory";

builder.mutationField("realmDirectoryUpdate", (t) =>
  t.field({
    type: RealmDirectory,
    nullable: false,
    args: {
      where: t.arg({ type: RealmDirectoryWhereUnique, required: true }),
      data: t.arg({ type: RealmDirectoryUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.realmDirectory.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
