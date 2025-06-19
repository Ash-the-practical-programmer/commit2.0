<script setup>
const agents = ref([
  {
    id: 'matchmaker',
    name: 'Essay Matchmaker',
    status: 'active',
    description: 'Finding essays similar to your style',
    icon: '🔍',
    progress: 75
  },
  {
    id: 'reverse-engineer',
    name: 'Reverse Engineer',
    status: 'idle',
    description: 'Ready to analyze successful essays',
    icon: '🧩',
    progress: 0
  },
  {
    id: 'coach',
    name: 'Personal Coach',
    status: 'active',
    description: 'Reviewing your draft',
    icon: '📝',
    progress: 40
  },
  {
    id: 'persona-builder',
    name: 'Persona Builder',
    status: 'inactive',
    description: 'Waiting for your input',
    icon: '👤',
    progress: 0
  }
])

const statusColor = (status) => {
  return {
    active: 'badge-primary',
    idle: 'badge-info',
    inactive: 'badge-neutral'
  }[status]
}

const activateAgent = (agentId) => {
  agents.value = agents.value.map(agent => 
    agent.id === agentId 
      ? { ...agent, status: 'active', progress: 30 } 
      : agent
  )
}
</script>

<template>
  <div class="card bg-base-100 border border-base-200 p-6">
    <h2 class="text-lg font-bold mb-4">AI Agents</h2>
    
    <div class="space-y-4">
      <div 
        v-for="agent in agents" 
        :key="agent.id"
        class="card bg-base-100 border border-base-200 p-4 transition-all"
        :class="{'opacity-60': agent.status === 'inactive'}"
      >
        <div class="flex items-start gap-4">
          <div class="flex items-center justify-center w-12 h-12 text-xl bg-base-200 rounded-xl">
            {{ agent.icon }}
          </div>
          
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <h3 class="font-bold">{{ agent.name }}</h3>
              <span 
                class="badge badge-sm capitalize"
                :class="statusColor(agent.status)"
              >
                {{ agent.status }}
              </span>
            </div>
            
            <p class="mt-1 text-sm text-base-content/70">{{ agent.description }}</p>
            
            <div v-if="agent.status === 'active'" class="mt-3">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs text-base-content/60">Progress</span>
                <span class="text-xs font-medium">{{ agent.progress }}%</span>
              </div>
              <progress 
                class="progress progress-primary w-full" 
                :value="agent.progress" 
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        
        <div v-if="agent.status === 'inactive'" class="mt-4">
          <button 
            @click="activateAgent(agent.id)"
            class="btn btn-sm btn-outline btn-primary w-full"
          >
            Activate Agent
          </button>
        </div>
      </div>
    </div>
  </div>
</template>