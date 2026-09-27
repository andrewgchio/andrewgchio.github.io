---
title: "STEP: Semantics-Aware Sensor Placement for Monitoring Community-Scale Infrastructure"

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - me
  - Jian Peng
  - Nalini Venkatasubramanian

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2023-11-15"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-11-16"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication metadata — structured fields used by citation styles and BibTeX export.
publication:
  name: "10th ACM International Conference on Systems for Energy-Efficient Buildings, Cities, and Transportation"
  short_name: "ACM BuildSys"
peer_reviewed: true

# Awards, honors, and recognitions. Surfaced as badges on the page and in listings.
# awards:
#   - name: "Best Paper Award"
#     level: winner

# Funders and grants. Required by many funders for compliance reporting.
funding:
  - funder: "NSF SWADE"

abstract: |-
  Built utility infrastructures provide essential services such as water, gas,
  and power to communities, and their resilient operation under anomalies and
  spurious events is critical. In this paper, we study the deployment of
  heterogeneous IoT sensors in geo-distributed infrastructure networks, using
  stormwater as a driving usecase. These systems are responsible for drainage
  and flood control, but in doing so, serve as conduits that carry pollutants
  to receiving waters. The timely detection of such events is challenging, due
  to the transient/random nature of pollutants, scarce historical data, and
  complexity of the system. We present STEP, an integrated framework for sensor
  placement that leverages the network structure and topology, behavioral
  properties (e.g., flow rate), and community semantics such as locations of
  facilities (e.g., commercial spaces, residential areas, and industrial
  plants, etc.). We identify key metrics to capture anomaly coverage and
  traceability, use past pollution incidents to inform sensor deployment, and
  model network operations through physics-based simulations and
  community-scale semantics. STEP is evaluated on six real-world stormwater
  networks, which show the efficacy of our approach over existing methods.

# Summary. An optional shortened abstract.
# summary: ''

tags:
  - Sensor Deployment
  - Stormwater Monitoring
  - Heterogeneous Anomalies
  - Semantics-aware Modeling

# Display this page in the Featured widget?
featured: false

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.1145/3600100.3623752

# Custom links.
# Files stored in this page's own folder are referenced by filename alone.
links:
  - type: pdf
    url: https://dl.acm.org/doi/pdf/10.1145/3600100.3623752
  - type: code
    url: https://github.com/andrewgchio/STEP
  - type: poster
    url: STEP-poster.pdf
  - type: slides
    url: STEP-slides.pdf

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
  - step

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

# Add social media icons at end
share: false
---
