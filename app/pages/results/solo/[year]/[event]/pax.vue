<template>
  <UContainer>
    <SectionHeader>Reno SCCA Solo Round {{ event }} ({{ year }}) Pax Results</SectionHeader>
    <div
      v-if="results.length === 0"
      class="text-center my-4"
    >
      Loading results...
    </div>
    <div
      v-else
      class="flex flex-col gap-4 my-4"
    >
      <SubHeader
        align="center"
        class="my-2"
      >
        {{ dayjs(results[0]?.Date).format("M/DD/YY") }}
      </SubHeader>
      <table class="table w-full text-sm md:text-md">
        <thead>
          <tr class="border bg-accented">
            <th class="border p-1 text-center">Pos</th>
            <th class="border p-1 text-center">Score</th>
            <th class="border p-1 text-center">Class</th>
            <th class="border p-1 text-center">#</th>
            <th class="border p-1 text-left">Driver</th>
            <th class="border p-1 text-left">Car</th>
            <th class="border p-1 text-center">Pax Time</th>
            <th class="border p-1 text-center">Diff</th>
            <th class="border p-1 text-center">From 1st</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(result, idx) in results"
            :key="result.ID"
            :class="idx % 2 === 1 ? 'bg-elevated' : ''"
          >
            <td class="border p-1 text-center">{{ result.PaxPos }}</td>
            <td class="border p-1 text-center">{{ result.PaxScore }}</td>
            <td class="border p-1 text-center uppercase">{{ result.Class }}</td>
            <td class="border p-1 text-center">{{ result.Number }}</td>
            <td class="border p-1 text-left">{{ result.FirstName }} {{ result.LastName }}</td>
            <td class="border p-1 text-left capitalize">
              {{ result.CarModel }}
            </td>
            <td class="border p-1 text-center font-bold !bg-accented">
              {{ result.PaxTime.toFixed(3) }}
            </td>
            <td class="border p-1 text-center">
              {{ (result.PaxTime - (results?.[idx > 0 ? idx - 1 : 0]?.PaxTime ?? 0)).toFixed(3) }}
            </td>
            <td class="border p-1 text-center">{{ result.PaxOff1st }}</td>
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
  const results = data.value?.sort((a, b) => a.PaxPos - b.PaxPos) as SoloScore[];
</script>

<style lang="postcss"></style>
