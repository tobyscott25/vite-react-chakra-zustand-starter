import { create } from 'zustand'

interface CounterStore {
	count: number
	incrementCount: () => void
	clearCount: () => void
}

export const useCounterStore = create<CounterStore>((set) => ({
	count: 0,
	incrementCount: () => set((state) => ({ count: state.count + 1 })),
	clearCount: () => set({ count: 0 }),
}))
