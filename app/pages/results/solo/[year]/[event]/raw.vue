<template>
  <UContainer>
    <SectionHeader>Reno SCCA Solo Round {{ event }} ({{ year }}) Raw Results</SectionHeader>
    <div
      v-if="!results.length"
      class="text-center my-4"
    >
      Loading results...
    </div>
    <div
      v-else
      class="overflow-x-auto"
    >
      <SubHeader
        align="center"
        class="text-center my-2"
      >
        {{ dayjs(results[0]?.Date).format("M/DD/YY") }}
      </SubHeader>
      <aside class="text-center italic">
        ("Points" are purely for car based comparisons only. There are no awards.)
      </aside>
      <table class="table w-full">
        <thead>
          <tr class="border bg-accented">
            <th class="border px-1 py-0.5 text-center">Pos</th>
            <th class="border px-1 py-0.5 text-center">Score</th>
            <th class="border px-1 py-0.5 text-center">Class</th>
            <th class="border px-1 py-0.5 text-center">#</th>
            <th class="border px-1 py-0.5 text-left">Driver</th>
            <th class="border px-1 py-0.5 text-left">Car</th>
            <th class="border px-1 py-0.5 text-center">Raw Time</th>
            <th class="border px-1 py-0.5 text-center">Diff</th>
            <th class="border px-1 py-0.5 text-center">From 1st</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(result, idx) in results"
            :key="result.ID"
            :class="idx % 2 === 1 ? 'bg-elevated' : ''"
          >
            <td class="border px-1 py-0.5 text-center">{{ result.RawPos }}</td>
            <td class="border px-1 py-0.5 text-center">{{ result.RawScore }}</td>
            <td class="border px-1 py-0.5 text-center uppercase">{{ result.Class }}</td>
            <td class="border px-1 py-0.5 text-center">{{ result.Number }}</td>
            <td class="border px-1 py-0.5">{{ result.FirstName }} {{ result.LastName }}</td>
            <td class="border px-1 py-0.5 capitalize">{{ result.CarModel }}</td>
            <td class="border px-1 py-0.5 text-center">{{ result.RawTime.toFixed(3) }}</td>
            <td class="border px-1 py-0.5 text-center">
              {{ (result.RawTime - (results?.[idx > 0 ? idx - 1 : 0]?.RawTime ?? 0)).toFixed(3) }}
            </td>
            <td class="border p-0.5 text-center">{{ result.RawOff1st }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";
  import type { SoloScore } from "~/db/models/SoloScore.model";

  const route = useRoute();
  const year = route.params.year as string;
  const event = route.params.event as string;

  const { data } = await useFetch(`/api/results/solo/raw/event/${event}?year=${year}`);
  const results = data.value as SoloScore[];
</script>

<style lang="postcss"></style>
