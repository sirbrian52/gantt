<template>
  <div
    class="bg-blue-500 text-white text-center rounded cursor-pointer p-2"
    :style="{ width: width + 'px', position: 'absolute', left: left + 'px', top: top + 'px' }"
    @mousedown="onResizeStart"
    draggable="true"
    @dragstart="onDragStart"
  >
    Drag Me
    <!-- Resizing Handle -->
    <div
      class="absolute right-0 top-0 h-full w-2 bg-gray-700 cursor-ew-resize"
      @mousedown.stop.prevent="startResizing('right')"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 100, // Initial width of the bar in pixels
      resizing: false,
      initialX: 0,
      initialWidth: 0,
      initialLeft: 0,
      initialTop: 0,
      left: 0, // Default left position
      top: 0,  // Default top position
    };
  },
  methods: {
    onDragStart(event) {
      event.dataTransfer.setData('text/plain', JSON.stringify({ task: 'Task 1', color: 'blue', width: this.width }));
    },
    onResizeStart(event) {
      this.resizing = true;
      this.initialX = event.clientX;
      this.initialWidth = this.width;
      this.initialLeft = this.left;
      this.initialTop = this.top;

      document.addEventListener('mousemove', this.onResizing);
      document.addEventListener('mouseup', this.onResizeEnd);
    },
    onResizing(event) {
      if (this.resizing) {
        const deltaX = event.clientX - this.initialX;
        this.width = Math.max(this.initialWidth + deltaX, 20); // Minimum width constraint (e.g., 20px)
      }
    },
    onResizeEnd() {
      this.resizing = false;
      document.removeEventListener('mousemove', this.onResizing);
      document.removeEventListener('mouseup', this.onResizeEnd);
    },
    startResizing(direction) {
      this.resizing = true;
      this.initialX = event.clientX;
      this.initialWidth = this.width;
      this.initialLeft = this.left;
      this.initialTop = this.top;

      document.addEventListener('mousemove', this.onResizing);
      document.addEventListener('mouseup', this.onResizeEnd);
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
