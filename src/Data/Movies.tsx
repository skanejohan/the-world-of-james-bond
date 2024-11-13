import { IMovie } from "../types";
import { dn } from "./DN";

const Movies : IMovie[] = [
	{ id: 1, title: "Dr. No", year: 1962, enabled: true, description: "The original. Hot beaches, a waterfall and a mysterious island.", scenes: dn },
	{ id: 2, title: "From Russia With Love", year: 1963, enabled: false, description: "", scenes: [] },
	{ id: 3, title: "Goldfinger", year: 1964, enabled: false, description: "", scenes: [] },
	{ id: 4, title: "Thunderball", year: 1965, enabled: false, description: "", scenes: [] },
	{ id: 5, title: "You Only Live Twice", year: 1967, enabled: false, description: "", scenes: [] },
	{ id: 6, title: "On Her Majesty's Secret Service", year: 1969, enabled: true, description: "The one-time Bond. Sweeping alpine views and Portuguese beaches.", scenes: [] },
	{ id: 7, title: "Diamonds Are Forever", year: 1971, enabled: false, description: "", scenes: [] },
	{ id: 8, title: "Live And Let Die", year: 1973, enabled: false, description: "", scenes: [] },
	{ id: 9, title: "The Man With The Golden Gun", year: 1974, enabled: false, description: "", scenes: [] },
	{ id: 10, title: "The Spy Who Loved Me", year: 1977, enabled: false, description: "", scenes: [] },
	{ id: 11, title: "Moonraker", year: 1979, enabled: false, description: "", scenes: [] },
	{ id: 12, title: "For Your Eyes Only", year: 1981, enabled: false, description: "", scenes: [] },
	{ id: 13, title: "Octopussy", year: 1983, enabled: false, description: "", scenes: [] },
	{ id: 14, title: "Never Say Never Again", year: 1983, enabled: false, description: "", scenes: [] },
	{ id: 15, title: "A View To A Kill", year: 1985, enabled: false, description: "", scenes: [] },
	{ id: 16, title: "The Living Daylights", year: 1987, enabled: false, description: "", scenes: [] },
	{ id: 17, title: "License To Kill", year: 1989, enabled: false, description: "", scenes: [] },
	{ id: 18, title: "Goldeneye", year: 1995, enabled: false, description: "", scenes: [] },
	{ id: 19, title: "Tomorrow Never Dies", year: 1997, enabled: false, description: "", scenes: [] },
	{ id: 20, title: "The World Is Not Enough", year: 1999, enabled: false, description: "", scenes: [] },
	{ id: 21, title: "Die Another Day", year: 2002, enabled: false, description: "", scenes: [] },
	{ id: 22, title: "Casino Royale", year: 2006, enabled: false, description: "", scenes: [] },
	{ id: 23, title: "Quantum Of Solace", year: 2008, enabled: false, description: "", scenes: [] },
	{ id: 24, title: "Skyfall", year: 2012, enabled: false, description: "", scenes: [] },
	{ id: 25, title: "Spectre", year: 2015, enabled: false, description: "", scenes: [] },
	{ id: 26, title: "No Time To Die", year: 2020, enabled: false, description: "", scenes: [] }
]

export default Movies;