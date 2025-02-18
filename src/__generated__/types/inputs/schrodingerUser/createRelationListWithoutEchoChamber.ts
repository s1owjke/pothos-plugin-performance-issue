import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutEchoChamber } from "./createWithoutEchoChamber";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationListWithoutEchoChamber = builder
  .inputRef<any>("SchrodingerUserCreateRelationListWithoutEchoChamber")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutEchoChamber] }),
    }),
  });
