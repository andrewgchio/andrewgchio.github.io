---
title: "Physics-based Pollutant Source Identification in Stormwater Systems"

# Authors
# If you created a profile for a user (e.g. the default `me` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - me
  - Russell Bent
  - Andrey Y. Lokhov
  - Jian Peng
  - Nalini Venkatasubramanian

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: "2024-06-28"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-06-29"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["paper-conference"]

# Publication metadata — structured fields used by citation styles and BibTeX export.
publication:
  name: "22nd European Control Conference"
  short_name: "ECC"
peer_reviewed: true

# Awards, honors, and recognitions. Surfaced as badges on the page and in listings.
# awards:
#   - name: "Best Paper Award"
#     level: winner

# Funders and grants. Required by many funders for compliance reporting.
funding:
  - funder: "NSF SWADE"

abstract: |-
  Stormwater networks are critical utility infrastructures designed to drain
  rainwater and nuisance flows, such as excess irrigation and groundwater
  seepage from urban communities. During this process, they can transport
  pollutants (e.g., pesticides, oils, and greases) to receiving waters such as
  rivers, bays and oceans. A recurring problem faced by these systems are dry
  weather flows (DWFs), where illicit discharges are introduced and propagated
  in the network during periods with no rain. Current techniques for monitoring
  DWFs consist of manual inspections and grab samples, which are costly and
  inefficient. However, with advances in sensing and communication, the
  Internet-of-Things (IoT) has enabled new opportunities for enhanced decision
  support and control. This paper proposes a quick and efficient physics-based
  backwards inference model to identify potential sources of pollutant
  discharges in DWFs, given time-series IoT observations and knowledge embedded
  in domain-expert simulations. Our approach leverages the underlying physics
  that drives flow propagation in stormwater systems, and optimizes multiple
  least-squares regressions to find potential DWF sources and their associated
  flows. We evaluate our backwards inference model on six real-world stormwater
  networks provided by domain experts, and show its efficacy in reconstructing
  anomalies.

# Summary. An optional shortened abstract.
# summary: ''

tags:
  - Stormwater networks
  - Fault detection and identification
  - Optimization

# Display this page in the Featured widget?
featured: false

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: 10.23919/ECC64448.2024.10591142

# Custom links.
# Files stored in this page's own folder are referenced by filename alone.
links:
  - type: pdf
    url: stormwater-srcid-paper.pdf
  - type: code
    url: https://github.com/andrewgchio/SWMMBackwardsInference
  - type: slides
    url: stormwater-srcid-slides.pdf

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
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

# Add social media icons at end
share: false
---
