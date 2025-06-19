<script setup>
const metrics = ref({
  emotionalImpact: 7.2,
  toneConsistency: 8.5,
  collegeFit: 6.8,
  readability: 9.1
})

const radarData = computed(() => ({
  labels: ['Emotion', 'Tone', 'Structure', 'Originality', 'Impact'],
  datasets: [{
    label: 'Current Essay',
    data: [7, 8, 6, 7, 8],
    backgroundColor: 'rgba(79, 70, 229, 0.2)',
    borderColor: '#4f46e5',
    pointBackgroundColor: '#4f46e5',
    pointBorderColor: '#fff',
  }]
}))
</script>

<template>
  <div class="card bg-base-100 border border-base-200 p-6">
    <h2 class="text-lg font-bold mb-4">Essay Analytics</h2>
    
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="card bg-base-100 border border-base-200 p-4">
        <h3 class="text-sm text-base-content/70">Emotional Impact</h3>
        <div class="flex items-end mt-1">
          <span class="text-2xl font-bold text-success">{{ metrics.emotionalImpact }}</span>
          <span class="ml-1 text-base-content/40">/10</span>
        </div>
        <div class="w-full h-2 mt-2 bg-base-200 rounded-full">
          <div 
            class="h-2 bg-success rounded-full" 
            :style="{ width: `${metrics.emotionalImpact * 10}%` }"
          ></div>
        </div>
      </div>
      
      <div class="card bg-base-100 border border-base-200 p-4">
        <h3 class="text-sm text-base-content/70">College Fit</h3>
        <div class="flex items-end mt-1">
          <span class="text-2xl font-bold text-primary">{{ metrics.collegeFit }}</span>
          <span class="ml-1 text-base-content/40">/10</span>
        </div>
        <div class="w-full h-2 mt-2 bg-base-200 rounded-full">
          <div 
            class="h-2 bg-primary rounded-full" 
            :style="{ width: `${metrics.collegeFit * 10}%` }"
          ></div>
        </div>
      </div>
      
      <div class="card bg-base-100 border border-base-200 p-4">
        <h3 class="text-sm text-base-content/70">Tone Consistency</h3>
        <div class="flex items-end mt-1">
          <span class="text-2xl font-bold text-warning">{{ metrics.toneConsistency }}</span>
          <span class="ml-1 text-base-content/40">/10</span>
        </div>
        <div class="w-full h-2 mt-2 bg-base-200 rounded-full">
          <div 
            class="h-2 bg-warning rounded-full" 
            :style="{ width: `${metrics.toneConsistency * 10}%` }"
          ></div>
        </div>
      </div>
      
      <div class="card bg-base-100 border border-base-200 p-4">
        <h3 class="text-sm text-base-content/70">Readability</h3>
        <div class="flex items-end mt-1">
          <span class="text-2xl font-bold text-info">{{ metrics.readability }}</span>
          <span class="ml-1 text-base-content/40">/10</span>
        </div>
        <div class="w-full h-2 mt-2 bg-base-200 rounded-full">
          <div 
            class="h-2 bg-info rounded-full" 
            :style="{ width: `${metrics.readability * 10}%` }"
          ></div>
        </div>
      </div>
    </div>
    
    <div class="card bg-base-100 border border-base-200 p-4">
      <h3 class="mb-3 text-sm text-base-content/70">Writing Dimensions</h3>
      <div class="h-64 flex items-center justify-center bg-base-200 rounded-lg">
        <div class="radial-progress text-primary" :style="`--value:70; --size:12rem; --thickness: 8px;`">
          <div class="text-center">
            <div class="text-lg font-bold">Overall Score</div>
            <div class="text-3xl font-bold">82%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>