<template>
  <div class="overflow-x-auto p-4">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Gantt Chart</h2>
    <div class="flex justify-center">
      <div
        class="bg-blue-500 text-white text-center rounded-lg cursor-pointer p-2"
        draggable="true"
        :style="{ width: '100px' }"
        @dragstart="onDragStart"
      >
        Drag Me
      </div>  
    </div>
    <div class="flex justify-center">
      <table class="min-w-full text-sm text-left text-gray-500 border border-black">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th rowspan="2" class="px-6 py-3"></th>
            <th colspan="4" class="px-6 py-3 text-center border-x border-black" value="monday">Mon, 01 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center border-x border-black" value="tuesday">Tue, 02 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center border-x border-black" value="wednesday">Wed, 03 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center border-x border-black" value="thursday">Thu, 04 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center border-x border-black" value="friday">Fri, 05 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center border-x border-black" value="saturday">Sat, 06 July 2024</th>
            <th colspan="4" class="px-6 py-3 text-center border-x border-black" value="sunday">Sun, 07 July 2024</th>
            <!-- Repeat similar columns for other days -->
          </tr>
        </thead>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 border-b-8 border-black">
          <tr class="text-center border-b-8">
            <th></th>
            <th scope="col" class="px-6 py-3 border-l border-black">6</th>
            <th scope="col" class="px-6 py-3 border-l border-black">12</th>
            <th scope="col" class="px-6 py-3 border-l border-black">18</th>
            <th scope="col" class="px-6 py-3 border-l border-black">24</th>
            <th scope="col" class="px-6 py-3 border-l border-black">6</th>
            <th scope="col" class="px-6 py-3 border-l border-black">12</th>
            <th scope="col" class="px-6 py-3 border-l border-black">18</th>
            <th scope="col" class="px-6 py-3 border-l border-black">24</th>
            <th scope="col" class="px-6 py-3 border-l border-black">6</th>
            <th scope="col" class="px-6 py-3 border-l border-black">12</th>
            <th scope="col" class="px-6 py-3 border-l border-black">18</th>
            <th scope="col" class="px-6 py-3 border-l border-black">24</th>
            <th scope="col" class="px-6 py-3 border-l border-black">6</th>
            <th scope="col" class="px-6 py-3 border-l border-black">12</th>
            <th scope="col" class="px-6 py-3 border-l border-black">18</th>
            <th scope="col" class="px-6 py-3 border-l border-black">24</th>
            <th scope="col" class="px-6 py-3 border-l border-black">6</th>
            <th scope="col" class="px-6 py-3 border-l border-black">12</th>
            <th scope="col" class="px-6 py-3 border-l border-black">18</th>
            <th scope="col" class="px-6 py-3 border-l border-black">24</th>
            <th scope="col" class="px-6 py-3 border-l border-black">6</th>
            <th scope="col" class="px-6 py-3 border-l border-black">12</th>
            <th scope="col" class="px-6 py-3 border-l border-black">18</th>
            <th scope="col" class="px-6 py-3 border-l border-black">24</th>
            <th scope="col" class="px-6 py-3 border-l border-black">6</th>
            <th scope="col" class="px-6 py-3 border-l border-black">12</th>
            <th scope="col" class="px-6 py-3 border-l border-black">18</th>
            <th scope="col" class="px-6 py-3 border-l border-black">24</th>
            <!-- Repeat similar columns for other time slots -->
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-black" @dragover.prevent @drop="onDrop($event, 'AS-01')">
            <td class="bg-gray-50 px-6 py-4 pb-10 pt-10 font-medium text-gray-900">AS-01 (MB) <i class="fa-solid fa-lock"></i> </td>
            <td colspan="8" class="px-6 py-4 bg-white">
              <div v-for="(task, index) in tasks['AS-01']" :key="index"
                :class="['relative', 'text-center', 'rounded', 'cursor-pointer', 'p-2', task.color]"
                :style="{ width: task.width + 'px', left: task.left + 'px', color: getTextColor(task.color) }"
                @mousedown="startResizing($event, index, 'AS-01', 'right')"
              >
                {{ task.task }}
                <!-- Resizing Handles -->
                <div class="absolute right-0 top-0 h-full w-2 cursor-ew-resize" @mousedown.stop.prevent="startResizing($event, index, 'AS-01', 'right')"></div>
                <div class="absolute left-0 top-0 h-full w-2 cursor-ew-resize" @mousedown.stop.prevent="startResizing($event, index, 'AS-01', 'left')"></div>
              </div>
            </td>
          </tr>
          <tr class="border-b border-black"  @dragover.prevent @drop="onDrop($event, 'AS-02')">
            <td class="bg-gray-50 px-6 py-4 pb-10 pt-10 font-medium text-gray-900"><i class="fa-solid fa-lock"></i>AS-02 (MB)</td>
            <td colspan="8" class="px-6 py-4 bg-white">
              <div v-for="(task, index) in tasks['AS-02']" :key="index"
                :class="['relative', 'text-center', 'rounded', 'cursor-pointer', 'p-2', task.color]"
                :style="{ width: task.width + 'px', left: task.left + 'px', color: getTextColor(task.color) }"
                @mousedown="startResizing($event, index, 'AS-02', 'right')"
              >
                {{ task.task }}
                <!-- Resizing Handles -->
                <div class="absolute right-0 top-0 h-full w-2 cursor-ew-resize" @mousedown.stop.prevent="startResizing($event, index, 'AS-02', 'right')"></div>
                <div class="absolute left-0 top-0 h-full w-2 cursor-ew-resize" @mousedown.stop.prevent="startResizing($event, index, 'AS-02', 'left')"></div>
              </div>
            </td>
          </tr>
          <tr class="border-b border-black" @dragover.prevent @drop="onDrop($event, 'AS-03')">
            <td class="bg-gray-50 px-6 py-4 pb-10 pt-10 font-medium text-gray-900"><i class="fa-solid fa-lock"></i>AS-03 (MB)</td>
            <td colspan="8" class="px-6 py-4 bg-white">
              <div v-for="(task, index) in tasks['AS-03']" :key="index"
                :class="['relative', 'text-center', 'rounded', 'cursor-pointer', 'p-2', task.color]"
                :style="{ width: task.width + 'px', left: task.left + 'px', color: getTextColor(task.color) }"
                @mousedown="startResizing($event, index, 'AS-03', 'right')">
                {{ task.task }}
                <!-- Resizing Handles -->
                <div class="absolute right-0 top-0 h-full w-2 cursor-ew-resize" @mousedown.stop.prevent="startResizing($event, index, 'AS-03', 'right')"></div>
                <div class="absolute left-0 top-0 h-full w-2 cursor-ew-resize" @mousedown.stop.prevent="startResizing($event, index, 'AS-03', 'left')"></div>
              </div>
            </td>
          </tr>
          <!-- Repeat similar rows for other AS rows -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: {
        'AS-01': [],
        'AS-02': [],
        'AS-03': [],
      },
      resizingIndex: null,
      resizingDirection: null,
      initialX: 0,
      initialWidth: 0,
      initialLeft: 0,
      taskCounter: 0,
    };
  },
  methods: {
    onDrop(event, rowKey) {
      const data = JSON.parse(event.dataTransfer.getData('text/plain'));
      this.taskCounter++;
      const newTask = {
        task: `Task ${this.taskCounter}`,
        color: this.getRandomColor(),
        left: 0, // Default left position
        width: this.snapToHourlyInterval(data.width || 100),
      };
      this.tasks[rowKey].push(newTask);
    },
    startResizing(event, index, rowKey, direction) {
      this.resizingIndex = { index, rowKey };
      this.resizingDirection = direction;
      this.initialX = event.clientX;
      this.initialWidth = this.tasks[rowKey][index].width;
      this.initialLeft = this.tasks[rowKey][index].left;

      document.addEventListener('mousemove', this.onResizing);
      document.addEventListener('mouseup', this.onResizeEnd);
    },
    onResizing(event) {
      if (this.resizingIndex !== null) {
        const deltaX = event.clientX - this.initialX;
        const { index, rowKey } = this.resizingIndex;
        const task = this.tasks[rowKey][index];

        if (this.resizingDirection === 'right') {
          task.width = this.snapToHourlyInterval(this.initialWidth + deltaX);
        } else if (this.resizingDirection === 'left') {
          const newWidth = this.snapToHourlyInterval(this.initialWidth - deltaX);
          if (newWidth >= 0) {
            task.width = newWidth;
            task.left = Math.max(this.initialLeft + deltaX, 0);
          }
        }
      }
    },
    onResizeEnd() {
      this.resizingIndex = null;
      this.resizingDirection = null;
      document.removeEventListener('mousemove', this.onResizing);
      document.removeEventListener('mouseup', this.onResizeEnd);
    },
    onDragStart(event) {
      event.dataTransfer.setData('text/plain', JSON.stringify({ task: 'Task 1', color: 'blue', width: 100 }));
    },
    snapToHourlyInterval(value) {
      const hourWidth = 60; // Example: 60px per hour
      return Math.round(value / hourWidth) * hourWidth;
    },
    getRandomColor() {
      const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500']; // Exclude 'bg-white'
      return colors[Math.floor(Math.random() * colors.length)];
    },
    getTextColor(bgColorClass) {
      const darkBackgroundColors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-black'];
      return darkBackgroundColors.includes(bgColorClass) ? 'white' : 'black';
    },
  },
};
</script>

<style scoped>
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
</style>
