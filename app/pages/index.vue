<!-- pages/index.vue -->
<template>
<div class="min-h-screen bg-base-100 text-base-content flex flex-col font-[DM_Sans]">
  <!-- Header -->
  <header class="bg-white border-b border-base-300 py-4 px-6 shadow-sm">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <span class="text-xl font-bold text-white">C</span>
        </div>
        <h1 class="text-xl font-bold text-base-content">Commit</h1>
      </div>
      
      <div class="flex items-center gap-4">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-sm btn-outline border-base-300 text-base-content">
            <span>{{ college }}</span>
            <Icon name="lucide:chevron-down" class="ml-2 text-xs text-base-content/70" />
          </div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border border-base-300">
            <li v-for="c in colleges" :key="c">
              <a @click="college = c" class="text-base-content hover:bg-base-200">{{ c }}</a>
            </li>
          </ul>
        </div>
        
        <div class="flex items-center gap-2 px-3 py-1 bg-base-200 rounded-full">
          <span class="text-sm font-medium text-base-content">{{ wordCount }}</span>
          <span class="text-sm text-base-content/60">words</span>
        </div>
        
        <button class="btn btn-sm btn-primary">
          <Icon name="fluent:save-24-regular" class="mr-[0.5] text-base" />
          Save
        </button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-grow container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Editor Column -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Editor Card -->
        <div class="card bg-base-100 border border-base-300 rounded-box">
          <div class="card-body p-6">
            <div class="flex justify-between items-center mb-4">
              <h2 class="card-title text-base-content">Essay Editor</h2>
              <div class="flex gap-2">
                <button class="btn btn-sm btn-outline border-base-300 text-base-content hover:bg-base-200">
                  <Icon name="lucide:search" />
                  Search
                </button>
              </div>
            </div>
            
            <EssayEditor />
            <!--textarea
              v-model="essayText"
              class="textarea textarea-bordered w-full h-96 bg-base-200 text-base-content"
              placeholder="Start writing your college essay here...">
            </textarea-->
            
            <div class="mt-6 flex gap-3">
              <button class="btn btn-primary flex-1">
                <Icon name="lucide:save" class="mr-1" />
                Save Draft
              </button>
              <button class="btn btn-secondary flex-1">
                <Icon name="lucide:rocket" class="mr-1" />
                Analyze Essay
              </button>
            </div>
          </div>
        </div>
        
        <!-- Analytics Panel -->
        <div class="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-box border border-base-300">
          <h2 class="text-xl font-bold text-base-content mb-6">Essay Analytics</h2>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div class="stat bg-base-100 p-4 rounded-box border border-base-300">
              <h3 class="text-sm text-base-content/70 mb-1">Emotional Impact</h3>
              <div class="flex items-end">
                <span class="text-2xl font-bold text-success">8.2</span>
                <span class="ml-1 text-base-content/40 text-sm">/10</span>
              </div>
              <div class="w-full h-2 mt-2 bg-base-300 rounded-full">
                <div class="h-2 bg-success rounded-full" style="width: 82%"></div>
              </div>
            </div>
            
            <div class="stat bg-base-100 p-4 rounded-box border border-base-300">
              <h3 class="text-sm text-base-content/70 mb-1">College Fit</h3>
              <div class="flex items-end">
                <span class="text-2xl font-bold text-primary">7.5</span>
                <span class="ml-1 text-base-content/40 text-sm">/10</span>
              </div>
              <div class="w-full h-2 mt-2 bg-base-300 rounded-full">
                <div class="h-2 bg-primary rounded-full" style="width: 75%"></div>
              </div>
            </div>
            
            <div class="stat bg-base-100 p-4 rounded-box border border-base-300">
              <h3 class="text-sm text-base-content/70 mb-1">Tone Consistency</h3>
              <div class="flex items-end">
                <span class="text-2xl font-bold text-warning">9.1</span>
                <span class="ml-1 text-base-content/40 text-sm">/10</span>
              </div>
              <div class="w-full h-2 mt-2 bg-base-300 rounded-full">
                <div class="h-2 bg-warning rounded-full" style="width: 91%"></div>
              </div>
            </div>
            
            <div class="stat bg-base-100 p-4 rounded-box border border-base-300">
              <h3 class="text-sm text-base-content/70 mb-1">Readability</h3>
              <div class="flex items-end">
                <span class="text-2xl font-bold text-info">8.7</span>
                <span class="ml-1 text-base-content/40 text-sm">/10</span>
              </div>
              <div class="w-full h-2 mt-2 bg-base-300 rounded-full">
                <div class="h-2 bg-info rounded-full" style="width: 87%"></div>
              </div>
            </div>
          </div>
          
          <div class="bg-base-100 p-4 rounded-box border border-base-300">
            <h3 class="text-sm text-base-content/70 mb-3">Writing Dimensions</h3>
            <div class="flex items-center justify-center h-64 bg-base-200 rounded-box">
              <div class="radial-progress text-primary" style="--value:82; --size:12rem; --thickness: 8px;">
                <div class="text-center">
                  <div class="text-lg font-bold text-base-content">Overall Score</div>
                  <div class="text-3xl font-bold text-base-content">82%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Sidebar Column -->
      <div class="space-y-8">
        <!-- AI Agents -->
        <div class="card bg-base-100 border border-base-300 rounded-box">
          <div class="card-body p-6">
            <h2 class="card-title text-base-content mb-4">AI Agents</h2>
            
            <div class="space-y-4">
              <div class="flex items-center gap-4 p-4 bg-primary/10 rounded-box border border-primary/20">
                <div class="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span class="text-primary text-xl">🔍</span>
                </div>
                <div>
                  <h3 class="font-semibold text-base-content">Essay Matchmaker</h3>
                  <p class="text-sm text-base-content/70">Finding similar essays</p>
                </div>
                <span class="badge badge-primary ml-auto">Active</span>
              </div>
              
              <div class="flex items-center gap-4 p-4 bg-secondary/10 rounded-box border border-secondary/20">
                <div class="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <span class="text-secondary text-xl">📝</span>
                </div>
                <div>
                  <h3 class="font-semibold text-base-content">Personal Coach</h3>
                  <p class="text-sm text-base-content/70">Reviewing your draft</p>
                </div>
                <span class="badge badge-secondary ml-auto">Working</span>
              </div>
              
              <div class="flex items-center gap-4 p-4 bg-base-200 rounded-box opacity-80">
                <div class="w-12 h-12 rounded-lg bg-base-300 flex items-center justify-center">
                  <span class="text-base-content/40 text-xl">👤</span>
                </div>
                <div>
                  <h3 class="font-semibold text-base-content/70">Persona Builder</h3>
                  <p class="text-sm text-base-content/50">Waiting for input</p>
                </div>
                <span class="badge badge-neutral ml-auto">Inactive</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- College Style Guide -->
        <div class="card bg-base-100 border border-base-300 rounded-box">
          <div class="card-body p-6">
            <h2 class="card-title text-base-content mb-4">College Style Guide</h2>
            
            <div class="p-4 bg-primary/10 rounded-box border border-primary/20">
              <h3 class="font-semibold text-primary mb-3">{{ college }} Preferences</h3>
              <ul class="space-y-2">
                <li class="flex items-start" v-for="(pref, index) in collegePreferences" :key="index">
                  <div class="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                  <span class="text-sm text-base-content">{{ pref }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Essay Search -->
        <div class="card bg-base-100 border border-base-300 rounded-box">
          <div class="card-body p-6">
            <h2 class="card-title text-base-content mb-4">Essay Search</h2>
            
            <div class="form-control">
              <div class="input-group">
                <input 
                  type="text" 
                  placeholder="Search essays by college, theme, or keyword..." 
                  class="input input-bordered w-full bg-base-200 border-base-300 text-base-content"
                />
                <button class="btn btn-square">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
            
            <div class="mt-4">
              <button class="btn btn-outline w-full border-base-300 text-base-content hover:bg-base-200">
                <Icon name="lucide:notebook" class="mr-1" />
                Browse Essay Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
