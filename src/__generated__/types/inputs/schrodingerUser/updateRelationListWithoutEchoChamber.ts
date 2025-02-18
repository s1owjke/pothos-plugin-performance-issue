import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutEchoChamber } from "./createWithoutEchoChamber";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutEchoChamber = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutEchoChamber")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutEchoChamber] }),
    }),
  });
