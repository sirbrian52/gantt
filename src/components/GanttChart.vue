<template>
  <div class="overflow-x-auto p-4">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Gantt Chart</h2>
    <div class="flex justify-center">
        <vue-draggable-resizable :grid="[40, 40]" :x="1" :y="0">
          <div class="rounded" :style="{
            position: 'relative',
            backgroundColor: '#20e381',
            height: '5vh',
          }">Grid 40 x 40 starting from the top-left corner</div>
        </vue-draggable-resizable>
    </div>
    <div class="flex justify-center">
      <table class="table-auto min-w-full text-sm text-left text-gray-500 border border-black">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th rowspan="2" class="px-6 py-3"></th>
            <th v-for="day in days" :key="day.date" colspan="4" class="px-6 py-3 text-center border-x border-black">
              {{ day.date }}
            </th>
          </tr>
        </thead>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 border-b-8 border-black">
          <tr class="text-center border-b-8">
            <th></th>
            <!-- group monday column -->
             
            <th v-for="hour in hours" :key="hour.clock" class="px-6 py-3 border border-black" >{{ hour.clock }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-black" @dragover.prevent @drop="onDrop($event, 'AS-01')">
            <td class="bg-gray-50 px-6 py-4 pb-10 pt-10 font-medium text-gray-900">AS-01 (MB) <i
                class="fa-solid fa-lock"></i> </td>
            <td colspan="8" class="px-6 py-4 bg-white">
              
            </td>
          </tr>
          <tr class="border-b border-black" @dragover.prevent @drop="onDrop($event, 'AS-02')">
            <td class="bg-gray-50 px-6 py-4 pb-10 pt-10 font-medium text-gray-900">AS-02 (MB) <i
                class="fa-solid fa-lock"></i> </td>
            <td colspan="8" class="px-6 py-4 bg-white">
              
            </td>
          </tr>
          <tr class="border-b border-black" @dragover.prevent @drop="onDrop($event, 'AS-03')">
            <td class="bg-gray-50 px-6 py-4 pb-10 pt-10 font-medium text-gray-900"> AS-03 (MB) <i
                class="fa-solid fa-lock"></i> </td>
            <td colspan="8" class="px-6 py-4 bg-white">
            
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import DropBar from './DropBar.vue'
export default {
  data() {
    return {
      components: {
        DropBar
      },
      dragData: null,
      tasks: {
        'AS-01': [],
        'AS-02': [],
        'AS-03': []
      },
      days: [
        { date: 'Mon, 01 July 2024' },
        { date: 'Tue, 02 July 2024' },
        { date: 'Wed, 03 July 2024' },
        { date: 'Thu, 04 July 2024' },
        { date: 'Fri, 05 July 2024' },
        { date: 'Sat, 06 July 2024' },
        { date: 'Sun, 07 July 2024' }
      ],
      hours:[ {clock: "6"},{clock: "12"},{clock: "18"},{clock: "24"}],
      taskCounter: 0,
      isResizing: false,
      resizeStartX: 0,
      resizingTaskIndex: null,
      resizingTaskKey: null,
      resizingSide: null,
      taskColors: ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'],
    };
  },
  methods: {
    onDragStart(event) {
      this.dragData = event.target.innerText;
    },
    onDrop(event, key) {
      const dropX = event.offsetX;
      this.addTask(key, dropX);
    },
    addTask(key, left) {
      const width = 100; // Default task width (e.g., 100px)
      const color = this.taskColors[this.taskCounter % this.taskColors.length];
      this.tasks[key].push({ task: `Task ${this.taskCounter + 1}`, width, left, color });
      this.taskCounter++;
    },
    startResizing(event, index, key, side) {
      this.isResizing = true;
      this.resizeStartX = event.clientX;
      this.resizingTaskIndex = index;
      this.resizingTaskKey = key;
      this.resizingSide = side;

      window.addEventListener('mousemove', this.onResizing);
      window.addEventListener('mouseup', this.stopResizing);
    },
    onResizing(event) {
      if (!this.isResizing) return;

      const deltaX = event.clientX - this.resizeStartX;
      const task = this.tasks[this.resizingTaskKey][this.resizingTaskIndex];

      if (this.resizingSide === 'right') {
        const newWidth = task.width + deltaX;
        task.width = this.snapToMinuteInterval(newWidth, 15); // Snap to 15-minute intervals
      } else if (this.resizingSide === 'left') {
        const newLeft = task.left + deltaX;
        const newWidth = task.width - deltaX;
        task.left = this.snapToMinuteInterval(newLeft, 15);
        task.width = this.snapToMinuteInterval(newWidth, 15);
      }

      this.resizeStartX = event.clientX;
    },
    stopResizing() {
      this.isResizing = false;
      this.resizingTaskIndex = null;
      this.resizingTaskKey = null;
      this.resizingSide = null;

      window.removeEventListener('mousemove', this.onResizing);
      window.removeEventListener('mouseup', this.stopResizing);
    },
    snapToHourlyInterval(value) {
      const hourWidth = 100; // Width representing one hour
      return Math.round(value / hourWidth) * hourWidth;
    },
    snapToMinuteInterval(value, minuteInterval) {
      const hourWidth = 100; // Width representing one hour
      const minuteWidth = hourWidth / 60;
      const intervalWidth = minuteWidth * minuteInterval;
      return Math.round(value / intervalWidth) * intervalWidth;
    },
    getTextColor(bgColorClass) {
      const bgColorMap = {
        'bg-red-500': '#f56565',
        'bg-blue-500': '#4299e1',
        'bg-green-500': '#48bb78',
        'bg-yellow-500': '#ecc94b',
        'bg-purple-500': '#9f7aea',
        'bg-pink-500': '#ed64a6',
      };
      const bgColor = bgColorMap[bgColorClass];
      return this.getLuminance(bgColor) > 0.5 ? '#000000' : '#ffffff';
    },
    getLuminance(color) {
      const rgb = color.replace(/[^\d,]/g, '').split(',');
      const r = parseInt(rgb[0]) / 255;
      const g = parseInt(rgb[1]) / 255;
      const b = parseInt(rgb[2]) / 255;

      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return luminance;
    },
  },
};
</script>

<style scoped>
.cursor-ew-resize {
  cursor: ew-resize;
}
</style>
