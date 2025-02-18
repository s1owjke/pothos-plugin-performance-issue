import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutEchoChamber } from "./createWithoutEchoChamber";
import { GlitchRegistryUpdateWithoutEchoChamber } from "./updateWithoutEchoChamber";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationWithoutEchoChamber = builder.inputRef<any>("GlitchRegistryUpdateRelationWithoutEchoChamber").implement({
  fields: (t) => ({
    connect: t.field({ type: GlitchRegistryWhereUnique }),
    disconnect: t.field({ type: GlitchRegistryWhereUnique }),
    create: t.field({ type: GlitchRegistryCreateWithoutEchoChamber }),
    update: t.field({ type: GlitchRegistryUpdateWithoutEchoChamber }),
  }),
});
