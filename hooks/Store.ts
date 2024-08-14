import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
  parentId?: string | null;
}

type State = {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  deleteComment: (id: string) => void;
  editComment: (id: string, text: string) => void;
};

const useStore = create<State>()(
  persist(
    (set) => ({
      comments: [],
      addComment: (comment) =>
        set((state) => ({ comments: [comment, ...state.comments] })),
      deleteComment: (id) =>
        set((state) => ({
          comments: state.comments.filter((comment) => comment.id !== id),
        })),
      editComment: (id, text) =>
        set((state) => ({
          comments: state.comments.map((comment) =>
            comment.id === id ? { ...comment, text } : comment
          ),
        })),
    }),
    {
      name: "chitchat-storage",
    }
  )
);

export default useStore;
