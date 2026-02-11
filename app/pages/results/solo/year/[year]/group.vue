<template>
  <UContainer>
    <SectionHeader>Reno SCCA {{ year }} Solo Group Standings</SectionHeader>
    <div class="flex flex-col items-center w-75 mx-auto">
      <div class="bg-green-300/20 px-1 w-full text-center">Qualified for Trophy</div>
      <div class="bg-yellow-300/20 px-1 w-full text-center">Unable to Qualify for Trophy</div>
    </div>
    <div
      v-if="!results.length"
      class="text-center my-4"
    >
      Loading...
    </div>
    <div
      v-else
      class="flex flex-col gap-4 my-4 overflow-x-auto"
    >
      <div class="flex flex-row gap-2 my-4 mx-auto">
        <a
          class="underline hover:font-bold"
          href="#deathmatch"
          >Death Match</a
        >
        |
        <a
          class="underline hover:font-bold"
          href="#group1"
          >Group 1</a
        >
        |
        <a
          class="underline hover:font-bold"
          href="#group2"
          >Group 2</a
        >
        |
        <a
          class="underline hover:font-bold"
          href="#group3"
          >Group 3</a
        >
        |
        <a
          class="underline hover:font-bold"
          href="#group4"
          >Group 4</a
        >
        |
        <a
          class="underline hover:font-bold"
          href="#group5"
          >Group 5</a
        >
      </div>
      <div class="mx-auto">
        <USwitch
          v-model="showOnlyQualified"
          label="Show Only Qualified Rows"
          color="secondary"
        />
      </div>
      <div
        id="deathmatch"
        class="font-bold"
      >
        Death Match
      </div>
      <ResultsGroupYearTable
        :results="getGroupResults(100)"
        :events="events"
        :max-drops="maxDrops"
        :show-only-qualified="showOnlyQualified"
      />

      <ResultsGroupClasses
        :year="year"
        group="1"
      />
      <ResultsGroupYearTable
        :results="getGroupResults(1)"
        :events="events"
        :max-drops="maxDrops"
        :show-only-qualified="showOnlyQualified"
      />

      <ResultsGroupClasses
        :year="year"
        group="2"
      />
      <ResultsGroupYearTable
        :results="getGroupResults(2)"
        :events="events"
        :max-drops="maxDrops"
        :show-only-qualified="showOnlyQualified"
      />

      <ResultsGroupClasses
        :year="year"
        group="3"
      />
      <ResultsGroupYearTable
        :results="getGroupResults(3)"
        :events="events"
        :max-drops="maxDrops"
        :show-only-qualified="showOnlyQualified"
      />

      <ResultsGroupClasses
        :year="year"
        group="4"
      />
      <ResultsGroupYearTable
        :results="getGroupResults(4)"
        :events="events"
        :max-drops="maxDrops"
        :show-only-qualified="showOnlyQualified"
      />

      <ResultsGroupClasses
        :year="year"
        group="5"
      />
      <ResultsGroupYearTable
        :results="getGroupResults(5)"
        :events="events"
        :max-drops="maxDrops"
        :show-only-qualified="showOnlyQualified"
      />
    </div>

    <ClientOnly>
      <div class="fixed bottom-10 right-10">
        <BackToTop />
      </div>
    </ClientOnly>
  </UContainer>
</template>

<script lang="ts" setup>
  import type { SoloYearConfig } from "~/db/models/Results.model";
  import type { SoloYearScore } from "~/db/models/SoloYearScore.model";

  const route = useRoute();
  const year = route.params.year as string;
  const drops = ref(0);
  const eventCount = ref(0);
  const events = ref<number[]>([]);
  const maxDrops = ref(0);
  const showOnlyQualified = ref(true);

  const { data } = await useFetch(`/api/results/solo/group/year/${year}`);
  const { data: yearConfig } = await useFetch(`/api/results/solo/${year}`);

  watch(
    () => yearConfig.value as SoloYearConfig,
    (value) => {
      if (value) {
        drops.value =
          value.NumOfEventsPerDrop > 0
            ? Math.floor(value.NumOfEventsDone / value.NumOfEventsPerDrop)
            : 0;
        eventCount.value = value.NumOfEvents;
        maxDrops.value = Math.ceil(eventCount.value / (drops.value ?? 1));
        events.value = Array.from({ length: eventCount.value }, (_, i) => i + 1);
      }
    },
    { immediate: true }
  );

  const results = data.value?.sort(
    (a, b) => b.TotalWithDrops - a.TotalWithDrops
  ) as SoloYearScore[];

  const getGroupResults = (group: number) => results.filter((r) => r.GroupNum === group);
</script>

<style lang="postcss"></style>
