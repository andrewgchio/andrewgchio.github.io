---
title: "SmartSPEC: A framework to generate customizable, semantics-based smart space datasets"

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - me
  - Daokun Jiang
  - Peeyush Gupta
  - Georgios Bouloukakis
  - Roberto Yus
  - Sharad Mehrotra
  - Nalini Venkatasubramanian

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2023-06-12"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-06-12"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication metadata — structured fields used by citation styles and BibTeX export.
publication:
  name: "Pervasive and Mobile Computing"
  short_name: "PMC"
  volume: 93
  publisher: "Elsevier"

peer_reviewed: true

# Awards, honors, and recognitions. Surfaced as badges on the page and in listings.
# awards:
#   - name: "Best Paper Award"
#     level: winner

# Funders and grants. Required by many funders for compliance reporting.
funding:
  - funder: "NSF-JST SHIELD"
  - funder: "DARPA TIPPERS"

abstract: |-
  This paper presents SmartSPEC, an approach to generate customizable synthetic
  smart space datasets using sensorized spaces in which people and events are
  embedded. Smart space datasets are critical to design, deploy and evaluate
  systems and applications under issues of heterogeneity, scalability and
  robustness, leading to cost-effective operation which improves the safety,
  comfort and convenience experienced by space occupants. However, many
  challenges exist in obtaining realistic smart space datasets for testing and
  validation, from a lack of fine-grained sensing to privacy/security concerns.
  SmartSPEC is a smart space simulator and data generator that leverages a
  semantic model augmented with user-defined constraints to represent important
  attributes, relationships, and external domain knowledge for a smart space.
  We employ machine learning (ML) approaches to extract relevant patterns from
  a sensorized space, which are used in an event-driven simulation strategy to
  generate realistic simulated data about the space (events, trajectories,
  sensor observation datasets, etc.). To evaluate the realism of the generated
  data, we develop a structured methodology and metrics to assess various
  aspects of smart space datasets, including trajectories of people and
  occupancy of spaces. Our experimental study looks at two real-world
  settings/datasets: an instrumented smart campus building and a city-wide GPS
  dataset. Our results show the realism of trajectories produced by SmartSPEC
  (1.4x to 4.4x more realistic than the best synthetic data baseline when
  compared to real-world data, depending on the scenario and configuration), as
  well as sensor data derived from such trajectories which adhere to the
  underlying semantics of the smart space as compared to synthetic sensor data
  baselines, even under hypothetical changes.

# Summary. An optional shortened abstract.
# summary: ''

tags:
  - Smart space
  - Sensor observation
  - Trajectory generation
  - Simulation

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.1016/j.pmcj.2023.101809

# Custom links.
# Files stored in this page's own folder are referenced by filename alone.
links:
  - type: pdf
    url: https://www.sciencedirect.com/science/article/pii/S1574119223000676
  - type: code
    url: https://github.com/andrewgchio/SmartSPEC

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/projects/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - smartspec
  - tippers

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

# Add social media icons at end
share: false
---
