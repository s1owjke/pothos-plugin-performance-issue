import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutEchoChambers } from "./createWithoutEchoChambers";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoCreateRelationWithoutEchoChambers = builder
  .inputRef<any>("ArtificialPotatoCreateRelationWithoutEchoChambers")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ArtificialPotatoWhereUnique }),
      create: t.field({ type: ArtificialPotatoCreateWithoutEchoChambers }),
    }),
  });
