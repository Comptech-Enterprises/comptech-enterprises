# Images for "Our AI solutions" cards

Generate each image with any AI image tool, then save it with the file name shown.

**Add this style line to every prompt:**

> Wide 15:8 illustration, dark near-black background (#0B0507), deep burgundy (#6B0F1A) and soft pink (#F2A7B0) accents, subtle grid, clean modern 3D style, soft lighting, one centred subject, no text, no letters, no logos.

| File name | Prompt |
|---|---|
| `agents.webp` | A friendly abstract AI agent core connected to floating task cards that it is organising. |
| `geo.webp` | A glowing search answer panel with one highlighted source card rising above the others. |
| `software.webp` | Layered app windows and data blocks assembling into one product. |
| `training.webp` | A small team around a table with laptops and a glowing holographic lesson board. |
| `chatbots.webp` | Two floating chat bubbles with a soft AI orb replying between them. |
| `sales.webp` | A radar finding highlighted prospects, with an envelope flying towards a calendar. |
| `automation.webp` | A smooth conveyor of documents passing through gears and coming out completed. |
| `integrations.webp` | A central hub linked by glowing cables to several app tiles. |
| `workflows.webp` | A branching flow of connected nodes with one path lit from start to finish. |
| `dashboards.webp` | A floating analytics dashboard with rising charts and an AI orb beside it. |
| `audit.webp` | A magnifying glass over a workflow map, with three spots marked as opportunities. |

Save the files in `website/public/solutions/` (about 600×320, under 60 KB each).
Then add `image: "/solutions/<file name>"` to each entry in `SOLUTIONS` in
`components/about/data.ts`. Cards without an image keep the current icon.
