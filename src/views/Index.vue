<template lang="">
    <div class="overflow-x-auto p-4">
    <!-- Title -->
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Gantt Chart </h2>
    <div class="flex justify-center">
      <table class="min-w-full text-sm text-left text-gray-500">
        <!-- First Level of Headers -->
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th rowspan="2" class="px-6 py-3"></th>
            <th colspan="4" class="px-6 py-3 text-center">Mon, 01 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center">Tue, 02 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center">Tue, 02 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center">Tue, 02 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center">Tue, 02 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center">Tue, 02 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center">Tue, 02 July 2024</th>
            <!-- Repeat for each date header as needed -->
          </tr>
        </thead>

        <!-- Second Level of Headers -->
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 border-b-8 border-black">
          <tr class="text-center border-b-8">
            <!-- Time Labels for each date -->
            <th></th>
            <th scope="col" class="px-6 py-3">6</th>
            <th scope="col" class="px-6 py-3">12</th>
            <th scope="col" class="px-6 py-3">18</th>
            <th scope="col" class="px-6 py-3">24</th>
            <th scope="col" class="px-6 py-3">6</th>
            <th scope="col" class="px-6 py-3">12</th>
            <th scope="col" class="px-6 py-3">18</th>
            <th scope="col" class="px-6 py-3">24</th>
            <th scope="col" class="px-6 py-3">6</th>
            <th scope="col" class="px-6 py-3">12</th>
            <th scope="col" class="px-6 py-3">18</th>
            <th scope="col" class="px-6 py-3">24</th>
            <th scope="col" class="px-6 py-3">6</th>
            <th scope="col" class="px-6 py-3">12</th>
            <th scope="col" class="px-6 py-3">18</th>
            <th scope="col" class="px-6 py-3">24</th>
            <th scope="col" class="px-6 py-3">6</th>
            <th scope="col" class="px-6 py-3">12</th>
            <th scope="col" class="px-6 py-3">18</th>
            <th scope="col" class="px-6 py-3">24</th>
            <th scope="col" class="px-6 py-3">6</th>
            <th scope="col" class="px-6 py-3">12</th>
            <th scope="col" class="px-6 py-3">18</th>
            <th scope="col" class="px-6 py-3">24</th>
            <th scope="col" class="px-6 py-3">6</th>
            <th scope="col" class="px-6 py-3">12</th>
            <th scope="col" class="px-6 py-3">18</th>
            <th scope="col" class="px-6 py-3">24</th>
            <!-- Repeat for each time label as needed -->
          </tr>
        </thead>

        <!-- Table Body with Rows -->
        <tbody>
          <!-- Row for each group -->
          <tr>
            <!-- Group Name -->
            <td class="bg-gray-100 px-6 py-4 pb-10 pt-10 font-medium text-gray-900">AS-01 (MB)</td>
            <!-- Gantt Chart Items -->
            <td colspan="2" class="px-6 py-4"></td>
            <td colspan="3" class=" px-6 py-4"></td>
            <td colspan="2" class=" px-6 py-4"></td>
          </tr>
          <tr>
            <td class="bg-gray-100 px-6 py-4 pb-10 pt-10 font-medium text-gray-900">AS-02 (MB)</td>
            <td colspan="1" class=" px-6 py-4"></td>
            <td colspan="4" class=" px-6 py-4"></td>
            <td colspan="2" class=" px-6 py-4"></td>
          </tr>
          <tr>
            <td class="bg-gray-100 px-6 py-4 pb-10 pt-10 font-medium text-gray-900 text-center">AS-03 (MB)</td>
            <td colspan="1" class=" px-6 py-4"></td>
            <td colspan="4" class=" px-6 py-4"></td>
            <td colspan="2" class=" px-6 py-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>