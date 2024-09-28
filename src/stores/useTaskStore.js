import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  insertTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  markComplete: (updateTask) =>
    set((state) => ({
      tasks: updateTask,
    })),
}));

// insertTask: (task) => set((state) => ({ tasks: tasks }))

// updateDTCData: (data: any) => set(() => ({ dtcData: data })),
