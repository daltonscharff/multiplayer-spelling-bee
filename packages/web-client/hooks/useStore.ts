import create from "zustand";

type StoreState = {
  username?: string;
  setUsername: (name: string) => void;
  roomCode?: string;
  setRoomCode: (code: string) => void;
  letters: string[];
  centerLetter: string;
};

export const useStore = create<StoreState>((set) => ({
  setUsername: (name) =>
    set(() => {
      username: name;
    }),
  setRoomCode: (code) =>
    set(() => {
      roomCode: code;
    }),
  letters: ["b", "c", "d", "e", "f", "g"],
  centerLetter: "a",
}));

export default useStore;
