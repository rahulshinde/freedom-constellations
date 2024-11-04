<template>
  

  <div class="fixed z-[100] h-full flex top-0 left-4 right-4 pointer-events-none"
    :class="{'!hidden' : !gridVisible}"
  >
    
    <span 
      v-for="col in 12" 
      class="block h-full bg-[#0ff] opacity-25 mx-4 w-col1 basis-col1"
    ></span>

  </div>

</template>

<script setup>
  const gridVisible = useState('gridVisible', () => false);

  const toggleGrid = () => {
    gridVisible.value = !gridVisible.value;
  }

  if (process.client){
    var keyPressed = {};

    window.addEventListener('keydown', function(e) {
      keyPressed[e.key + e.location] = true;
      if(keyPressed.g0 == true && keyPressed.r0 == true){
        toggleGrid();
      }
    }, false);

    window.addEventListener('keyup', function(e) {
      keyPressed[e.key + e.location] = false;

      keyPressed = {};
    }, false);

  }

</script>

<style>
.grid_column {
  width: calc(8.33% - (1rem * 10/11));
}
</style>