</template>

<script setup>
const college = ref('Harvard')
const essayText = ref('')
const colleges = ref(['Harvard', 'Stanford', 'MIT', 'Yale', 'Princeton'])
const collegePreferences = ref([
'Prefers reflective tone with personal insights',
'Values vulnerability shown through anecdotes',
'Avoids clichés and generic statements',
'Looks for intellectual curiosity'
])

// Computed properties
const wordCount = computed(() => {
return essayText.value.split(/\s+/).filter(word => word.length > 0).length
})
</script>

<style>
/* Smooth transitions */
.card, .btn, .input, .textarea, .badge {
transition: all 0.3s ease;
}

/* Consistent focus states */
.input:focus, .textarea:focus {
box-shadow: 0 0 0 2px hsl(var(--p) / 0.2);
border-color: hsl(var(--p));
}

/* Subtle hover effects */
.btn:hover {
transform: translateY(-2px);
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Layered depth */
.card {
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

/* Accessible contrast */
.text-base-content {
color: hsl(var(--bc) / 0.9);
}

/* Gradient card styling */
.bg-gradient-card {
background: linear-gradient(135deg, hsl(var(--p) / 0.05) 0%, hsl(var(--s) / 0.05) 100%);
}

/* Agent card hover effect */
.agent-card {
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.agent-card:hover {
transform: translateY(-3px);
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>