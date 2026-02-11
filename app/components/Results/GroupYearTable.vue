<template>
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
        v-for="result in showOnlyQualified ? filteredResults : results"
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
</template>

<script lang="ts" setup>
  import type { SoloYearScore } from "~/db/models/SoloYearScore.model";

  type Props = {
    events: number[];
    results: SoloYearScore[];
    maxDrops: number;
    showOnlyQualified: boolean;
  };
  const { events, results, maxDrops, showOnlyQualified } = defineProps<Props>();
  const filteredResults = results.filter((r) => r.QualifiesForTrophy);
</script>

<style lang="postcss"></style>
