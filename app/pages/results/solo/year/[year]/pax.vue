<template>
  <UContainer>
    <SectionHeader>Reno SCCA {{ year }} Solo PAX Standings</SectionHeader>
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
      <table class="table w-full text-sm md:text-md">
        <thead>
          <tr class="border bg-accented">
            <th class="border p-1 text-center">Pos</th>
            <th class="border p-1 text-left">Driver</th>
            <th class="border p-1 text-center">Total</th>
            <th class="border p-1 text-center">{{ maxDrops }} drops</th>
            <th
              v-for="event in events"
              :key="event"
              class="border p-1 text-center"
            >
              {{ event }}
            </th>
            <th class="border p-1 text-left">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="result in results"
            :key="result.ID"
            :class="result.QualifiesForTrophy ? 'bg-green-300/20' : 'bg-yellow-300/20'"
          >
            <td class="border p-1 text-center">{{ result.Position }}</td>
            <td class="border p-1 text-left">{{ result.FirstName }} {{ result.LastName }}</td>
            <td class="border p-1 text-center">{{ result.Total }}</td>
            <td class="border p-1 text-center bg-elevated font-bold">
              {{ result.TotalWithDrops }}
            </td>
            <td
              v-for="event in events"
              :key="event"
              class="border p-1 text-center"
            >
              {{ result.CsvScores.split(",")[event - 1] ?? "" }}
            </td>
            <td class="border p-1 text-left">{{ result.Notes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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

  const { data } = await useFetch(`/api/results/solo/pax/year/${year}`);
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
</script>

<style lang="postcss"></style>
