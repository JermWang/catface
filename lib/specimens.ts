export type HabitatId =
  | "savanna"
  | "arctic"
  | "coastline";

export type ReservePlacement = {
  x: string;
  y: string;
  width: string;
  z: number;
};

export type Specimen = {
  id: string;
  name: string;
  classification: string;
  habitat: string;
  environment: HabitatId;
  temperament: string;
  rarity: string;
  threatLevel: string;
  coordinates: string;
  image: string;
  cutout?: string;
  video?: string;
  location: string;
  notes: string;
  behavior: string;
  placements: Partial<Record<HabitatId, ReservePlacement>>;
};

export type Habitat = {
  id: HabitatId;
  label: string;
  channel: string;
  title: string;
  dek: string;
  palette: string;
  background: string;
  featured: string[];
};

export const habitats: Habitat[] = [
  {
    id: "savanna",
    label: "Savanna",
    channel: "CH 01",
    title: "Sunrise Over the Corrected Reserve",
    dek: "Observe quietly. They know you're here.",
    palette: "from-[#050705] via-[#174C22] to-[#5c3109]",
    background: "/assets/catface/catface-sunrise.png",
    featured: ["hippo-cat", "llama-cat", "kangaroo-cat"]
  },
  {
    id: "arctic",
    label: "Arctic",
    channel: "CH 02",
    title: "Whiteout Colony Transmission",
    dek: "Cold air. Warm judgment.",
    palette: "from-[#061015] via-[#123145] to-[#A9D8FF]",
    background: "/assets/catface/penguin-cat.png",
    featured: ["penguin-cat", "polar-bear-cat"]
  },
  {
    id: "coastline",
    label: "Coastline",
    channel: "CH 03",
    title: "Tidal Mammal Surveillance",
    dek: "Low tide exposes the loafing population.",
    palette: "from-[#04100c] via-[#174C22] to-[#1B5FA7]",
    background: "/assets/catface/seal-cat.png",
    featured: ["seal-cat", "shark-cat"]
  }
];

