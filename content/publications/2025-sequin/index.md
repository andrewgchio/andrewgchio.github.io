---
title: "SEQUIN: A Network Science and Physics-based Approach to Identify Sequential N-k Attacks in Electric Power Grids"

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - me
  - Russell Bent
  - Kaarthik Sundar
  - Nalini Venkatasubramanian

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2025-02-13"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-02-13"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication metadata — structured fields used by citation styles and BibTeX export.
publication:
  name: "16th ACM/IEEE International Conference on Cyber-Physical Systems"
  short_name: "ACM/IEEE ICCPS"
peer_reviewed: true

# Awards, honors, and recognitions. Surfaced as badges on the page and in listings.
# awards:
#   - name: "Best Paper Award"
#     level: winner

# Funders and grants. Required by many funders for compliance reporting.
funding:
  - funder: "NSF-JST SHIELD"

abstract: |-
  The electric grid is a vital infrastructure that supplies power on which
  modern cities and communities depend, and maintaining its reliable service
  and resilient operation is essential. Recently, extreme events such as
  natural disasters and man-made attacks have revealed the fragility of the
  grid, and the widespread consequences that people can face as a result. In
  general, the grid's performance relies on a few key components. However,
  efficiently finding these components is challenging, due to the
  geo-distributed scale of the grid, complex physics governing power flows, and
  automated network response. Realistically, identifying these key components
  must also consider the temporal aspect of how failures affect the network. In
  this paper, we address the problem of identifying worst-case disruptions to
  the grid, under the sequential failure of components. We present SEQUIN, a
  framework leveraging network science principles and physics-based constraint
  optimization to explore such failures in the grid. We formulate the problem
  using a sequential N-k interdiction model, which provides a methodology to
  explore and capture interactions between the failures and network response.
  Our approach defines several network properties to assess the contribution of
  each component towards its operation, and provides an efficient guided
  exploration of attacks. We also provide a toolkit to help reason about the
  impact on the grid. Extensive experiments on multiple benchmark grid networks
  are conducted, which demonstrate the efficacy of our approach, and
  demonstrate how the ordering of attacks can result in different levels of
  disruption.

# Summary. An optional shortened abstract.
# summary: ''

tags:
  - Resilience
  - Power Grid
  - N-k Interdiction

# Display this page in the Featured widget?
featured: true

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.1145/3716550.3722029

# Custom links.
# Files stored in this page's own folder are referenced by filename alone.
links:
  - type: pdf
    url: SEQUIN-paper.pdf
  - type: code
    url: https://github.com/andrewgchio/SEQUIN

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
projects: ['sequin']

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

# Add social media icons at end
share: false
---
