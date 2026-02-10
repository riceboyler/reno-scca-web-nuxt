<template>
  <div
    v-if="tabItems.length === 0"
    class="p-4"
  >
    <p class="body text-center">Loading...</p>
  </div>
  <div v-else>
    <UTabs
      :items="tabItems"
      class="w-full"
      :default-value="tabItems[0]?.value"
    >
      <template #content="{ item }">
        <div class="p-1">
          <SubHeader>{{ item.content }}</SubHeader>
          <ResultsSoloGuts
            v-if="item?.label"
            :year-config="
              soloYears?.filter((year) => year.Year.toString() === item.label)[0] as SoloYearConfig
            "
          />
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script lang="ts" setup>
  import type { TabsItem } from "@nuxt/ui";
  import type { SoloYearConfig, TrackYearConfig } from "~/db/models/Results.model";

  type Props = {
    type: "solo" | "track";
  };
  const { type } = defineProps<Props>();
  const soloYears = ref<SoloYearConfig[]>();
  const trackYears = ref<TrackYearConfig[]>();
  if (type === "solo") {
    const { data } = useFetch<SoloYearConfig[]>("/api/results/solo/years");
    soloYears.value = data.value;
  } else {
    const { data } = useFetch<TrackYearConfig[]>("/api/results/track/years");
    trackYears.value = data.value;
  }
  const tabItems = ref<TabsItem[]>([]);

  watch(
    () => (type === "solo" ? soloYears.value : trackYears.value),
    (value) => {
      if (value) {
        tabItems.value = value.map((yearConfig) => ({
          value: yearConfig.Year.toString(),
          label: yearConfig.Year.toString(),

          content:
            yearConfig.NumOfEvents === yearConfig.NumOfEventsDone
              ? `${yearConfig.Year.toString()} (All ${yearConfig.NumOfEvents.toString()} Events Completed)`
              : `${yearConfig.Year.toString()} (${yearConfig.NumOfEventsDone.toString()}/${yearConfig.NumOfEvents.toString()} events completed)`,
        })) satisfies TabsItem[];
      }
    },
    { immediate: true }
  );
</script>

<style lang="postcss"></style>
