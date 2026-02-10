<template>
  <UContainer>
    <SectionHeader>Reno SCCA Solo Round {{ event }} ({{ year }}) Group Results</SectionHeader>
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
            <th class="border px-0.5 md:px-1 py-0.5 text-center">Pnts</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-center">Class</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-center">#</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-left">Driver</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-left">Car</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-center">Raw Time</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-center">Class Time</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-center">Diff</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-center">From 1st</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-center">Run 1(Pen)</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-center">Run 2(Pen)</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-center">Run 3(Pen)</th>
            <th class="border px-0.5 md:px-1 py-0.5 text-center">Run 4(Pen)</th>
            <th
              v-if="results.some((r) => r.Run5 > 0)"
              class="border px-0.5 md:px-1 py-0.5 text-center"
            >
              Run 5(Pen)
            </th>
            <th
              v-if="results.some((r) => r.Run6 > 0)"
              class="border px-0.5 md:px-1 py-0.5 text-center"
            >
              Run 6(Pen)
            </th>
            <th
              v-if="results.some((r) => r.Run7 > 0)"
              class="border px-0.5 md:px-1 py-0.5 text-center"
            >
              Run 7(Pen)
            </th>

            <th
              v-if="results.some((r) => r.Run8 > 0)"
              class="border px-0.5 md:px-1 py-0.5 text-center"
            >
              Run 8(Pen)
            </th>
            <th
              v-if="results.some((r) => r.Run9 > 0)"
              class="border px-0.5 md:px-1 py-0.5 text-center"
            >
              Run 9(Pen)
            </th>
            <th
              v-if="results.some((r) => r.Run10 > 0)"
              class="border px-0.5 md:px-1 py-0.5 text-center"
            >
              Run 10(Pen)
            </th>

            <th
              v-if="results.some((r) => r.Run11 > 0)"
              class="border px-0.5 md:px-1 py-0.5 text-center"
            >
              Run 11(Pen)
            </th>
            <th
              v-if="results.some((r) => r.Run12 > 0)"
              class="border px-0.5 md:px-1 py-0.5 text-center"
            >
              Run 12(Pen)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border p-0.5 md:px-1 text-left bg-accented">
            <td
              class="p-0.5 md:px-1"
              colspan="24"
            >
              Death Match
            </td>
          </tr>
          <ResultsGroupTableRow :results="deathmatchResults" />
          <tr class="border p-1 md:px-2 text-left bg-accented">
            <td
              class="p-0.5 md:px-1"
              colspan="24"
            >
              Group 1 (SS, AS, BS)
            </td>
          </tr>
          <ResultsGroupTableRow :results="getGroupResults(1)" />
          <tr class="border p-1 md:px-2 text-left bg-accented">
            <td
              class="p-0.5 md:px-1"
              colspan="24"
            >
              Group 2 (CS,DS,ES,FS,GS,HS,CSM,CSX,SSC,HCS,HCR)
            </td>
          </tr>
          <ResultsGroupTableRow :results="getGroupResults(2)" />
          <tr class="border p-1 md:px-2 text-left bg-accented">
            <td
              class="p-0.5 md:px-1"
              colspan="24"
            >
              Group 3 (SST,AST,BST,CST,DST,EST,GST,CSP,DSP,ESP,FSP,SSP)
            </td>
          </tr>
          <ResultsGroupTableRow :results="getGroupResults(3)" />
          <tr class="border p-1 md:px-2 text-left bg-accented">
            <td
              class="p-0.5 md:px-1"
              colspan="24"
            >
              <!-- TODO: Add group call -->
              Group 4 (CAMC,CAMT,CAMS)
            </td>
          </tr>
          <ResultsGroupTableRow :results="getGroupResults(4)" />
          <tr class="border p-1 md:px-2 text-left bg-accented">
            <td
              class="p-0.5 md:px-1"
              colspan="24"
            >
              <!-- TODO: Add group call -->
              Group 5 (XA,XB,XU,EVX,SM,SSM,SMF,CP,DP,EP,FP,XP,AM,BM,CM,DM,EM,FM,FSAE,KM)
            </td>
          </tr>
          <ResultsGroupTableRow :results="getGroupResults(5)" />
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

  const deathmatchResults = results
    .filter((r) => r.IsDeathMatch === true)
    .sort((a, b) => a.GroupPos - b.GroupPos);

  const getGroupResults = (group: number) => {
    return results.filter((r) => r.GroupNum === group).sort((a, b) => a.GroupPos - b.GroupPos);
  };
</script>

<style lang="postcss"></style>