export const specimens: Specimen[] = [
  {
    id: "hippo-cat",
    name: "Hippopotameow",
    classification: "Amphibius Loaf Maximus",
    habitat: "Savanna Wetlands",
    environment: "savanna",
    temperament: "Unmoving. Unbothered. Unreasonably cat.",
    rarity: "Common near warm mud",
    threatLevel: "Do not negotiate",
    coordinates: "CF-01 / 06.421S, 31.204E",
    image: "/assets/catface/hippo-cat.png",
    cutout: "/assets/catface/cutouts/hippo-cat.png",
    video: "/assets/catface/hippo-cat.mp4",
    location: "Muddy liquidity pools",
    notes: "Often found standing in shallow liquidity with a hostile stare.",
    behavior: "Submerges for hours, then resurfaces to reject the entire crew.",
    placements: {
      savanna: { x: "2%", y: "40%", width: "30%", z: 5 }
    }
  },
  {
    id: "giraffe-cat",
    name: "Giraffeline",
    classification: "Longneck Domesticus",
    habitat: "Acacia Signal Towers",
    environment: "savanna",
    temperament: "Elegant until eye contact is established.",
    rarity: "Unverified but tall",
    threatLevel: "Low altitude risk",
    coordinates: "CF-07 / 02.118S, 36.822E",
    image: "/assets/catface/giraffe-cat.jpeg",
    location: "Tree-line broadcast masts",
    notes: "Uses height to knock documentary drones off schedule.",
    behavior: "Browses the canopy and refuses to explain the neck.",
    placements: {}
  },
  {
    id: "fish-cat",
    name: "Catfish, Literally",
    classification: "Freshwater Whisker Incident",
    habitat: "Creek Lens Zone",
    environment: "coastline",
    temperament: "Held briefly. Judging permanently.",
    rarity: "Common in cursed tributaries",
    threatLevel: "Small but disappointed",
    coordinates: "CF-22 / 30.118N, 90.201W",
    image: "/assets/catface/fish-cat.jpeg",
    location: "Shallow water evidence tray",
    notes: "A fish that saw the camera crew and became everybody's problem.",
    behavior: "Stares from the shallows with the confidence of a house pet near a keyboard.",
    placements: {}
  },
  {
    id: "penguin-cat",
    name: "Penguincat",
    classification: "Tuxedo Waddle Unit",
    habitat: "Arctic Colony",
    environment: "arctic",
    temperament: "Formal, clumsy, completely certain.",
    rarity: "Seasonal swarm",
    threatLevel: "Slippery witness",
    coordinates: "CF-12 / 73.009S, 26.103W",
    image: "/assets/catface/penguin-cat.png",
    cutout: "/assets/catface/cutouts/penguin-cat.png",
    video: "/assets/catface/penguin-cat.mp4",
    location: "Ice shelf queue lines",
    notes: "The only known bird to complain about room service.",
    behavior: "Waddles in ceremonial silence until someone opens a can.",
    placements: {
      arctic: { x: "12%", y: "46%", width: "22%", z: 5 }
    }
  },
  {
    id: "shark-cat",
    name: "Meowshark",
    classification: "Apex Purrdator",
    habitat: "Open Water",
    environment: "coastline",
    temperament: "Silent, aerodynamic, wants snacks.",
    rarity: "Rare surface breach",
    threatLevel: "Absolutely not a petting zone",
    coordinates: "CF-20 / 11.441N, 142.708E",
    image: "/assets/catface/shark-cat.png",
    cutout: "/assets/catface/cutouts/shark-cat.png",
    video: "/assets/catface/shark-cat.mp4",
    location: "Blue-water camera drift",
    notes: "Field footage from the world's least necessary ecosystem.",
    behavior: "Cruises past the lens like it owns the ocean and the lens.",
    placements: {
      coastline: { x: "4%", y: "30%", width: "42%", z: 3 }
    }
  },
  {
    id: "seal-cat",
    name: "Sealpoint",
    classification: "Coastal Blorp Felidae",
    habitat: "Rocky Coastline",
    environment: "coastline",
    temperament: "Wet velvet with a legal department.",
    rarity: "Often heard before seen",
    threatLevel: "Flops with intent",
    coordinates: "CF-09 / 58.300N, 134.419W",
    image: "/assets/catface/seal-cat.png",
    cutout: "/assets/catface/cutouts/seal-cat.png",
    video: "/assets/catface/seal-cat.mp4",
    location: "Fog rocks, dock shadows",
    notes: "Sunbathes like a witness in protective custody.",
    behavior: "Performs one dramatic roll, then invoices the production.",
    placements: {
      coastline: { x: "54%", y: "46%", width: "30%", z: 5 }
    }
  },
  {
    id: "polar-bear-cat",
    name: "Polar Purr",
    classification: "Ursus Domesticus Glacial",
    habitat: "Pack Ice",
    environment: "arctic",
    temperament: "Soft-looking. Operationally not soft.",
    rarity: "Rare, enormous, judgmental",
    threatLevel: "Whiteout warning",
    coordinates: "CF-02 / 82.501N, 41.220W",
    image: "/assets/catface/polar-bear-cat.png",
    cutout: "/assets/catface/cutouts/polar-bear-cat.png",
    location: "Ice fog perimeter",
    notes: "Nature has finally been corrected, and it is very large.",
    behavior: "Appears from negative space and silently edits the food chain.",
    placements: {
      arctic: { x: "52%", y: "30%", width: "36%", z: 4 }
    }
  },
  {
    id: "llama-cat",
    name: "Llamacat",
    classification: "Andean Side-Eye Grazer",
    habitat: "High Brushland",
    environment: "savanna",
    temperament: "Tall opinions. Minimal blinking.",
    rarity: "Local but elusive",
    threatLevel: "Spit forecast pending",
    coordinates: "CF-16 / 13.221S, 72.503W",
    image: "/assets/catface/llama-cat.png",
    cutout: "/assets/catface/cutouts/llama-cat.png",
    video: "/assets/catface/llama-cat.mp4",
    location: "Dry ridges and staff-only slopes",
    notes: "Chews slowly through the emotional arc of the episode.",
    behavior: "Rotates one ear toward criticism and stores it forever.",
    placements: {
      savanna: { x: "35%", y: "34%", width: "22%", z: 4 }
    }
  },
  {
    id: "kangaroo-cat",
    name: "Kangapurr",
    classification: "Pouched Impact Cat",
    habitat: "Red Dust Flats",
    environment: "savanna",
    temperament: "Spring-loaded and personally offended.",
    rarity: "Dusk sightings only",
    threatLevel: "Kicks in chapters",
    coordinates: "CF-14 / 24.887S, 133.775E",
    image: "/assets/catface/kangaroo-cat.png",
    cutout: "/assets/catface/cutouts/kangaroo-cat.png",
    video: "/assets/catface/kangaroo-cat.mp4",
    location: "Outback signal dead zones",
    notes: "Carries a smaller grievance in the pouch.",
    behavior: "Bounces between shots as if the edit owes it money.",
    placements: {
      savanna: { x: "65%", y: "32%", width: "24%", z: 5 }
    }
  }
];

export const getSpecimen = (id: string) =>
  specimens.find((specimen) => specimen.id === id);
